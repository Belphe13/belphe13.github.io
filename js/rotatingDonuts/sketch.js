function setup() {
  createCanvas(546, 195, WEBGL);
}

function draw() {
  background(250, 218, 94);

  for (var x = -width / 2; x <= width; x = x + 100) {
    for (var y = -height / 2; y <= height; y = y + 100) {
      push();
      translate(x, y, []);
      pointLight(240, 150, 150, mouseX, mouseY, 500);
      specularMaterial(240, 150, 150);
      //			fill(240, 150, 150);			
      noStroke();
      rotateX(frameCount * 0.01);
      rotateY(frameCount * 0.01);
      rotateZ(frameCount * 0.01);
      torus(25, 15);
      pop();
    }
  }
}