# Timelog

* App uploader for remote embedded devices [JavaScript, Web-Bleutooth, Espruino]
* Craig Murray
* 2473420M
* Jonathan Grizou

# Week 1

### 30 Sept 2021

* *0.5 hours* Met supervisor, discussed background and brief
* *2.5 hour* Researched espruino devices and their uses
* *1 hour* Setup github repo and development environment  

# Week 2

### 06 Oct 2021
* *1 hour* Started presentation for next supervisor meeting
* *2 hours* Setup linux environment for development 

### 07 Oct 2021
* *1.5 hours* Made progress on presentation
* *2 hours* Researched into web bluetooth API

### 08 Oct 2021
* *1 hour* Finished presentation
* *1.5 hours* Second meeting and presentation

# Week 3

### 13 Oct 2021
* *2 hours*  Read over Espruino Web IDE source code and documentation

### 15 Oct 2021
* *0.5 hours* Third supervisor meeting

# Week 4

### 18 Oct 2021
* *0.5 hours* Met supervisor to collect Espruino Hardware
* *1 hours* Setup Puck and Bangle devices
* *2 hours* Read over puck.js library documentation

### 19 Oct 2021
* *4 hours* Built practice applications to learn how the devices work

# Week 5 

### 28 Oct 2021
* *3 hours* Tried to install the espruino node package. Ran into multiple issues as some dependencies in the package were out of date.

### 29 Oct 2021
* *0.5 hours* Fourth Supervisor Meeting
* *2 hours* researched history behind Espruino

# Week 6
### 01 Nov 2021
* *2 hours* Researched API design methodologies

### 03 Nov 2021
* *2 hours* Further research into API Design
* *0.5 hours* Collated examples of good API design to examine

### 05 Nov 2021
* *2 hours* Read through codebase of examples found previously

# Week 7
### 10 Nov 2021
* *1 hours* Solved issue with espruino node package - bluetooth dongle i had was using a new chipset that wasn't compatible

### 12 Nov 2021
* *1 hours* Started developing demo app using node.js library

# Week 8 
### 17 Nov 2021
* *2 hours* Researched UART, specifically nordic UART for bluetooth
* *2 hours* Read over uart.js api 

### 18 Nov 2021
* *1 hours* Converted node.js demo to use uart.js instead

### 19 Nov 2021
* *0.5 hours* Prepped for supervisor meeting
* *0.5 hours* Met with supervisor

# Week 9 #

### 23 Nov 2021
* *1 hours* Began work on remote uploader. Wrote functions to retrieve raw github data
* *0.5 hours* Researched into Mozilla Public License, v. 2.0 to better understand how I can use the UART.js script
* *1 hours* Got uploader to write code to puck using data retrieved from github URL
* *1 hours* refactored uploader and updated it to reset stored code before writing

### 26 Nov 2021
* *0.5 hours* Supervisor meeting
* *1 hours* Reflected on feedback from meeting and refined project plan
* *2 hours* Started drafting UML diagram for project

# Week 10 #
### 02 Dec 2021
* *1 hours* Researched Node.js unpkg tool
* *0.5 hours* Installed required packages and tools

### 03 Dec 2021
* *0.5 hours* supervisor meeting

# Week 11 #
### 08 Dec 2021
* *1 hours* Created practice project for working with and publishing npm modules
* *2 hours* Researched methods for saving to flash memory

### 10 Dec 2021
* *0.5 hours* Supervisor Meeting
* *0.5 hours* updated plan 

# Week 12 #
### 16 Dec 2021
* *2 hours* Researched best method for sending flag to device confirming succesful upload
* *1 hours* Researched and drafted up ideas for demo projects
* *3 hours* Tried to get code dump to work properly
* *1 hours* Wrote up status report

### 17 Dec 2021
* *0.5 hours* Supervisor meeting

# Winter Break # 
### 02 Jan 2022
* *2 hours* Researched UML diagrams to refresh knowledge
* *1 hours* Created sequence diagram showing example worfklow of uploader

### 06 Jan 2022
* *1 hours* Wrote abstract for dissertation
* *1 hours* Wrote draft plan for dissertation topics/discussion points

### 8 Jan 2022
* *2 hours* drafted ideas for demo project
* *2 hours* Created demo project for demonstrating uploader

# Week 13 #
### 14 Jan 2022
* *0.5 hours* Supervisor Meeting
* *3 hours* Attempted to debug issues with puck device

### 15 Jan 2022
* *2 hours* Continued fixing hardware issues

# Week 14 #
### 20 Jan 2022
 * *1 hours* Attempted to get interactive demo working
 * *2 hours* Began refactoring uploader to make use of ES6 Classes

### 21 Jan 2022
* *3 hours* Attempted to implement UART.eval() and UART.write() under a single connection, to no success

# Week 15 #
### 24 Jan 2022
* *1 hours* Got uploader to work using a single connection
* *4 hours* Finally fixed the status checker. program now properly detects when code has finished uploading!
* *1 hours* refactored code

### 25 Jan 2022
* *0.5 hours* refactored folder structure and code further
* *1 hours* seperated demos
* *1 hours* Published code to github pages and sent demo to supervisor

### 26 jan 2022
* *1 hours* Fixed a few bugs

### 28 Jan 2022
* *0.5 hours* Supervisor meeting
* *1 hours* Fixed error handling
* *1.5 hours* Got dump() to work succesfully
* *1 hours* Various bugfixes 

### 29 Jan 2022
* *1 hours* Even more errorhandling/fixes

# Week 16 # 
### 3 Feb 2022
* *1 hours* Researched methods for logging data directly on device
* *1 hours* Added functionality for retrieving device type, and planned further demos

# Week 17 #
### 10 Feb 2022
* *3 hours* Tried to get uploader published as NPM script
* *0.5 hours* pixl.js demo for meeting
* *2 hours* Researching distribution methods for javascript libraries 

### 11 Feb 2022
* *0.5 hours* supervisor meeting

# Week 18 #
### 16 Feb 2022
* *2 hours* Ran various tests to try and identify the issue with uploading code to pixl devices
### 17 Feb 2022
* *1 hours* Used uploader to upload multiple programs to the puck/bangle in an attempt to recreate the bug found with the pixl js code

# Week 19 #
### 21 Feb 2022
* *2 hours* Published mock NPM package to test continuous integration methods
* *1 hours* Researched Web BLE security issues for dissertation

### 22 Feb 2022
* *2 hours* Fixed issue where code was not correctly saving to flash memory

### 23 Feb 2022
* *1 hours* published to NPM
* *1 hours* researched jekyll
* *2 hours* Bugfixed hash comparison operation. Kept finding issues with code retrieval on device timing out browser

### 25 Feb 2022
* *2 hours* Researched unpkg issue. Cannot import script probably without browser complaining about linked modules
* *0.5 hours* Supervisor Meeting
* *1 hours* Updated documentation page

### 27 Feb 2022
* *3 hours* fixed unpkg issue. Got library working via CDN and script tag!

# Week 20 #
### 28 Feb 2022
* *1 hours* fixed bug with MD5 checking

### 02 Mar 2022
* *2 hours* diagnosed pixl.js issues
* *1 hours* wireframed demo ideas

### 04 Mar 2022
* *2 hours* forked dinosaur demo and made interactive with web browser
* *0.5 hours* supervisor meeting
* *1 hours* tidied up repository and demos

### 05 Mar 2022
* *1 hours* Setup jekyll site to practice for documentation pages

# Week 21 #
### 07 Mar 2022
* *1.5 hours* fixed issues with interactive dinosaur demo

### 09 Mar 2022
* *1.5 hours* planned user evaluation

### 10 Mar 2022
* *1.5 hours* Wrote up tutorial for documentation
* *1 hours* Researched CSS libraries for improving the UI of the demo apps

# Week 22 #
### 15 Mar 2022
* *2 hours* Dissertation writing
* *3 hours* Fixed issues with documentation setup
* *1 hours* Fixed bug with unpkg script not properly loading

### 16 Mar 2022
* *3 hours* Added demos to documentation
* *1 hours* published documentation
* *2 hours* Designed and Wrote evaluation form

### 18 Mar 2022
* *1 hours* revised evaluation questions
* *2 hours* Performed some evaluations
* *1 hours* identified bug with flash writing, this is now fixed

### 20 Mar 2022
* *2 hours* Dissertation writing

# Week 23 #
# 21 Mar 2022
* *2 hours* Dissertation writing
* *2 hours* found another bug with PIXL flash uploading, attempted to fix
* *3 hours* Further fixing, fixed various bugs with code during testing

# 22 Mar 2022
* *2 hours* dissertation writing
* *1 hours* Setup github action for automating npm updates
* *1 hours* Collated evaluation feedback and wrote update to supervisor

# 23 Mar 2022
* *3 hours* Further dissertation writing. Revised abstract and motivation
* *2 hours* Even more dissertation writing

# 24 Mar 2022
* *2 hours* edited video and added to documentation
* *3 hours* Further writing of draft

# 26 Mar 2022
* *2 hours* Tested asynchronous eval method for retrieiving data from devices
* *2 hours* Bugfixing for asyceval implementation


# Week 24 # 
# 28 Mar 2022
* *4 hours* Dissertation writing - Finished background and analysis

# 29 Mar 2022
* *6 hours* Dissertation writing - revised analysis and background, started design and implementation
* *2 hours* Wrote test scripts for calculating best delay time.
* *2 hours* Ran test script for puck, bangle and pixl

# 30 Mar 2022
* *3 hours* Dissertation writing - Finished design
* *2 hours* Started presentation script
* *1 hours* Generated graphs from test data
* *2 hours* fixed asynceval and pushed to npm

# 31 Mar 2022
* *2 hours* Ran tests for Aync Upload for puck, bangle and pixl
* *1 hours* Generated asynceval test data graphs
* *2 hours* Wrote presentation Script
* *2 hours* Drafted evaluation chapter of dissertation

# 01 Apr 2022
* *2 hours* Expanded background section to discuss security implications of web-bluetooth
* *2 hours* Continued writing evaluation chapter
* *3 hours* Made final release build of remote-uploader and pushed to github
* *2 hours* Wrote presentation slides

# 02 Apr 2022
* *4 hours* Finished implementation chapter

# 04 Apr 2022
* *3 hours* Finished Evaluation chapter
* *2 hours* Wrote conclusion chapter
* *4 hours* Revised dissertation 
* *2 hours* redone presentation

# 05 Apr 2022
* *2 hours* finished presentation
* *2 hours* recorded presentation
* *1 hours* Organized work for submission
