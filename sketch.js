//starting coordinates
let x, y;
let keys = [];
let grid;

let myFont;
//dungeon
let dungeonImg;
let dungeonTile;

//dialogue
let dialogueBox;
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
  dungeonImg = loadImage('/assets/Dungeon_Tileset.png');
  myFont = loadFont('assets/CassandraPersonalUseRegular-3BjG.ttf');
}

function setup() {
  createCanvas(800, 600);

  //dungeon
  dungeonTile = new dungeon(dungeonImg);
  player1 = new Character();

  keys.push(new collection(100, 400, 'silver', spriteImg));
  keys.push(new collection(250, 200, 'gold', spriteImg));
  
  //button
  modeButton = createButton("START");
  const mainContainer = select("main");
  modeButton.parent(mainContainer);
  modeButton.position(0,0);
  modeButton.size(100, 40);
  modeButton.position(350, 200)
  
  



  //dialogue W7L2(dialogueBox)
  dialogueBox = new DialogueBox([
    "",
    "",
    "Hey you! Click me! The little witch with purple hair." ,
    "Collect items to move onto the next level!" ,
    "Each level means you collect more items as you go along"
  ]);

}
//dialogue W7L2(dialogueBox)
function mousePressed(){
  dialogueBox.nextLine();
}

function draw() {
  background(0);
  
  //dungeon walls
  
  //top top

  dungeonTile.AddWall3(100, 0); //left
  dungeonTile.AddWall(300, 0); //middle
  dungeonTile.AddWall(500, 0); //right

  
  //top
  dungeonTile.AddWall(100, 100); //top left
  dungeonTile.AddWall(300, 100); //top middle
  dungeonTile.AddWall2(500, 100); //top right
  
  //middle
  dungeonTile.AddWall3(100,300); //middle left
  dungeonTile.AddWall5(300,300); //middle middle(centre)
  dungeonTile.AddWall(500,300); //middle right

  //bottom
  dungeonTile.AddWall5(100,500); //bottom left
  dungeonTile.AddWall2(300,500); //bottom middle
  dungeonTile.AddWall(500,500); //bottom right
  
  //side wall
  // dungeonTile.AddSideWall(200,300);


   if(gameStart === "PLAYING"){
     for (let k of keys){
    // k.show();
  }
    if(dialogueBox.outOfLines === false)
    dialogueBox.draw();
    dungeonTile.AddSilverKey(100, 400);
    dungeonTile.AddGoldKey(250, 200);
    image(witchImg, 600, 375 , 120, 100);
    player1.update();
    player1.show();
    player1.move();
    
  }else if (gameStart === "MENU"){
    stroke(70, 60, 100);
    fill(255, 200, 200)
    textSize(25);
    text("Dungeon Keys", 300 , 100)
    textFont(myFont);
  }



  


  //collection item coordinates
  //https://p5js.org/examples/games-snake/ - used some of this code
  translate(0.5, 0.5);
  // showItem();




  //dialogue
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

