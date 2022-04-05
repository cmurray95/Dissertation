let puckUrl = "https://raw.githubusercontent.com/cmurray95/Dissertation/remote-uploader/src/demos/accel-test.js";
let bangleUrl = "https://raw.githubusercontent.com/espruino/BangleApps/master/apps/flappy/app.js";
let pixlUrl = "https://raw.githubusercontent.com/cmurray95/Dissertation/main/src/demos/pixl-demo/dinosaur_interactive.js"

function halt(ms) {
    return new Promise(res => setTimeout(res, ms));
}

let connection = new Remote();

function connect(){
    connection.connect();
}

async function runTests(numTests = 200){
    for(let i = 0; i < numTests; ++i){
      await tests();
    }
    document.getElementById("status").innerHTML = "finished! Click create file and download your results.";
}

async function tests(){
    let start = performance.now();
    let result = false;
    result = await connection.upload(bangleUrl).then((res) => {
        return res;
    })
    let end = performance.now();
    document.getElementById('textbox').value += "\n" + (end - start) + "," + result + ",";
    await halt(5000);
}
 
(function() {
    var file = null,
      output = (text) => {
        let data = new Blob([text], {
          type: 'text/plain'
        });
  
        file = window.URL.createObjectURL(data);
  
        return file;
      };
  
    document.getElementById('create').addEventListener('click', function() {
      var link = document.getElementById('downloadlink');
      link.href = output(document.getElementById('textbox').value);
      link.style.display = 'block';
    }, false);
  })();
