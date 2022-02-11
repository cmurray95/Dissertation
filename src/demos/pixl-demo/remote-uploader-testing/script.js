let connection = new Remote(UART);

function connect(){
    connection.connect();
}
function upload() {
    let url = "https://raw.githubusercontent.com/espruino/EspruinoDocs/master/examples/Dinosaur%20Game.js"
    connection.upload(url,0).then(result => {
        if(result){
            alert("Upload succesful!");
        } else {
            alert("Upload failed!");
        }
    })
}


