# Remote-Uploader
For instructions regarding how to use the remote uploader tool, please view the associated [readme](readme.md). 

Links to deployed versions of the project are available at the end of this file.

# Folder Structure
All of the relevant code files are found within the src directory. 

## remote-uploader
This folder contains the source code for the remote-uploader library, alongside the minified version that is used with unpkg.

## Demos
The demos folder contains all the demos that were made throughout the development of the project. Each of these demos can be run by loading the associated index.html file into
a web bluetooth compatible browser (we recommend google chrome for this)

## Documentation
The remote-uploader library includes a companion documentation site. The code for the documentation is available in the documentation folder. 
To build and view the documentation locally, please see the documentation [instructions](./documentation/readme.md)

## Tests
The tests folder contains the files used to run the performance tests for both the delay and asynchronous eval() implementations of the library. For instructions on how to run the tests, please refer to the [test instructions](./tests/readme.md)

# Project Links
## Links to project
- Code for the project can be found under the Dissertation repo (https://github.com/cmurray95/Dissertation) however it is recommended that the following links are used, as this is where the project is likely to be maintained after the dissertation has been submitted
- Code for the remote-uploader project is available here - https://github.com/cmurray95/espruino-remote-uploader/tree/main/src
- Code for the documentation is available here - https://github.com/cmurray95/espruino-remote-uploader/tree/docs/
- The NPM page for the project is available here - https://www.npmjs.com/package/remote-uploader
- The documentation for the project can be found here - https://cmurray95.github.io/espruino-remote-uploader/

## Links to all demos:
### Demos Built While Testing 
- Puck Demo - https://cmurray95.github.io/Dissertation/src/demos/colour-test.html
  - This was the first demo built for the project, and was a very simple test to better understand how espruino devices (and web bluetooth devices in general) worked
- UART Demo - https://cmurray95.github.io/Dissertation/src/demos/puck-demo/index.html
  - This demo was built using the uart.js library as a way to learn how it worked before I began working on the remote-uploader
- Remote-Uploader test - https://cmurray95.github.io/Dissertation/src/demos/remote-uploader-testing/index.html
  - This served as a playground of sorts, used to test various features of the remote-uploader before they were pushed to the main repo
- Pixl Demo - https://cmurray95.github.io/Dissertation/src/demos/pixl-demo/index.html
  - The pixl demo was used to debug various issues encountered whilst working on the remote-uploader tool. 

The above demos were all built solely for testing, and as such lack any styling. 

Better versions of these demos, rebuilt using the remote-uploader tool, are all available at the documentation page for the remote-uploader tool here - https://cmurray95.github.io/espruino-remote-uploader/demos/demos.html

## Links to demo videos
- Pixl dinosaur demo - https://youtu.be/I4F7HAVcAbM
- flappy demo - https://youtu.be/MnQUfgkJwfo
- accel demo - https://youtu.be/q0ZsMa8xCGo
- colour demo - https://youtu.be/Dv_mKUEkd0E 