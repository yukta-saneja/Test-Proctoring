# Test-Proctoring

This project is a part of Assignment for Round-2 of eLitmus hiring process. 
Not having much experience with web development, I was only able to configure the frontend part of the project. 

## Description

The index.html file runs to display a web page where the candidate can enter his/her details and submit them to start the test, the page also asks for permission to use webcam and mic and shows the webcam output in a small window underneath. It also contains a "hidden" canvas element to capture the image out of the webcam display in every 3 minutes(it can be viewed by commenting "visibility: hidden;" for "#canvas" in style.css), it is just for the purpose to send the captured images to the backend with their timestamp.
The manifest.json file has been included to display the index.html file as a popup in chrome extension. However chrome extensions do not allow to set permissions of audioCapture and videoCapture, hence my project is unable to use webcam and mic when used as a chrome extension. 

## Directions

-Download the code as a zip file.
-Extract all files from the downloaded folder.
-Open "index.html" file to view the webpage as it is.

 ### For chrome extension view
 -Click on the puzzle icon (Extensions) in navigation bar.
 -Click on "Manage extensions"
 -Turn the "Developer mode" toggle on.
 -Click "Load unpacked"
 -Select the unzipped folder downloaded through this repository.
 -The extension should be loaded now, and can be accessed through the extensions icon.
