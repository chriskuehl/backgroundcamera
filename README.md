BackgroundCamera
================

BackgroundCamera is a PhoneGap plugin that allows you to take pictures in the background (with no user interaction)
on iOS.

The call is asynchronous, allowing you to keep the UI responsive while you wait for the picture to be taken.

Currently only the front-facing camera is supported, but it should be trivial to also support the rear camera.

BackgroundCamera has been tested with PhoneGap 2.7.0 on iOS 6.

## Usage
To take a picture, simply call `backgroundCamera.takePicture(callback)`.

    var backgroundCamera = cordova.require("cordova/plugin/backgroundcamera");
    
    backgroundCamera.takePicture(function(b64) {
        var img = document.getElementById("picture");
        img.src = "data:image/jpeg;base64," + b64;
    });

A full working example project is included under `example/ios` in the source code repository. The important bits are
[here](https://github.com/chriskuehl/backgroundcamera/blob/master/example/ios/www/index.html).

## Installation
To install BackgroundCamera in your PhoneGap project,

1. Copy `BackgroundCamera.h` and `BackgroundCamera.m` into the `Classes` folder of your project.
2. Copy `bgcamera.js` into the `www` directory of your project (or some subdirectory).
3. Add the following entry to your `config.xml` file in the `<plugins>` section:
       <plugin name="BackgroundCamera" value="BackgroundCamera" />
4. Include `bgcamera.js` in your HTML pages.

## License
BackgroundCamera is copyright &copy; 2013 Chris Kuehl, with original code released under an MIT license. See LICENSE
for details.
