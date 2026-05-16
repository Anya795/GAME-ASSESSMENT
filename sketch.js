
let x, y;
let keys = [];

let myFont;
//dungeon
let dungeonImg;
let dungeonWall;

let player1;
let dungeonTile;
let walls = [];

//dialogue
let dialogueBox;

let spriteImg;
let witchImg;


//images
function preload (){
  spriteImg = loadImage('/assets/prototype_character.png'); 
//Author: Snoblin, URL:https://snoblin.itch.io/pixel-rpg-free-npc, Date Accessed: 11th April 2026
  witchImg = loadImage('/assets/witch.png'); //Author: JT, URL: https://jia-tong.itch.io/witches, Date Accessed: 13th April 2026
  dungeonImg = loadImage('/assets/Dungeon_Tileset.png'); //Author: Pixel_Poem, URL: https://pixel-poem.itch.io/dungeon-assetpuck, Date Accessed: 11th April 2026
  myFont = loadFont('assets/CassandraPersonalUseRegular-3BjG.ttf'); //Author: Billy Argel Fonts, URL:  //www.fontspace.com/cassandra-font-f29711, Date Accessed: 20th April 2026
}

function setup() {
  createCanvas(800, 600)
  dungeonTile = new dungeon(dungeonImg);
  dungeonWall = new Wall(dungeonImg, 0, 0, 1);

keys.push(new Key(250, 200, dungeonTile.image));
keys.push(new Key(100, 400, dungeonTile.image));
keys.push(new Key(500, 400, dungeonTile.image));
keys.push(new Key(600, 50, dungeonTile.image));

walls.push(new Wall(dungeonWall.image, 100, 0, 3));
walls.push(new Wall(dungeonWall.image, 300, 0, 1));
walls.push(new Wall(dungeonWall.image, 500, 0, 1));
walls.push(new Wall(dungeonWall.image, 100, 100, 1));
walls.push(new Wall(dungeonWall.image, 300, 100, 2));
walls.push(new Wall(dungeonWall.image, 500, 100, 3));
walls.push(new Wall(dungeonWall.image, 100, 300, 5));
walls.push(new Wall(dungeonWall.image, 300, 300, 1));
walls.push(new Wall(dungeonWall.image, 500, 300, 5));
walls.push(new Wall(dungeonWall.image, 100, 500, 2));
walls.push(new Wall(dungeonWall.image, 300, 500, 1));
walls.push(new Wall(dungeonWall.image, 500, 500, 1 ));

  //dungeon
  player1 = new Character(spriteImg, 100, 100);
  witchSprite = new Character();
  player1.image = spriteImg;
  witchSprite.x = 600;
  witchSprite.y = 375;
  
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



  if(dist(player1.x, player1.y, witchImg.x, witchImg.y) < 30){ //dist = URL: https://p5js.org/reference/p5/dist/. Prompted to use by Gemini 
    gameStart = "MENU";
  }


  //PDM2 W7L1 Environment
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
  //My modification ends


   if(gameStart === "PLAYING"){
     for (let k of keys){
    k.showCase();
    if(k.checkingCollision(player1.x, player1.y, player1.w, player1.h)){
      console.log("key collected!)")
    }
  }
  // for (let wall of walls){
  //   wall.displayNow();
  //   //   console.log("Obstacle wall");
  //   // }
  //    player1.update(wall);
  //    player1.displayNow();

  //     }
    
    witchSprite.follow(player1);
    witchSprite.appear();
    player1.show();
    player1.update();
    console.log(player1.x, player1.y);
    if(dialogueBox.outOfLines === false)
    dialogueBox.draw();
    player1.move();
    let d = dist(player1.x, player1.y, witchSprite.x, witchSprite.y);
      if(d < 20){
        endGame();
        gameStart === "MENU";
      }
     }

     if(player1.x > 700 && player1.y > 500){
      gameStart = "WIN";
       winScreen();
     } else if(gameStart === "WIN"){
     }
     else if (gameStart === "MENU"){
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
    textAlign(LEFT, BASELINE);
    stroke(70, 60, 100);
    fill(255, 200, 200)
    textSize(25);
    text("Dungeon Keys", 300 , 100)
    textFont(myFont);
    endGame();
  }
}



class Character{
  xDirection;
  yDirection;
  speed = 5;
  size;
    constructor(){
      this.x = 400;
      this.y = 300;
      this.w = 30;
      this.h = 40;
      this.speed = 2;
      this.wSpeed = 1; //speed for witch

}

  move(){
  }

  follow(target){
  if(this.x < target.x){
    this.x += this.wSpeed;
  } else if (this.x > target.x){
    this.x -= this.wSpeed;
  }
  if(this.y < target.y){
    this.y += this.wSpeed;
  } else if (this.y > target.y){
    this.y -= this.wSpeed;
  }
 }


  update(walls){
   let nextX = this.x;
   let nextY = this.y;
    
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
  // for(let wall of walls){
  //   if(walls.collisionDetection(player1.x, player1.y, wall)){
  //     this.x = nextX;
  //     this.y = nextY;
  //     break;
  //   }
  // }
}

  show(){
    image(spriteImg, this.x, this.y, this.w, this.h); //number = width and height of image
  }

  appear(){
     image(witchImg, this.x, this.y, 90, 100,);
  }

  displayNow(){
  image(this.image, this.x, this.y, walls);
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



