//
//  bgcamera.js
//  
//  BackgroundCamera by Chris Kuehl
//  PhoneGap plugin for taking pictures in the background on iOS.
//  https://github.com/chriskuehl/backgroundcamera
//
//  Released as free software under the MIT license; see GitHub repository
//  for details.
//

window.bgSnapPicture = function(callback) {
	log("Snapping picture...");
	
    cordova.exec(function(ret) {
    	console.log("Received callback in lib, sending to program...");
        callback(ret);
    }, function(err) {
    	console.log("Received error callback in lib, sending null to program...");
	    callback(null);
    }, "BackgroundCamera", "echo", ["a"]);
};
