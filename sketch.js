let libaryImg;
let libaryBackgroundImg;
let spriteImg;
let player;


function setup() {
  //image(libaryBackgroundImg, 0,0);
  createCanvas(800, 600);
  player = new Character();

}

function draw() {
  background (220);
  image(libaryBackgroundImg, 0, 0, 800, 600);
  image(libaryImg, 50, 50, 150, 150);
  image(spriteImg, 0,0, 30, 40);
  image(tilesetImg, 400, 300, 50, 60); 
  player.update();
  player.show();
  player.move();
  // player.moveLeft();
  // player.moveRight();
  // player.moveUp();
  // player.moveDown();
}

function preload (){
  libaryImg = loadImage('/assets/Demo.png');
  libaryBackgroundImg = loadImage('/assets/Background.png');
  spriteImg = loadImage('/assets/prototype_character.png');
  tilesetImg = loadImage('/assets/Tileset.png');
 }

class Character{
  xDirection;
  yDirection;
  speed = 2;
    constructor(){
      this.x = 100;
      this.y = 100;
      this.speed = 2;

 }

  move(){
  }

  update(){
    if (keyIsDown (LEFT_ARROW)) {
      this.x -= this.speed;
    this.moveLeft(this.x);
  }
  else if (keyIsDown(RIGHT_ARROW)){
    this.x += this.speed;
    this.moveRight(this.x);
  }
  else if (keyIsDown(UP_ARROW)){
    this.y -= this.speed;
    this.moveUp(this.y);
  }
  else if (keyIsDown(DOWN_ARROW)){
    this.y += this.speed;
    this.moveDown(this.y);
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






