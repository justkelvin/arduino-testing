const int buttonPin = 2;  // Button pin connected to digital pin 2
const int ledPin = 13;    // LED pin connected to digital pin 13

int buttonState = 0;      // Variable to store the current button state
int buttonPressCount = 0; // Variable to count the number of button presses

void setup() {
  pinMode(ledPin, OUTPUT);     // Set the LED pin as an output
  pinMode(buttonPin, INPUT);   // Set the button pin as an input
  digitalWrite(buttonPin, HIGH);  // Enable the internal pull-up resistor for the button pin
  Serial.begin(9600);          // Initialize the serial communication (for debugging)
}

void loop() {
  buttonState = digitalRead(buttonPin);  // Read the current state of the button

  // Check if the button is pressed and increment the button press count
  if (buttonState == LOW) {
    delay(50);  // Debounce delay to avoid multiple button presses
    if (buttonState == LOW) {
      buttonPressCount++;
      Serial.print("Button Press Count: ");
      Serial.println(buttonPressCount);
    }
  }

  // Check if the button press count is 3 and blink the LED twice
  if (buttonPressCount == 3) {
    digitalWrite(ledPin, HIGH);  // Turn on the LED
    delay(200);                  // Wait for 200 milliseconds
    digitalWrite(ledPin, LOW);   // Turn off the LED
    delay(200);                  // Wait for 200 milliseconds

    digitalWrite(ledPin, HIGH);  // Turn on the LED again
    delay(200);                  // Wait for 200 milliseconds
    digitalWrite(ledPin, LOW);   // Turn off the LED
    delay(200);                  // Wait for 200 milliseconds

    buttonPressCount = 0;        // Reset the button press count to 0
  }
}
