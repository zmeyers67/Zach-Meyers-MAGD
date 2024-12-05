let squares = [];
let wrongIndex;
let score = 0;
let highScore = 0;
let gameOver = false;
let imgCorrect, imgWrong;
let showImage = false;
let imageToShow = null;
let imageTimer = 0;

function preload() {
  imgCorrect = loadImage('images/monkey.jpg');
  imgWrong = loadImage('images/penguin.jpg');
}

function setup() {
  createCanvas(400, 400);
  randomizeSquares();
  frameRate(60);
}

function draw() {
  background(150);

  for (let i = 0; i < squares.length; i++) {
    fill(squares[i].color);
    stroke(0);
    strokeWeight(0.5);
    rect(squares[i].x, squares[i].y, 50, 50);
  }

  fill(0);
  textSize(16);
  textAlign(CENTER);
  text(`Score: ${score} | High Score: ${highScore}`, width / 2, height - 10);

  textAlign(CENTER);
  textSize(12);
  text(`Cursor: (${mouseX}, ${mouseY})`, width / 2, 20);

  textAlign(LEFT);
  textSize(12);
  text(`FPS: ${floor(frameRate())}`, 10, 20);

  fill(0);
  noStroke();
  ellipse(mouseX, mouseY, 10, 10);

  if (gameOver) {
    textAlign(CENTER);
    textSize(64);
    fill(255, 0, 0);
    text("Game Over", width / 2, height / 2);
  }

  if (showImage) {
    image(imageToShow, 0, 0, width, height);
    if (millis() - imageTimer > 1000) {
      showImage = false;
      randomizeSquares();
    }
  }
}

function mousePressed() {
  if (showImage) return;

  for (let i = 0; i < squares.length; i++) {
    if (
      mouseX > squares[i].x &&
      mouseX < squares[i].x + 50 &&
      mouseY > squares[i].y &&
      mouseY < squares[i].y + 50
    ) {
      if (i === wrongIndex) {
        score = 0;
        gameOver = true;
        imageToShow = imgWrong;
      } else {
        score++;
        highScore = max(score, highScore);
        gameOver = false;
        imageToShow = imgCorrect;
      }
      showImage = true;
      imageTimer = millis();
      redraw();
      break;
    }
  }
}

function randomizeSquares() {
  squares = [];
  for (let i = 0; i < 6; i++) {
    let x = random(0, width - 50);
    let y = random(0, height - 50);
    squares.push({ x, y, color: color(random(255), random(255), random(255)) });
  }
  wrongIndex = floor(random(6));
  squares[wrongIndex].color = color(random(255), random(255), random(255));
}
