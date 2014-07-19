var tessel = require('tessel');
var emg = require('./').use(tessel.port['GPIO']);

//*** read ***//
// Read both channels, return
console.log(emg.read());

// Read specific channel, return
console.log(emg.read('ch1'));

// Read specific channel into callback
emg.read('ch2', function (datum) {
  console.log(datum);
});

// Read both channels into a call
emg.read(function(data) {
  console.log(data);
});