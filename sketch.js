let libaryImg;
let libaryBackgroundImg;
let spriteImg;


function setup() {
  createCanvas(400, 400);
  image(libaryImg, 0,0);
  image(libaryBackgroundImg, 0,0);
  image(spriteImg, 0,0, 30, 40);

}

function draw() {
  let spriteImg = new Character();
  spriteImg.move
}

 function preload (){
  libaryImg = loadImage('/assets/Demo.png');
  libaryBackgroundImg = loadImage('/assets/Background.png');
  spriteImg = loadImage('assets/prototype_character.png');
 }
//  class segment{
//   #x;
//   #y;
//   constructor(){
//     this.#x = x;
//     this.#y = y;
//   }
//  }

  class Character{
    #xDirection = 1;
    #yDirection = 0;
    constructor(){

 }

  move(){
    this.#xDirection;
    this.#yDirection;
  }


 faceLeft() {
  this.setX(this.getX())
 }

 faceRight() {
 
}
 

 faceUp() {
  
}
 

 faceDown() {
  
 }
}

 function KeyPressed(){
if (keyCode === LEFT_ARROW) {
  spriteImg.moveLeft();
}
else if (keyCode === RIGHT_ARROW_ARROW){
  spriteImg.moveRight();
}
else if (keyCode === UP_ARROW){
  spriteImg.moveUp();
}
else if (keyCode === UP_ARROW){
  spriteImg.moveDown();
 }
 }


