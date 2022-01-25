# 28/01/2022 #
# Progress
- Refactored uploader code
- Got eval() and write() to work on single connection
- Remote uploader now succesfully checks the status of the code
# Discussion
- Currently the code simply waits for a fixed interval before reading the status flag. Unsure of a better solution however
- Eval() and write() work on a single connection, as I now no longer use UART.connect() to create the initial connection, instead opting to use write(). This mean that no direct "connection" object exists, so I've lost the error handling that it offers.
# Guidance #
- 
# Goals #
- 
