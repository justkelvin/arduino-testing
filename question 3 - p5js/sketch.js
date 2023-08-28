let potValue;
let x = 200;
let y = 200;

function setup() {
  // Set up p5.js canvas
  createCanvas(400, 400);
  background(220);

  // Set up Serial communication with Arduino
  serial = new p5.SerialPort();
  serial.open('COM3'); // Replace 'COM3' with the appropriate port name
  serial.on('data', parseData);
}

function parseData() {
  let data = serial.readStringUntil('\n');
  if (data.startsWith('POT:')) {
    // Extract potentiometer value from the received data
    potValue = int(data.substring(4));
  }
}

function draw() {
  // Use potValue to control Etch-a-Sketch drawing
  let speed = map(potValue, 0, 1023, 1, 10);
  let dx = map(mouseX, 0, width, -speed, speed);
  let dy = map(mouseY, 0, height, -speed, speed);

  x += dx;
  y += dy;

  x = constrain(x, 0, width);
  y = constrain(y, 0, height);

  if (mouseIsPressed) {
    stroke(0);
    strokeWeight(2);
    line(x, y, pmouseX, pmouseY);
  }
}
