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

// function test() {
//     connection.checkStatus().then(result => {
//         console.log(result);
//         if(result) {
//             alert("Upload complete!");
//         } else {
//             alert("Upload failed!");
//         }
//     });
// }


