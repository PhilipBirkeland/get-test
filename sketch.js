let square_size = 50;
let ms;

function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
  frameRate(60);
}

function draw() {
  ms = millis();
  background(220);
  rect(width / 2, height / 2, square_size, square_size);
  if (square_size > 50) {
    square_size -= 4;
  }
  if (frameCount % 60 == 0 || frameCount % 60 == 10) {
    square_size += 25;
  }
}
