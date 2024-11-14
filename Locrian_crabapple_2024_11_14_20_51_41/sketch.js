let cloudColor;
let rainColor;
let cloudPositions = [];

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
  generateColors();

  for (let i = 0; i < 5; i++) {
    cloudPositions.push(createVector(random(50, 350), random(50, 200)));
  }
}

function draw() {
  background(70, 130, 180);
  drawStorm();
}

function drawStorm() {
  for (let i = 0; i < cloudPositions.length; i++) {
    let pos = cloudPositions[i];
    let scaleValue = map(i, 0, cloudPositions.length - 1, 0.5, 1.5);

    push();
    translate(pos.x, pos.y);
    rotate(i * 30);
    scale(scaleValue);

    fill(cloudColor);
    noStroke();
    ellipse(0, 0, 60, 40);
    ellipse(-20, -10, 50, 30);
    ellipse(20, -10, 50, 30);
    ellipse(-10, 10, 40, 20);
    ellipse(10, 10, 40, 20);

    fill(rainColor);
    for (let j = 0; j < 3; j++) {
      ellipse(random(-25, 25), random(20, 40), 10, 20);
    }

    pop();
  }

  let shapeCount = calculateShapeCount(cloudPositions.length);
  print("Total stormy shapes drawn: " + shapeCount);
}

function generateColors() {
  let grayShadeCloud = random(100, 220);
  cloudColor = color(grayShadeCloud);

  let blueShadeRain = random(120, 255);
  rainColor = color(0, 0, blueShadeRain);
}

function calculateShapeCount(count) {
  return count;
}