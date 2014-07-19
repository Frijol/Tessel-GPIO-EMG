// Turns the servo to a position dependent on the strength of input received

var tessel = require('tessel');
var servolib = require('servo-pca9685');

var servo = servolib.use(tessel.port['A']);
function avg (arr) {
  var a = 0;
  for (var i = 0; i < arr.length; i++) {
    a += arr[i];
  }
  return a/i;
}

var samples = [0,0,0,0,0];

// Working with a GPIO module A6 as channel 1.
var gpio = tessel.port['GPIO'];
var ch1 = gpio.analog[1];
console.log('waiting');
servo.on('ready', function() {
  console.log('ready');
  setTimeout(function loop () {
    // Read channel
    var reading = ch1.read();
    samples.push(reading);
    samples.shift();
    // Scale range
    // var subtr = reading - 400;
    // if (subtr <= 0) {
    //   subtr = 0.001;
    // }
    // var scaled = subtr * 2/1000;
    // // Ensure that number is within legal bounds
    // if (scaled > 1) {
    //   scaled = 1;
    // }
    // if (avg(samples) < 575) {
    var s = (avg(samples)-450)/(700-450);
      servo.move(1, s < 0 ? 0 : s > 1 ? 1 : s);
    // } else {
      // servo.move(1, 1);
    // }
    console.log(samples, s, avg(samples)); // Print the scaled value to the console
    // servo.move(1, scaled); // Move servo 1 to the appropriate position

    setTimeout(loop, 100);
  }, 100); // Repeat every half second
});
