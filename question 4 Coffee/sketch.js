let data;

function preload() {
    // Load the data from the JSON file using a callback
    loadJSON('data.json', function (jsonData) {
      data = jsonData;
    });
  }
function setup() {
  createCanvas(600, 400);
  background(220);

  // Extract the values to plot
  const coffeeConsumed = data.map(entry => entry.coffee_consumed);
  const productivityRating = data.map(entry => entry.productivity_rating);
  const stepsClimbed = data.map(entry => entry.steps_climbed);
  const smiles = data.map(entry => entry.smiles);
  const frowns = data.map(entry => entry.frowns);

  // Define the range and position of the scatter plot
  const xRange = [0, width];
  const yRange = [height, 0];

  // Plot the coffee consumed
  plotData(coffeeConsumed, xRange, yRange, 'Coffee Consumed', 'Amount');

  // Plot the productivity rating
  plotData(productivityRating, xRange, yRange, 'Productivity Rating', 'Rating');

  // Plot the steps climbed
  plotData(stepsClimbed, xRange, yRange, 'Steps Climbed', 'Count');

  // Plot the smiles
  plotData(smiles, xRange, yRange, 'Smiles', 'Count');

  // Plot the frowns
  plotData(frowns, xRange, yRange, 'Frowns', 'Count');
}

function plotData(data, xRange, yRange, xLabel, yLabel) {
  // Calculate the minimum and maximum values
  const minValue = min(data);
  const maxValue = max(data);

  // Define the size of each data point
  const pointSize = 8;

  // Plot the data points
  for (let i = 0; i < data.length; i++) {
    const x = map(i, 0, data.length - 1, xRange[0] + pointSize, xRange[1] - pointSize);
    const y = map(data[i], minValue, maxValue, yRange[0] - pointSize, yRange[1] + pointSize);

    // Set the color of the data points
    fill(0, 0, 255);

    ellipse(x, y, pointSize, pointSize);
  }

  // Add labels to the plot
  textSize(12);
  textAlign(CENTER, TOP);
  text(xLabel, width / 2, yRange[0] + 10);
  textAlign(RIGHT, CENTER);
  text(yLabel, xRange[0] - 10, height / 2);
}
