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
    checkFlag() {
        let flag = true;
        let dump;
        UART.eval('dump();\n', (data) => {
            dump = data;
        });
        console.log(dump);
        return flag;
    }

}