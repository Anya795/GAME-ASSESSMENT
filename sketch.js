//startbutton
let modeButton;
let startGame;
// const startGame = "modeButton"
//movement
let libaryImg;
let libaryBackgroundImg;
let spriteImg;
let player;
let bookImg;

// switch(startGame){
//   case "modeButton":
//     console.log("modeButton");
// }

function setup() {
  createCanvas(800, 600);
  player = new Character();
}
  // this might be causing no canvas to show
  // function startGame(){
  //   modeButton.hide(); //hides button when clicked
  // }

function draw() {
  background
  image(libaryBackgroundImg, 0, 0, 800, 600);
  image(libaryImg, 50, 50, 150, 150);
  image(tilesetImg, 400, 300, 50, 60); 
  image(bookImg, 400,350, 30, 40);
  player.update();
  player.show();
  player.move();
}

//images
function preload (){
  libaryImg = loadImage('/assets/Demo.png');
  libaryBackgroundImg = loadImage('/assets/Background.png');
  spriteImg = loadImage('/assets/prototype_character.png');
  tilesetImg = loadImage('/assets/Tileset.png');
  bookImg = loadImage('/assets/book2.png');
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

//need this - movement
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

//need all this
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












