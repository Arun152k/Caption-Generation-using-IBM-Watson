# Caption-Generation-using-IBM-Watson

## Introduction:
We have implemented a modest Caption Generator using the servics offered by IBM Watson. The project is deployed in Node-RED (An application for API Integration). The application accepts an image from the user, which is then fed into the Watson Visual Recognition Service (A service offered by IBM Watson to analyze images for scenes, objects, faces, colour and other content using Deep Learning). The necessary information is extracted from the ouptut provided by the Visual Recognition Service, and a suitable caption is generated using the most prominent colour and object present in the image as identified by the Visual Recognition System. We have also displayed the objects/colour identified by the Visual Recognition Service (with a probability score greater than a particular threshold), this information is also fed to the Watson Text to Speech Service, which delivers the audio output.

## Project Flow and Explanation: 

The Node-Red flow is displayed below.

![](Flow%20Diagram/Node%20Red%20Flow.png)
