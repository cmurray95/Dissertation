# User manual for remote.js 

## Public Methods
### connect()
- Establishes a UART connection with the webpage for writing/reading data from espruino devices

### Upload(url, flash)
- Uploads code stored at url and writes to the connected device. Flash flag determines which area of storage code will be written to (Flash uploading is not possible for bangle devices).
- Returns a promise indicating if the upload was succesful

### reset()
- Resets the device, removing any currently stored code

### disconnect()
- Disconnects from device

### getDeviceType()
- Returns promise containing the device type (e.g. PUCKJS or PIXLJS)

### dump()
- Returns promise containing code currently stored within flash storage on the device

