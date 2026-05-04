let levelState = 0
let levels = [];

//fade vales and states. W7L2(fancy levels)
let fadeAlpha = 0;
let fadeState = "idle";
const FADEOUT = 'out';
const FADEIDLE = 'idle';
const FADEIN = "in"
let targetLevel = null;

//dialogue
let dialogueBox;
//startbutton
let modeButton;
let clickCounter = 0;
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
  //PDM1 (W7L1)
  configureCounterButton();

  //create levels W7L2(fancy levels)
  levels.push(new LevelOne(modeButton));
  levels.push(new LevelTwo(modeButton));

  //dialogue W7L2(dialogueBox)
  dialogueBox = new DialogueBox([
    "Hey you! Click me! The little witch with purple hair." ,
    "Collect items to move onto the next level!" ,
    "Each level means you collect more items as you go along"
  ]);

  // levels
  levelState = 0;
    levels.push(new LevelOne);
    levels.push(new LevelTwo);
}

function configureCounterButton(){ //PDM1 W7L1 (inputsAndEvents)
  ////PDM1 W7L1 (Lecture 1)
  background(0);
  modeButton = createButton("Start!")
  const mainContainer = select("main");
  modeButton.parent(mainContainer);
  modeButton.position(300,500);
  modeButton.size(130,40);
  modeButton.mouseClicked(buttonHide);
}
  
  // function startGame(mousePressed){
  //   clickCounter++; ////PDM1 W7L1 (inputsAndEvents)
  //   if (mousePressed){
  //     modeButton.hide();
  //     libaryBackgroundImg.show();
  //     player.show();
  //     bookImg.show();
  //     witchImg.show();
  //   }

  // }

function draw() {
  background(0);
  startGame();
  buttonHide();
  // let x = random(800);
  // let y = random(600);
  
  // //collection item
  // strokeWeight(4);
  //   fill(150, 30 ,30);
  //   circle(x, y, 15);
  
 
  // switch statement (levels)
  switch(levelState){
    case 0:
      break;
      case 1:
      levels[0].draw();
      break;
      case 2:
        levels[2].draw();
        player.update();
        player.move();
        

      //fade effect W7L2(fancy levels)
      updateFade();
      drawFsde();
      push();

  }

  
  
  //IMAGES
  // image(libaryBackgroundImg, 0, 0, 800, 600);
  image(libaryImg, 50, 50, 150, 150);
  image(tilesetImg, 400, 300, 50, 60); 
  // image(bookImg, point.x, point.y, 30, 40);
  // image(witchImg, 600, 375 , 120, 100);
  player.update();
  player.show();
  player.move();

  //dialogue
  if(dialogueBox.outOfLines === false)
    dialogueBox.draw();
}

//W7L2(fancy levels)
function updateFade(){
  if (fadeState === FADEOUT){
    fadeAlpha += 10;
    if (fadeAlpha >= 255){
      fadeAlpha = 255;

      levelState = FADEIN;
    }
  }
  else if (fadeAlpha === FADEIN){
    fadeAlpha -= 10;
    if (fadeAlpha <= 0){
      fadeAlpha = 0;
      fadeState = FADEIDLE;
    }
  }
}

function drawFsde(){
  if (fadeAlpha > 0){
    noStroke();
    fill(0, fadeAlpha);
    rect(0, 0, width, height);
  }
}

//dialogue W7L2(dialogueBox)
function mousePressed(){
  dialogueBox.nextLine();
}

//images
function preload (){
  libaryImg = loadImage('/assets/Demo.png');
  libaryBackgroundImg = loadImage('/assets/Background.png'); //Asset licence: Creative Commons Attribution_ShareAlike v4.0 International. Author: Manu Art. Link: https://manu-art.itch.io/library-asset-pack
  spriteImg = loadImage('/assets/prototype_character.png'); //Asset licence: You can use these assets in commercial and non-commercial projects. You can edit these assets. You can't redistribute or resell these assets, even if they have been modified. 
//Author: Snoblin
//Link:https://snoblin.itch.io/pixel-rpg-free-npc 
  tilesetImg = loadImage('/assets/Tileset.png'); //Asset licence: Creative Commons Attribution_ShareAlike v4.0 International. Author: Manu Art. Link: https://manu-art.itch.io/library-asset-pack
  // bookImg = loadImage('/assets/book2.png'); //Asset Licence: nothing. Author: Sleeping Unicorn Studio. Link: https://sleepingunicornstudios.itch.io/book
  witchImg = loadImage('/assets/witch.png');
}


class Character{
  xDirection;
  yDirection;
  speed = 5;
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

 }
 
 moveRight() {

}

moveUp() {

}

moveDown() {

 }
}

