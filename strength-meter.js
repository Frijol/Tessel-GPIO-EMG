// Turns the servo to a position dependent on the strength of input received

var tessel = require('tessel');
var servo = require('servo-pca9685').use(tessel.port('A'));

// Working with a GPIO module which reads A2 as channel 1 and A6 as channel 2.
var gpio = tessel.port('gpio');
var ch1 = gpio.analog[2];
var ch2 = gpio.analog[6]; // Only using channel 2 for this demo

servo.on('ready', function() {
  setInterval(function() {
    // Read channel
    reading = ch2.read();
    // Scale range
    var subtr = 560 - reading;
    if (subtr <= 0) {
      subtr = 0.01;
    }
    scaled = subtr/100;
    // Ensure that number is within legal bounds
    if (scaled > 1) {
      scaled = 1;
    }
    console.log(scaled); // Print the scaled value to the console
    servo.move(1, scaled); // Move servo 1 to the appropriate position
  }, 500); // Repeat every half second
});
