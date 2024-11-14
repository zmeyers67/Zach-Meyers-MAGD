function preload() {
  img = loadImage('/assets/monkey.jpg');
  img1= loadImage('/assets/original.jpg');
  img2= loadImage('/assets/banana.gif');
}

function setup() {
  createCanvas(400, 400);
  
}

function draw() {
  background(120);
  
  image(img, 0, 0, 150, 150);
  image(img1, 200, 300, 200, 100);
  image(img2, mouseX, mouseY, 150, 75);
  
  fill(255, 0, 0);
  stroke(0);
  strokeWeight(2);
  textFont('Helvetica');
  textSize(32);
  text('LONG NOSE MONKEY!!', 25, 250);
}