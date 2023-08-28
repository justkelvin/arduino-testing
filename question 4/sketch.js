
let data;

function preload() {
  data = loadJSON('data.json');
}

function setup() {
  createCanvas(400, 300);
  background(220);
}

function draw() {
  if (data) {
    // Data has been loaded, draw the graph
    drawGraph();
    noLoop(); // Stop continuous looping
  }
}

function drawGraph() {
  let temperatures = Object.values(data).map((entry) => entry.Temperature);

  // Normalize temperatures to fit within the canvas height
  let minTemp = Math.min(...temperatures);
  let maxTemp = Math.max(...temperatures);
  let normalizedTemps = temperatures.map((temp) =>
    map(temp, minTemp, maxTemp, height, 0)
  );

  // Draw the line graph
  stroke(0, 0, 255);
  strokeWeight(2);
  noFill();
  beginShape();
  for (let i = 0; i < normalizedTemps.length; i++) {
    let x = map(i, 0, normalizedTemps.length - 1, 0, width);
    let y = normalizedTemps[i];
    vertex(x, y);
  }
  endShape();

  // Add labels
  textAlign(CENTER);
  fill(0);
  text('Temperature', width / 2, 20);
  text('Time', width / 2, height - 10);
  text('Temperature (°C)', 10, height / 2);
}

