Tessel-GPIO-EMG-Module
======================

Example code for the EMG module for Tessel's GPIO port [[schematic](https://s3.amazonaws.com/design-files.tessel.io/2014.07.09/emg.pdf)].

This code is intended for use with [Tessel](https://tessel.io)'s GPIO port and the provided schematic, wired to electrodes on the bicep.


### Files in this repo

`index.js` a library you can use for EMG. See APIexamples.js for examples of all of the available functions.

`APIexamples.js` examples of every available API call from index.js.

`test.js` prints the output from channels 1 and 2 of the GPIO module. Very simple, does not use API– just lets you see if the hardware is working.

`strength-meter.js` turns a servo in proportion to the output from channel 2. Kind of messy, pre-API.


### What is EMG?

EMG is ElectroMyoGraphy: measuring muscle impulses. You slap some electrodes on a muscle and measure the voltage differential. The voltage differential looks different if you're actively flexing than if your muscle is relaxed. So in the strength-meter example, the difference between a relaxed muscle and a flexed one is scaled to the range of a servo– so the servo acts as a dial for how hard you're flexing.


### How do you hook up the electrodes?

You need three electrodes:
* One electrode, Vref, goes somewhere near the muscle you're measuring, but not on a muscle– so if you're measuring your bicep, you can put it on the back of your elbow.
* One electrode goes in the center of your muscle. Flex to see your muscle and stick it right in the middle.
* One electrode goes on the end of the muscle– so for your bicep, just above the inside of your elbow.


### What does this look like?


There's a demo in here:

![video](https://www.youtube.com/watch?v=LdATa51ejgM)