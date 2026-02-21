function setup() {
  createCanvas(400, 400);
  background(50, 100, 150);
  noStroke();
}

function draw() {
  for (let i = 0; i < 5; i++) {
    fill(random(100, 255), random(100, 255), 255, 150);
    circle(random(width), random(height), random(30, 60));
  }
}