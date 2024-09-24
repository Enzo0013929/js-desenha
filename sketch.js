function setup() {
  createCanvas(600, 600);
  background("green");
}

function draw() {
  stroke("darkblue");
  fill("yellow");


  if (mouseIsPressed) {
    rect(mouseX, mouseY, 20, 35);
  }
}
