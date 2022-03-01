# 24/02/2022 #
# Progress
- Further attempts at pixl demo
- Published app
- fixed some bugs
- rebuilt previous demos using NPM installation
# Discussion
- Thinking of either scrapping code comparison checks, or implementing something different - I have done some tests and it simply isn't efficient. Dumping code from the device takes about 4-6 seconds, depending on the amount of code being retrieved. This then needs to be done twice, once for checking code before upload, and once for verifying status of the upload, which doesn't feel good from a UX perspective
# Guidance #
- Combine code checker with flag
# Goals #
- Add demo to documentation  page