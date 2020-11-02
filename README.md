# Caption-Generation-using-IBM-Watson

## Introduction:
We have implemented a modest Caption Generator using the servics offered by IBM Watson. The project is deployed in Node-RED (An application for API Integration). The application accepts an image from the user, which is then fed into the Watson Visual Recognition Service (A service offered by IBM Watson to analyze images for scenes, objects, faces, colour and other content using Deep Learning). The necessary information is extracted from the ouptut provided by the Visual Recognition Service, and a suitable caption is generated using the most prominent colour and object present in the image as identified by the Visual Recognition System. We have also displayed the objects/colour identified by the Visual Recognition Service (with a probability score greater than a particular threshold), this information is also fed to the Watson Text to Speech Service, which delivers the audio output.

## Project Flow and Explanation: 

The Node-Red flow is displayed below.

![](Flow%20Diagram/Node%20Red%20Flow.png)

The functions of each node is given below:
 
* Homepage Template: This template node serves as the home page of our application. It is where the image to be recognised is given as intput. Once the objects in the image are recognised by the Watson Visual Recognition Service, the recognised objects are displayed along with their probability score.

* Visual Recognition: This node allows us to utilise the IBM Watson's Visual Recognition Service to recognise objects in an image. 

* Recognising Elements: This function node filters/extracts the necessary information provided by the Visual Recognition node, and returns this information to the Homepage Template.

* Watson Recognition: This function node identifies the dominant colour and dominant object/class present in the input image using the information given by the Visual Recognition node.

* Watson_Recognition Template: This template node displays the information (dominant colour and dominant object/class present in the input image) as identified by the Watson Recognition function node 

* Feeding to Speech:  This function node filters/extracts the necessary information provided by the Visual Recognition node, and returns this information to the Text_to_Speech Template.

* Text_to_Speech Template: This template prepares the message to be sent to the Text to Speech Service.

* Text to Speech: This node allows us to utilise the IBM Watson's Text to Speech Service.

* Play Audio: The message prepared by the Text_to_Speech node would be played as an audio output by the help of this node.

The Homepage of the application is shown below:

![](Home%20page%20and%20Output/Home%20page.png)

The image to be recognised is uploaded by clicking the Submit Button. 
The Ouput after uploading the image is shown below: 

![](Home%20page%20and%20Output/Ouput.png)

The recognised classes are displayed under "The Recognised Objects" Table along with their respective probability score. The suitable caption is also generated in the end (In this instance, it displays "alabaster color Taj Mahal" as the generated caption). Further, all the classes present under "The Recognised Objects" Table are given as audio ouput (In this instance, the audio output would be, "Taj Mahal, building, memorial, alabaster color").

Note:
We have attempted this project with very limited amount of JavaScript knowledge. We have utilized codes available in the internet and made necessary changes to them, to suit our purpose. Regardless, our knowledge on JavaScript has imporved. 
