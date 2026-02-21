function setup() {
  createCanvas(400, 400);
  background(32);
  noStroke();
}

function draw() {
  for (let i = 0; i < 10; i++) {
    fill(random(255), random(255), random(255), 100);
    circle(random(width), random(height), random(20, 50));
  }
}