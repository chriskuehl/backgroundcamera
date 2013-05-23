//
//  BackgroundCamera.h
//  
//  BackgroundCamera by Chris Kuehl
//  PhoneGap plugin for taking pictures in the background on iOS.
//  https://github.com/chriskuehl/backgroundcamera
//
//  Released as free software under the MIT license; see GitHub repository
//  for details.
//

#import <Cordova/CDV.h>

@interface BackgroundCamera : CDVPlugin

- (void)takePicture:(CDVInvokedUrlCommand*)command;

@end
