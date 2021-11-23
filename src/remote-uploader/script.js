//import {UART} from './uart'

/**
 * 
 * @param {String} url link to raw github file containing code.
 * @returns promise containing code as a string
 */
async function getRawCode(url){
    const res = await fetch(url);
    let data = await res.text();
    data = data.concat(data, "\n");
    return data;
}

function upload(url){
    let code = getRawCode(url);
    code.then((raw) => {
        UART.write(raw);
    });
}


