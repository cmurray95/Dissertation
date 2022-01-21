let connection = new Remote(UART);

function connect(){
    connection.connect();
}

let url = document.getElementById("url").value;

function upload(){
    connection.upload(url);
}

function reset() {
    connection.reset();
}

function disc() {
    connection.disconnect();
}

function test() {
    console.log(connection.checkStatus());
}


