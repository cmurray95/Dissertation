# 26/11/2021 #
# Progress
- Wrote prototype uploader which pulls from github and uploads to device
# Discussion
- Need to consider methods of retrieving code stored on private repos - either via github login on site, or using authentication tokens
- Would the project be better served as a node package allowing people to implement the uploader as a backend, or as a webapp and script
- Next step is to download and upload file
# Guidance #
- Write as a NPM package - look into unpackage to export it as a script as well as node.js package
- Comparing code on device against code to upload - checksum is fine
# Goals #
- Implement file uploader
- Retrieve code from device

