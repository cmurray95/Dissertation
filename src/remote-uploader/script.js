let connection = new Remote(UART);

function connect(){
    connection.connect();
}

let url = document.getElementById("url").value;

function upload(){
    connection.upload(url).then(result => {
        if(result){
            alert("Upload succesful!");
        } else {
            alert("Upload failed!");
        }
    })
}

function reset() {
    connection.reset();
}

function disc() {
    connection.disconnect();
}

function test() {
        // connection.checkStatus().then(result => {
        //     console.log(result);
        //     if(result) {
        //         alert("Upload complete!");
        //     } else {
        //         alert("Upload failed!");
        //     }
        // });
}

function static() {
    let url = "https://raw.githubusercontent.com/cmurray95/Dissertation/remote-uploader/src/demos/accel-test.js"
    connection.upload(url).then(result => {
        if(result){
            alert("Upload succesful!");
        } else {
            alert("Upload failed!");
        }
    })
}

function interactive() {
    let url = "https://raw.githubusercontent.com/cmurray95/Dissertation/remote-uploader/src/demos/colour-test.js"
    connection.upload(url).then(result => {
        if(result){
            window.location.replace("https://cmurray95.github.io/Dissertation/src/demos/colour-test.html");
        } else {
            alert("Upload failed!");
        }
    })
}
