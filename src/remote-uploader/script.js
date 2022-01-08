let connection;

/**
 * Connect to device 
 */
function connect(){
    UART.connect((c) => {
        if(!c) throw "Error! Could not connect to device";
        connection = c;
    })
}

/**
 * 
 * @param {String} url link to raw github file containing code.
 * @returns promise containing code as a string
 */
async function getRawCode(url){
    const res = await fetch(url);
    let data = await res.text();
    data = data + "\n";
    return data;
}

/**
 * Upload code retrieved from URL
 */
function upload() {
    let url = document.getElementById("url").value;
    let code = getRawCode(url);
    code.then((raw) => {
        reset();
        connection.write(raw);
    });
    // flag test
    //connection.write("function test(){Puck.getTemperature();}");
}

/**
 * Resets device removing currently stored code
 */
function reset(){
    connection.write("reset();\n");
}

/**
 * 
 * @returns true if code was uploaded succesfully
 */
 function checkFlag() {
    let flag = true;
    let dump;
    UART.eval('dump();\n', (data) => {
        dump = data;
    });
    console.log(dump);
    return flag;
}


