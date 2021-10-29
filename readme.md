# App uploader for remote embedded devices [JavaScript, Web-Bleutooth, Espruino]

 

https://www.espruino.com/ is a JavaScript interpreter that runs on a microcontroller. It is like having an Arduino running JS code. An espruino device can be programmed and controlled via Bleutooth natively from a web-browser using WebBleutooth. This means that anyone with a smartphone can connect to an espruino device, push code and interact with it via Bleutooth. All without installing anything on their smartphone, just from a URL.
 

Espruino devices are varied, from a standalone microcontroller to a smartwatch (bangle.js) and including simple Bleutooth buttons (puck.js) and LCD screen, see https://shop.espruino.com/. You will be given such a device of your choice for the duration of this project.

There are many tools to upload code on a Espruino device. The most user friendly are a web code editor at https://espruino.github.io/EspruinoWebIDE/ and an app store for the smartwatch at https://banglejs.com/apps/.

 

This project aims to develop a third options to upload code on an Espruino device that is tied with the future application that interact with the Espruino device. 

 

For example, if we have a temperature sensor on an espruino device that we want to monitor. We want the user to load a single URL on their phone, push code on the espruino device that collect temperature reading and expose them via bleutooth, and, once the code is pushed, let the webpage connect to the device and read the value sent and display them on the webpage. All within the same webpage, no need to go via  https://espruino.github.io/EspruinoWebIDE/ or https://banglejs.com/apps/ and all being transparent to the user.

The specifics must be defined by you but the overall goals are to:


	
* The uploader should work by pulling code from a URL that contain the code to push (user defined, for example on a Gist/Github page)
	
 * The uploader should be easy to load on any new webpage in the background and expose a function to the user for pressing a button to start the upload process and confirm when it is done

 * Once the code is uploaded on the device, the webpage needs to be made aware of it so communication between the smartphone and the device can be started.
