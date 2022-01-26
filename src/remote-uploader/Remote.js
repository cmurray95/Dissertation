class Remote { 
    constructor(UART){
        this.UART = UART;
        this.connected = false;
        this.connection;
    }

    /**
     * Connect to device 
     */
    connect(){
        // this.UART.connect((c) => {
        //     if(!c) throw "Error! Could not connect to device";
        //     // clear REPL
        //     c.write("\x03");
        //     this.connection = c;
        // })
        // this.connected = true;

        // Initialize connect and clear REPL
        this.UART.write("\x03");
    }

    /**
     * 
     * @param {String} url link containing code to be uploaded 
     * @returns promise indicating if upload was succesful
     */
    async upload(url) {
        //if(!this.connected) throw "Error! Device not connected!";
        let code = this.#getRawCode(url);
        code.then((raw) => {
            reset();
            this.UART.write(raw);
        });
        let success = false;
        await this.#checkStatus().then(result => {
            success = result;
        });
        return success;
    }

    /**
     * Resets device removing currently stored code
     */
     reset() {
        //if(!this.connected) throw "Error! Device not connected!";
        this.UART.write("reset();\n");
    }

    /**
     * Disconnect device
     */
    disconnect() {
        //if(!this.connected) throw "Error! Device not connected!";
        this.UART.close();
        this.connected = false;
    }

    /**
     * 
     * @param {String} url link to raw github file containing code.
     * @returns promise containing code as a string
     */
     async #getRawCode(url) {
        const res = await fetch(url);
        let data = await  res.text();
        data = data + "\n";
        return data;
    }

    /**
     * Delay execution
     * @param {Timer} ms 
     * @returns 
     */
    #halt(ms) {
        return new Promise(res => setTimeout(res, ms));
      }

    /**
     * Write checksum to device
     * @returns checksum
     */
    #writeStatus() {
        // Generate checksum
        let val = Math.floor(Math.random() * 100);
        let code = `function check(){return '${val}';}\n`;
        this.UART.write(code);
        return val;
    }

    /**
     * Check if code upload succeeded
     * @returns true if code was uploaded succesfully
     */
    async #checkStatus() {
        this.#writeStatus();
        // comparator
        let cmp = -1;
        let checksum = this.#writeStatus();
        this.UART.eval('check()', (t) => {
            cmp = t;
          });
        // Wait for eval to finish
        await this.#halt(2000);
        return cmp == checksum;
    }
}

