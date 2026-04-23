let libaryImg;
let libaryBackgroundImg;
let spriteImg;

function setup() {
  createCanvas(400, 400);
  image(libaryImg, 0,0);
  image(libaryBackgroundImg, 0,0);
  image(spriteImg, 0, 0);
}

function draw() {
}

 function preload (){
  libaryImg = loadImage('/assets/Demo.png');
  libaryBackgroundImg = loadImage('/assets/Background.png');
  spriteImg = loadImage('/assets/prototype_character.png')
 }


