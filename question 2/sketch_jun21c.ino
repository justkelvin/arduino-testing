const int potPin = A0;    // Potentiometer pin connected to analog pin A0
const int buttonPin = 2;  // Button pin connected to digital pin 2
const int redPin = 9;     // Red LED pin connected to digital pin 9
const int greenPin = 10;  // Green LED pin connected to digital pin 10
const int bluePin = 11;   // Blue LED pin connected to digital pin 11

int r = 0;    // Variable to store the red component value (0-255)
int g = 0;    // Variable to store the green component value (0-255)
int b = 0;    // Variable to store the blue component value (0-255)
int buttonState = 0;  // Variable to store the current button state

void setup() {
  pinMode(buttonPin, INPUT_PULLUP);  // Set the button pin as an input with internal pull-up resistor
  pinMode(redPin, OUTPUT);           // Set the red LED pin as an output
  pinMode(greenPin, OUTPUT);         // Set the green LED pin as an output
  pinMode(bluePin, OUTPUT);          // Set the blue LED pin as an output
}

void loop() {
  // Read the potentiometer value and map it to the range of 0-255 for each color component
  r = map(analogRead(potPin), 0, 1023, 0, 255);
  g = map(analogRead(potPin), 0, 1023, 0, 255);
  b = map(analogRead(potPin), 0, 1023, 0, 255);

  // Check if the button is pressed and adjust the color components accordingly
  buttonState = digitalRead(buttonPin);
  if (buttonState == LOW) {
    // Increase the red component value when the button is pressed
    r += 10;
    if (r > 255) {
      r = 0;  // Reset to 0 when reaching the maximum value
    }

    // Increase the green component value when the button is pressed
    g += 10;
    if (g > 255) {
      g = 0;  // Reset to 0 when reaching the maximum value
    }

    // Increase the blue component value when the button is pressed
    b += 10;
    if (b > 255) {
      b = 0;  // Reset to 0 when reaching the maximum value
    }
  }

  // Set the RGB LED color based on the adjusted color components
  analogWrite(redPin, r);
  analogWrite(greenPin, g);
  analogWrite(bluePin, b);
}
