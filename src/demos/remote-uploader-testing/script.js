let connection = new Remote();

function connect(){
    connection.connect();
}

async function eval() {
    res = await connection.eval("E.getTemperature()");
    console.log(res);
}

function connected(){
    if (connection.isConnected()) {
        document.getElementById("connected").innerHTML = "yes";
    } else {
        document.getElementById("connected").innerHTML = "no";
    }
}

function upload(){
    let url = document.getElementById("url").value;
    connection.upload(url).then(result => {
        if(result){
            document.getElementById("status").innerHTML = 'success!';
        } else {
            document.getElementById("status").innerHTML = 'failed!';
        }
    })
}

function reset() {
    connection.reset();
}

function disc() {
    connection.disconnect();
}

function data() {
    connection.getDeviceType().then(result => {
        console.log(result);
    })
}

function dino() {
    let url = "https://raw.githubusercontent.com/cmurray95/Dissertation/main/src/demos/pixl-demo/dinosaur_interactive.js"
    connection.upload(url,1).then(result => {
        if(result){
            document.getElementById("status").innerHTML = "success!";
        } else {
            document.getElementById("status").innerHTML = "Failed!";
        }
    })
}

function static() {
    let url = "https://raw.githubusercontent.com/cmurray95/Dissertation/remote-uploader/src/demos/accel-test.js"
    connection.upload(url,0).then(result => {
        if(result){
            document.getElementById("status").innerHTML = 'success!';
        } else {
            document.getElementById("status").innerHTML = 'failed!';
        }
    })
}

function staticFlash() {
    let url = "https://raw.githubusercontent.com/cmurray95/Dissertation/remote-uploader/src/demos/accel-test.js"
    connection.upload(url,true).then(result => {
        if(result){
            document.getElementById("status").innerHTML = 'success!';
        } else {
            document.getElementById("status").innerHTML = 'failed!';
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
    connection.upload(url, true).then(result => {
        if(result){
            window.location.replace("https://cmurray95.github.io/Dissertation/src/demos/colour-test.html");
        } else {
            document.getElementById("status").innerHTML = 'failed!';
        }
    })
}

function bangle_demo() {
    let url = "https://raw.githubusercontent.com/cmurray95/Dissertation/remote-uploader/src/demos/bangle-test.js"
    connection.upload(url).then(result => {
        if(result){
            document.getElementById("status").innerHTML = 'success!';
        } else {
            document.getElementById("status").innerHTML = 'failed!';
        }
    })
}

function bangle_flash_test(){
    let url = "https://raw.githubusercontent.com/cmurray95/Dissertation/remote-uploader/src/demos/bangle-test.js"
    connection.upload(url, true).then(result => {
        if(result){
            document.getElementById("status").innerHTML = 'success!';
        } else {
            document.getElementById("status").innerHTML = 'failed!';
        }
    })
}

function bangle_flappy() {
    // Bangle app credit to https://github.com/espruino/BangleApps/commits?author=adamschmalhofer
    let url = "https://raw.githubusercontent.com/espruino/BangleApps/master/apps/flappy/app.js"
    connection.upload(url).then(result => {
        if(result){
            document.getElementById("status").innerHTML = 'success!';
        } else {
            document.getElementById("status").innerHTML = 'failed!';
        }
    })
}

function pixl() {
    let url = "https://raw.githubusercontent.com/cmurray95/Dissertation/main/src/demos/pixl-demo/dinosaur_interactive.js"
    connection.setDelay(10000);
    document.getElementById("status").innerHTML = "Uploading..."
    connection.upload(url,true).then(result => {
        if(result){
            window.location.replace("https://cmurray95.github.io/Dissertation/src/demos/pixl-demo/dinosaur/index.html");
        } else {
            document.getElementById("status").innerHTML = "Failed!";
        }
    })
}