let positions = [];

function setup() {
  createCanvas(400, 400);

  for (let i = 0; i < 10; i++) {
    positions[i] = random(height);
  }

  print("Length of positions array:", positions.length);
}

function draw() {
  background(50, 50, 100);

  fill(255, 204, 0);
  ellipse(300, 80, 80, 80);

  positions[0] = mouseY;

  for (let i = 0; i < positions.length; i++) {
    drawSpooky(30 + i * 30, positions[i]);
  }
}

function drawSpooky(x, y) {
  fill(255);
  noStroke();
  ellipse(x, y, 20, 20);
}