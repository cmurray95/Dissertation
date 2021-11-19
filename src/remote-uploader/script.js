async function getCode(){
    let code = 'https://github.com/cmurray95/Dissertation/blob/main/src/puck-demo/script.js'
    const res = await fetch(code);
    const data = await res.text();
    console.log(data);
}

getCode();