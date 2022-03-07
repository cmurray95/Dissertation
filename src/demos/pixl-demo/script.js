let connection = new Remote(UART);

function connect(){
    connection.connect();
}

function upload() {
    let url = "https://raw.githubusercontent.com/cmurray95/Dissertation/main/src/demos/pixl-demo/dinosaur_interactive.js"
    connection.upload(url,1).then(result => {
        if(result){
            window.location.replace("C:\\Users\\craig\\Documents\\Uni\\year 4\\Dissertation\\src\\demos\\pixl-demo\\dinosaur\\index.html");
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
