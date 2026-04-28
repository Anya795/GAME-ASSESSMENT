let levelState = 0
let levels = [];

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
  modeButton = createButton("Start!")
    const mainContainer = select("main");
    modeButton.parent(mainContainer);
    modeButton.position(300,500);
    modeButton.size(130,40);
    modeButton.mousePressed(startGame);
    //levels
    levelState = 0;

    levels.push(new LevelOne);
    levels.push(new LevelTwo)
}
  // this might be causing no canvas to show
  // function startGame(){
  //   modeButton.hide(); //hides button when clicked
  // }

function draw() {
  background(0);
  //switch statement (levels)
  switch(levelState){
    case 0:
      levels[0].draw();
      break;
      case 1:
        levels[1].draw();
  }
  //IMAGES
  image(libaryBackgroundImg, 0, 0, 800, 600);
  image(libaryImg, 50, 50, 150, 150);
  image(tilesetImg, 400, 300, 50, 60); 
  image(bookImg, 400,350, 30, 40);
  player.update();
  player.show();
  player.move();
}

//levels
function keyPressed(){
  if(key === '1'){
    levelState = 0;
  } else if(key === '2'){
    levelState = 1;
  }
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
    image(spriteImg, this.x, this.y, 30, 40); //number = width and height of image
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



//start scene
function drawLevel1(){
    textAlign(CENTER);
    textSize(30);
    text("Level One!", 400, 300);
}









