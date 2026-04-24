let libaryImg;
let libaryBackgroundImg;
let spriteImg;
let player;


function setup() {
  //image(libaryBackgroundImg, 0,0);
  createCanvas(800, 600);
  image(libaryBackgroundImg, 0, 0, 800, 600);
  image(libaryImg, 50, 50, 150, 150);
  image(spriteImg, 0,0, 30, 40);
  image(tilesetImg, 400, 300, 50, 60); 
  player = new Character();

}

function draw() {
  player.update();
  spriteImg.show();
  player.move();
  background (220);
}

function preload (){
  libaryImg = loadImage('/assets/Demo.png');
  libaryBackgroundImg = loadImage('/assets/Background.png');
  spriteImg = loadImage('/assets/prototype_character.png');
  tilesetImg = loadImage('/assets/Tileset.png');
 }

class Character{
  xDirection = 1;
  yDirection = 0;
  speed = 2;
    constructor(){

 }

  move(){
    this.xDirection;
    this.yDirection;
    this.speed;
  }

  update(){
    this.x += this.xDirection * this.speed;
    this.y += this.yDirection * this.speed;
    if (keyCode === LEFT_ARROW) {
    spriteImg.moveLeft();
  }
  else if (keyCode === RIGHT_ARROW){
    spriteImg.moveRight();
  }
  else if (keyCode === UP_ARROW){
    spriteImg.moveUp();
  }
  else if (keyCode === DOWN_ARROW){
    spriteImg.moveDown();
  }
}

  show(){
    image(spriteImg, this.x, this.y, 50, 80);
  }
  getSpeed() {
    return this.speed;
  }


setSpeed(newSpeed) {
  this.speed = newSpeed;
}


 moveLeft() {
  this.x -= this.speed;
 }

 moveRight() {
 this.x += this.speed;
}
 

 moveUp() {
this.y -= this.speed;
}
 

 moveDown() {
this.y += this.speed;
 }

}


function KeyPressed(){
  if (keyIsDown(LEFT_ARROW)) {
    spriteImg.moveLeft();
  }
  else if (keyIsDown(RIGHT_ARROW)){
    spriteImg.moveRight();
  }
  else if (keyIsDown(UP_ARROW)){
    spriteImg.moveUp();
  }
  else if (keyIsDown(DOWN_ARROW)){
    spriteImg.moveDown();
  }
}




