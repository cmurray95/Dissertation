let connection = new Remote();

function connect(){
    connection.connect();
}

function upload() {
    let url = "https://raw.githubusercontent.com/cmurray95/Dissertation/main/src/demos/pixl-demo/dinosaur_interactive.js"
    connection.upload(url).then(result => {
        if(result){
            document.getElementById("controller").style.visibility = "visible";
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


function jump() {
    connection.call("jump();");
}

function restart() {
    connection.call("restart();");
}