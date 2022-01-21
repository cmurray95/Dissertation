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
    UART.write('E.green()');
}

// to chain promise: https://github.com/kozhevnikov/proxymise
const proxymise = (target) => {
    if (typeof target === 'object') {
      const proxy = () => target;
      proxy.__proxy__ = true;
      return new Proxy(proxy, handler);
    }
    return typeof target === 'function' ? new Proxy(target, handler) : target;
  };
  
  const handler = {
    construct(target, argumentsList) {
      if (target.__proxy__) target = target();
      return proxymise(Reflect.construct(target, argumentsList));
    },
  
    get(target, property, receiver) {
      if (target.__proxy__) target = target();
      if (property !== 'then' && property !== 'catch' && typeof target.then === 'function') {
        return proxymise(target.then(value => get(value, property, receiver)));
      }
      return proxymise(get(target, property, receiver));
    },
  
    apply(target, thisArg, argumentsList) {
      if (target.__proxy__) target = target();
      if (typeof target.then === 'function') {
        return proxymise(target.then(value => Reflect.apply(value, thisArg, argumentsList)));
      }
      return proxymise(Reflect.apply(target, thisArg, argumentsList));
    }
  };
  
  const get = (target, property, receiver) => {
    const value = typeof target === 'object' ? Reflect.get(target, property, receiver) : target[property];
    if (typeof value === 'function' && typeof value.bind === 'function') {
      return Object.assign(value.bind(target), value);
    }
    return value;
  };
  
  
  // handler that return promise that check type of prop and return a promise from the corresponding asynceval call
  const robotHandler = {
    get: (target, prop) => {
      if (prop in target) {
        return target[prop];
      } else {
        return new Promise((resolve, reject) => {
            // this is added by proxymise in the background
            if (prop === "then"){
                // console.log("TOTOTOTOTOTOT")
                // probably somethign smart to be done here
                // for now I skip
                resolve()
            } else {
              // check typeof prop on the device, and then resolve depending on type
              target.asyncEval('typeof ' + prop).then( (propType) => {
                
                // console.log('PROTOYPE:', propType)
                // console.log(target, prop)
                
                var result;
                if(propType === "function") {
                    // then we shall return a function that returns a promise
                    result = function() {
                    var command = prop+"("+[].map.call(arguments,x=>JSON.stringify(x)).join(",")+")"    
                    
                    return new Promise((resolve, reject) => {
                          resolve  (target.asyncEval(command))
                      })
                    }    
                } else {
                    // we return the promise
                    result = new Promise((resolve, reject) => {
                      resolve(target.asyncEval(prop))
                    }) 
                }
  
                resolve(result)
              })
            }
          });
      }
    }
  };
  
  // const trackedRobot = trackClass(Robot);
  
  // // declare a robot with communication via UART
  // var robot = new trackedRobot(UART);
  
  var robot = new Robot(UART);
  
  const proxyRobot = new Proxy(robot, robotHandler);
  const proxymiseRobot = proxymise(proxyRobot)
  
  // attach an event handler to the event called 'test'
  robot.onEvent('test', function(d) {
    console.log("test event triggered with: ", d)
  })
  
  
  function connect() {
    robot.connect()
  }
  
  function disconnect() {
    robot.disconnect()
  }
  
  function startReporting() {
    robot.write("var event = setInterval(function(){eval(process.env.CONSOLE).println(JSON.stringify({'eventName': 'test', 'eventData': true}))},1000);\n")
  }
  
  function stopReporting() {
    robot.write("clearInterval(event);\n")
  }
  
  function clb(data) {
    console.log('callback: ', data)
  }
  
  function eval() {
    robot.eval('2+2', clb)
  }
  
  function forward() {
    robot.write('forward();\n')
  }
  
  function backward() {
    robot.write('backward();\n')
  }
  
  function left() {
    robot.write('left();\n')
  }
  
  
  function right() {
    robot.write('right();\n')
  }
  
  
  function stop() {
    robot.write('stop();\n')
  }
  
  function setup() {
    // createCanvas(400, 400);
    // frameRate(1)
  }
  
  function draw() {
    // background(220);
  }