let libaryImg;

function setup() {
  createCanvas(400, 400);
  image(libaryImg, 0,0)
}

function draw() {
  background(220);
}

function preload (){
  libaryImg = loadImage('/assets/demo.png')
}
