const int potentiometerPin = A0;
const int buttonPin = 2;

int potValue = 0;
int buttonState = HIGH;
int prevButtonState = HIGH;

void setup() {
  pinMode(buttonPin, INPUT_PULLUP);
  Serial.begin(9600);
}

void loop() {
  // Read potentiometer value
  potValue = analogRead(potentiometerPin);

  // Read button state
  buttonState = digitalRead(buttonPin);

  // Check for button press
  if (buttonState == LOW && prevButtonState == HIGH) {
    // Button is pressed
    // Send potValue over Serial to p5.js sketch
    Serial.print("POT:");
    Serial.println(potValue);
  }

  // Store previous button state
  prevButtonState = buttonState;
}
