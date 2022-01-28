# Tuesday 25th Jan - Friday 28th Jan
# checksum generator algorithm
# post diagrams to teams
# Wireframe dashboard app
# Refactor Codebase
# Implement file download 
# Check URL for 404 before uploading
# Publish App on NPM


# Demo Ideas:
## Smart meter
## Online "dashboard" for collating espruino programs that can be easily downloaded and uploaded via remote uploader
### users can mark apps as mobile/desktop controlled. mobile control on desktop gives a QR code to open the site on the users phone.

I went over the what we discussed today, regarding comparing the code on the device with the code that has been uploaded. After researching it again, I realised I was misremembering and confusing two seperate issues I had encountered already; In terms of using dump() to get code from the device, I have attached some screenshots showing the issue I encounter here. Even saving to flash memory, the value returned from dump() is substantially different from what is uploaded onto the device. With a small program like the one shown, It would be simple enough to parse through and potentially extract what was needed, but for larger programs/more complex espruino devices, I am not entirely sure what the best method would be to parse through it (And to some extent feel like such a solution wouldn't be valid - would parsing through to find the "correct" uploaded code segments not taint the validity of the checking process?). 

Any feedback on the issue would be appreciated. 

In the meantime, my current goal over the weekend is to add in some error handling to the uploader, and write up some documentation to go along with it, with the intent of publishing it as a NPM package asap so that there is at least a basic "working" version out there, that I can modify and iterate upon.