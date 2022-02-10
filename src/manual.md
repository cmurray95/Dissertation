# User manual 

## Public Methods
### connect()
- Establishes a UART connection with the webpage for writing/reading data from espruino devices

### Upload(url, flash)
- Uploads code stored at url and writes to the connected device. Flash flag determines which area of storage code will be written to.
- Returns a promise indicating if the upload was succesful

### reset()
- Resets the device, removing any currently stored code

### disconnect()
- Disconnects from device

### getDeviceType()
- Returns promise containing the device type (e.g. PUCKJS or PIXLJS)

### dump()
- Returns promising containing code currently stored within flash storage on the device

Describe how to use your software, if this makes sense for your code. Almost all projects should have at least some instructions on how to run the code. More extensive instructions can be provided here.
