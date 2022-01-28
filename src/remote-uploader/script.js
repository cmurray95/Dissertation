let connection = new Remote(UART);

function connect(){
    connection.connect();
}

function upload(){
    let url = document.getElementById("url").value;
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

function static() {
    let url = "https://raw.githubusercontent.com/cmurray95/Dissertation/remote-uploader/src/demos/accel-test.js"
    connection.upload(url,0).then(result => {
        if(result){
            alert("Upload succesful!");
        } else {
            alert("Upload failed!");
        }
    })
}

function staticFlash() {
    let url = "https://raw.githubusercontent.com/cmurray95/Dissertation/remote-uploader/src/demos/accel-test.js"
    connection.upload(url,1).then(result => {
        if(result){
            alert("Upload succesful!");
        } else {
            alert("Upload failed!");
        }
    })
}

function dump(){
    connection.dump().then((result) => {
        console.log(result);
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

function bangle_demo() {
    let url = "https://raw.githubusercontent.com/cmurray95/Dissertation/remote-uploader/src/demos/bangle-test.js"
    connection.upload(url).then(result => {
        if(result){
            alert("Upload succesful!");
        } else {
            alert("Upload failed!");
        }
    })
}

