var tessel = require('tessel');
var gpio = tessel.port['GPIO'];
var ch1 = gpio.analog[1];
var ch2 = gpio.analog[5];

setInterval(function() {
  console.log('ch 1', ch1.read(), '\tch 2', ch2.read());
}, 50);
