function accel(){
    writeVal = `
    Puck.on('accel', a=>{
        LED2.write(a.acc.z < 0);
    });
    Puck.accelOn();\n
    `  
    UART.write(writeVal);
}

accel();