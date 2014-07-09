Tessel-GPIO-EMG-Module
======================

Example code for the EMG module for Tessel's GPIO port [[schematic](https://s3.amazonaws.com/design-files.tessel.io/2014.07.09/emg.pdf)].

This code is intended for use with [Tessel](https://tessel.io)'s GPIO port and the provided schematic, wired to electrodes on the bicep.

test.js prints the output from channels 1 and 2 of the GPIO module.

strength-meter.js turns a servo in proportion to the output from channel 2.
