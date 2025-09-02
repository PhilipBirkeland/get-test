let square_size = 50;
let squareX;
let squareY;

function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
  frameRate(60);
  squareX = width / 2;
  squareY = height / 2;
}

function draw() {
  background(220);
  rect(squareX, squareY, square_size, square_size);
  if (square_size > 50) {
    square_size -= 4;
  }
  if (frameCount % 60 == 0 || frameCount % 60 == 10) {
    square_size += 25;
  }
}

function mouseClicked() {
  squareX = mouseX;
  squareY = mouseY;
}
