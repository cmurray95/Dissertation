# 19/11/2021 #
# Progress
- Discovered Nordic UART - This seems like a more viable option for writing the remote uploader than the espruino node library
- More research into API design
# Discussion
- Found that a UART.js library already exists for writing code to the device - is a more universal web blueooth script than the puck.js node library
- Converted the node.js demo to use the uart.js library
# Guidance #
- Abstract out the uart.js library - copy code from github file, directly upload onto device
# Goals #
- Wipe device, parse code from github url, write code to device

