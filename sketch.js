let pts = [];
var canvas;
let g1, g2, b1, b2, mult;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  canvas.style("zindex", "-1");
  frameRate(60);
  angleMode(DEGREES);
  noiseDetail(1);

  let dens = 42;
  let spc = width / dens;

  for (let x = 0; x < width; x += spc) {
    for (let y = 0; y < height; y += spc) {
      let p = createVector(x + random(-10, 10), y + random(-10, 10));
      pts.push(p);
    }
  }

  g1 = random(50);
  g2 = random(175);
  b1 = random(5);
  b2 = random(50);
}

function draw() {
  noStroke();
  mult = random(0.002, 0.01);

  push();
  noStroke();
  mult = random(0.002, 0.01);

  for (let i = 0; i < pts.length; i++) {
    let g = map(pts[i].y, 0, height, g1, g2);
    let b = map(pts[i].x, 0, width, b1, b2);
    let angle = map(
      noise(pts[i].x * mult, pts[i].y * mult),
      0,
      1,
      0,
      width * 2
    );
    pts[i].add(createVector(cos(angle), sin(angle)));

    fill(255, g, b);
    ellipse(pts[i].x, pts[i].y, 0.42);
  }
  pop();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
