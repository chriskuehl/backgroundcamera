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


cordova.define("cordova/plugin/backgroundcamera", 
	function(require, exports, module) {
		var exec = require("cordova/exec");
		
		var BackgroundCamera = function() { }
		BackgroundCamera.prototype.takePicture = function(callback) {
			console.log("taking pic");
			exec(callback, callback, "BackgroundCamera", "takePicture", []);
		};
		
		var backgroundCamera = new BackgroundCamera();
		module.exports = backgroundCamera;
	}
);
