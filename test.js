var tessel = require('tessel');
var gpio = tessel.port('gpio');
var ch1 = gpio.analog[2];
var ch2 = gpio.analog[6];

setInterval(function() {
  console.log('ch 1', ch1.read(), 'ch 2', ch2.read());
}, 50);
