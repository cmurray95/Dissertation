function accel(){
    Puck.on('accel', a=>{
        LED2.write(a.acc.z < 0);
    });
    Puck.accelOn();
}

accel();