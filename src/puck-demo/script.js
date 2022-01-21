// function ledOn(colour) {
//     writeVal = "LED" + colour + ".set();\n";
//     UART.write(writeVal);
// };

// function ledOff() {
//     writeVal = "LED1.reset();LED2.reset();LED3.reset();\n"
//     UART.write(writeVal);
// };

// temp = 0;
// battery = 0;
// function printStatus(){
//     UART.eval('Puck.getTemperature()', function(t) {
//         temp = t;
//         console.log(temp);
//       });
//     UART.eval('Puck.getBatteryPercentage()', function(b){
//         battery = b;
//     });
//     document.getElementById("status").innerHTML = "<p> Temperature = " + temp + "</p><p>Battery = " + battery + "%</p>";
// }

// function accelGet(){
//     writeVal = `
//     Puck.on('accel', a=>{
//         LED2.write(a.acc.z < 0);
//     });
//     Puck.accelOn();\n
//     `  
//     return writeVal;
// }

// function accel(){
//     UART.write(accelGet());
// }

// function reset() {
//     UART.write("reset();\n");
// };

function green() {
    Puck.green();
}