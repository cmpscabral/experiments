class Clock {
  constructor() {
    this.hr = 0;
    this.min = 0;
    this.sec = 0;
    this.ms = 0;
  }

  update() {
    this.hr = hour();
    this.min = minute();
    this.sec = second();
    this.ms = Math.floor(millis());
  }

  show() {
    translate(width / 2, height / 2);
    angleMode(DEGREES);
    rotate(-90);
    strokeCap(SQUARE);

    // millisec
    push();
    noFill();
    stroke(255, 100, 80);
    strokeWeight(8);
    arc(0, 0, 300, 300, 0, map(this.ms, 0, 1000, 0, 360));
    push();
    rotate(map(this.ms, 0, 1000, 0, 360));
    strokeWeight(4);
    line(0, 0, 50, 0);
    pop();
    pop();

    // sec
    push();
    noFill();
    stroke(255, 100, 150);
    strokeWeight(8);
    arc(0, 0, 280, 280, 0, map(this.sec, 0, 60, 0, 360));
    push();
    rotate(map(this.sec, 0, 60, 0, 360));
    strokeWeight(5);
    line(0, 0, 60, 0);
    pop();
    pop();

    // min
    push();
    noFill();
    stroke(255, 150, 100);
    strokeWeight(8);
    arc(0, 0, 260, 260, 0, map(this.min, 0, 60, 0, 360));
    push();
    rotate(map(this.min, 0, 60, 0, 360));
    strokeWeight(6);
    line(0, 0, 70, 0);
    pop();
    pop();

    // hr
    push();
    noFill();
    stroke(150, 100, 250);
    strokeWeight(8);
    arc(0, 0, 240, 240, 0, map(this.hr % 2, 0, 12, 0, 360));
    push();
    rotate(map(this.hr % 2, 0, 12, 0, 360));
    strokeWeight(7);
    line(0, 0, 80, 0);
    pop();
    pop();

    // center
    push();
    stroke(255);
    strokeWeight(10);
    point(0, 0);
    pop();
  }
}

let clk;
function setup() {
  createCanvas(windowWidth, windowHeight);
  clk = new Clock();
}

function draw() {
  background(0);
  clk.update();
  clk.show();
}

function windowResized () {
    resizeCanvas(windowWidth, windowHeight);
}