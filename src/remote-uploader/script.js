let connection;

/**
 * Connect to device 
 */
function connect(){
    UART.connect((c) => {
        if(!c) throw "Error!";
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
}


/**
 * Resets device removing currently stored code
 */
function reset(){
    connection.write("reset();\n");
}



