let levelState = 0
let levels = [];

//dialogue
let dialogueBox;
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
let witchImg;

function setup() {
  createCanvas(800, 600);
  player = new Character();
  modeButton = createButton("Start!")
  const mainContainer = select("main");
  modeButton.parent(mainContainer);
  modeButton.position(300,500);
  modeButton.size(130,40);
  modeButton.mousePressed(startGame);

  //dialogue
  dialogueBox = new DialogueBox([
    "Hey you! Click me! The little witch with purple hair." ,
    "Collect items to move onto the next level!" ,
    "Each level means you collect more items as you go along"
  ]);

  //levels
  levelState = 0;
    levels.push(new LevelOne);
    levels.push(new LevelTwo);
}
  // this might be causing no canvas to show

function draw() {
  background(0);
  //IMAGES
  image(libaryBackgroundImg, 0, 0, 800, 600);
  image(libaryImg, 50, 50, 150, 150);
  image(tilesetImg, 400, 300, 50, 60); 
  image(bookImg, 400,350, 30, 40);
  image(witchImg, 600, 375 , 120, 100);
  player.update();
  player.show();
  player.move();

  //dialogue
  if(dialogueBox.outOfLines === false)
    dialogueBox.draw();

  // switch statement (levels)
  switch(levelState){
    case 0:
      levels[0].draw();
      break;
      case 1:
        levels[1].draw();
      break;
      case 2:
        levels[2].draw();
  }
}

//dialogue
function mousePressed(){
  dialogueBox.nextLine();
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
  libaryBackgroundImg = loadImage('/assets/Background.png'); //Asset licence: Creative Commons Attribution_ShareAlike v4.0 International. Author: Manu Art. Link: https://manu-art.itch.io/library-asset-pack
  spriteImg = loadImage('/assets/prototype_character.png'); //Asset licence: You can use these assets in commercial and non-commercial projects. You can edit these assets. You can't redistribute or resell these assets, even if they have been modified. 
//Author: Snoblin
//Link:https://snoblin.itch.io/pixel-rpg-free-npc 
  tilesetImg = loadImage('/assets/Tileset.png'); //Asset licence: Creative Commons Attribution_ShareAlike v4.0 International. Author: Manu Art. Link: https://manu-art.itch.io/library-asset-pack
  bookImg = loadImage('/assets/book2.png'); //Asset Licence: nothing. Author: Sleeping Unicorn Studio. Link: https://sleepingunicornstudios.itch.io/book
  witchImg = loadImage('/assets/witch.png');
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











