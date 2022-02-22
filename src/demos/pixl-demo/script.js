let connection = new Remote(UART);

function connect(){
    connection.connect();
}

function upload() {
    let url = "https://raw.githubusercontent.com/espruino/EspruinoDocs/master/examples/Dinosaur%20Game.js"
    connection.upload(url,1).then(result => {
        if(result){
            document.getElementById("status").innerHTML = "Succesful!";
        } else {
            document.getElementById("status").innerHTML = "Failed!";
        }
    })
}


