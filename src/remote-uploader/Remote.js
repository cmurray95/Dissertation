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
        this.UART.connect((c) => {
            if(!c) throw "Error! Could not connect to device";
            // clear REPL
            c.write("\x03");
            this.connection = c;
        })
        this.connected = true;
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
     * 
     * @param {String} url link containing code to be uploaded 
     */
    upload(url) {
        if(!this.connected) throw "Error! Device not connected!";
        let code = this.#getRawCode(url);
        code.then((raw) => {
            reset();
            this.connection.write(raw);
        })
    }

    /**
     * Resets device removing currently stored code
     */
    reset() {
        if(!this.connected) throw "Error! Device not connected!";
        this.connection.write("reset();\n");
    }

    /**
     * Disconnect device
     */
    disconnect() {
        if(!this.connected) throw "Error! Device not connected!";
        this.connection.close();
        this.connected = false;
    }

    /**
     * 
     * @returns true if code was uploaded succesfully
     */
    checkStatus() {
        let val = Math.floor(Math.random(1000));
        let ret = -1;
        let code = `function green(){return '${val}';}\n`;
        this.connection.write(code);
        // This is not ideal; launches a second connection
        this.UART.eval('green()', function(t) {
            ret = t;
          });
        if(ret == val){
            return true;
        }
        return false;
    }
}

