class Collage {
  constructor(images) {
    this.images = images;
    this.rotation = 0;
  }

  display() {
    push();
    translate(width / 2, height / 2); // Translate to the center of the canvas
    rotate(this.rotation);

    const gridSize = 2;
    const imageSize = width / gridSize;

    for (let i = 0; i < this.images.length; i++) {
      const col = i % gridSize;
      const row = Math.floor(i / gridSize);
      const x = col * imageSize - width / 2 + imageSize / 2;
      const y = row * imageSize - height / 2 + imageSize / 2;

      const img = this.images[i];
      image(img, x, y, imageSize, imageSize);
    }

    pop();
  }

  rotateCollage(angle) {
    this.rotation += angle;
  }
}

let collage;
let video;

function preload() {
  // Load images
  let img1 = loadImage('image1.jpg');
  let img2 = loadImage('image2.jpg');
  let img3 = loadImage('image3.png');
  let img4 = loadImage('image4.png');

  // Create collage object with images
  collage = new Collage([img1, img2, img3, img4]);
}

function setup() {
  createCanvas(800, 800);

  // Load video
  video = createVideo(['video.mp4']);
  video.size(width, height);
  video.hide();
  video.loop();
}

function draw() {
  background(220);

  // Display collage
  collage.display();

  // Display video with effects
  push();
  translate(width / 2, height / 2);
  scale(0.5);
  tint(255, 127); // Apply transparency to the video
  image(video, -video.width / 2, -video.height / 2);
  pop();
}

function mousePressed() {
  // Rotate the collage on mouse press
  collage.rotateCollage(PI / 4);
}
