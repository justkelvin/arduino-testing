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

  if (data) {
    // Extract the productivity ratings from the data
    const ratings = data.map(entry => entry.productivity_rating);

    // Calculate the maximum productivity rating
    const maxRating = max(ratings);

    // Define the width of each bar in the chart
    const barWidth = width / data.length;

    // Draw the bars
    for (let i = 0; i < data.length; i++) {
      const x = i * barWidth;
      const y = map(data[i].productivity_rating, 0, maxRating, height, 0);
      const barHeight = height - y;

      // Set the color of the bar based on the rating
      const ratingColor = map(data[i].productivity_rating, 0, maxRating, 0, 255);
      fill(ratingColor, 0, 255 - ratingColor);

      rect(x, y, barWidth, barHeight);
    }
  }
}
