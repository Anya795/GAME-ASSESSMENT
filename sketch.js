let libaryImg;
let libaryBackgroundImg;
let spriteImg;
let xDirection = 1;
let yDirection = 0;

function setup() {
  createCanvas(400, 400);
  image(libaryImg, 0,0);
  image(libaryBackgroundImg, 0,0);
  image(spriteImg, 0,0, 30, 40);

}

function draw() {
 keyPressed(spriteImg);
}

 function preload (){
  libaryImg = loadImage('/assets/Demo.png');
  libaryBackgroundImg = loadImage('/assets/Background.png');
  spriteImg = loadImage('assets/prototype_character.png');
 }

 function KeyPressed(){
if (keyCode === LEFT_ARROW) {
  spriteImg.faceLeft();
  // xDirection = -1;
  // yDirection = 0;
}
else if (keyCode === RIGHT_ARROW_ARROW){
  spriteImg.faceRight();
  // xDirection = 1;
  // yDirection = 0;
}
else if (keyCode === UP_ARROW){
  spriteImg.faceUp();
  // xDirection = 0;
  // yDirection = -1;
}
else if (keyCode === UP_ARROW){
  spritefaceDown();
  // xDirection = 0;
  // yDirection = 1;
 }
 }

//  class spriteImg {
//   #xDirection = 1;
//   #yDirection = 0;
//   #segment [];
//   constructor(){
//     this.#segment.push(new this.#segment());
//   }
//  }
