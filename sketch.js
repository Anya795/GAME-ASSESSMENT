//starting coordinates
let x, y;
let item; 

//dungeon
let dungeonImg;
let dungeonTile;

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
let bookImg;
let witchImg;


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
  dungeonImg = loadImage('/assets/Dungeon_Tileset.png')
}

function setup() {
  createCanvas(800, 600);
  //dungeon
  dungeonTile = new dungeon(dungeonImg);
  
  
  player1 = new Character();
  
  //random coordinates
  x = random(800);
  y = random(600);

  strokeWeight(4);
  point(x, y)



  //dialogue W7L2(dialogueBox)
  dialogueBox = new DialogueBox([
    "Hey you! Click me! The little witch with purple hair." ,
    "Collect items to move onto the next level!" ,
    "Each level means you collect more items as you go along"
  ]);

}

function draw() {
  background(0);
  // image(libaryBackgroundImg, 0, 0, 800, 600);

  //dungeon
  dungeonTile.AddKey(300, 400);
  dungeonTile.AddWall(100, 100);
  dungeonTile.AddSilverKey(100, 400);

  startGame();
  image(witchImg, 600, 375 , 120, 100);

  fill(100, 50, 200);
  circle(x, y, 15);
  //IMAGES
  // image(libaryImg, 50, 50, 150, 150);
  // image(tilesetImg, 400, 300, 50, 60); 
  // image(bookImg, point.x, point.y, 30, 40);


  player1.update();
  player1.show();
  player1.move();
  


  //collection item coordinates
  //https://p5js.org/examples/games-snake/ - used some of this code
  translate(0.5, 0.5);
  // showItem();




  //dialogue
  if(dialogueBox.outOfLines === false)
    dialogueBox.draw();
}


//dialogue W7L2(dialogueBox)
function mousePressed(){
  dialogueBox.nextLine();
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

