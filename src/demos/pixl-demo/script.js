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

function upload_brick() {
    let url = "https://raw.githubusercontent.com/espruino/EspruinoApps/master/apps/breakout/app.js"
    connection.upload(url,1).then(result => {
        if(result){
            document.getElementById("status").innerHTML = "Succesful!";
        } else {
            document.getElementById("status").innerHTML = "Failed!";
        }
    })
}

function upload_badge() {
    let url = "https://raw.githubusercontent.com/espruino/EspruinoApps/master/apps/pixlbadge/app.js"
    connection.upload(url,1).then(result => {
        if(result){
            document.getElementById("status").innerHTML = "Succesful!";
        } else {
            document.getElementById("status").innerHTML = "Failed!";
        }
    })
}

function upload_lunar() {
    let url = "https://raw.githubusercontent.com/espruino/EspruinoApps/master/apps/lunarlander/app.js"
    connection.upload(url,1).then(result => {
        if(result){
            document.getElementById("status").innerHTML = "Succesful!";
        } else {
            document.getElementById("status").innerHTML = "Failed!";
        }
    })
}
