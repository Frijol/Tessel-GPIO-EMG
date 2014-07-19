// API for the EMG module

// Pin configuration
var CH1 = 1; // analog read in channel 1 on pin 1
var CH2 = 5; // analog read in channel 2 on pin 5

function EMG (hardware) {
  this.hardware = hardware;
  
  this.ch1 = hardware.analog[CH1];
  this.ch2 = hardware.analog[CH2];
}

// Reads data. Can take channel ('ch1' or 'ch2') or a callback or both
EMG.prototype.read = function (channel, callback) {
  var res;
  // Sort out the arguments
  if (typeof channel == 'string') {
    // Great, we don't need to do anything
  } else if (typeof channel == 'function') {
    // "channel" is actually "callback"
    callback = channel;
    channel = null;
  } else {
    // Should be one or the other...
    console.log('Error parsing arguments');
  }
  // Read the data
  if (channel) {
    // Read a specific channel ('ch1' or 'ch2')
    res = this[channel].read();
  } else {
    // If no channel specified, read both out as an array [ch1, ch2]
    res = [this.ch1.read(), this.ch2.read()];
  }
  // Return the data
  if (callback) {
    callback(res);
  } else {
    return res;
  }
};

function use (hardware, callback) {
  var EMGmod = new EMG(hardware);
  if (callback) {
    callback();
  }
  return EMGmod;
}

exports.use = use;
exports.EMG = EMG;
