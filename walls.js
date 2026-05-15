class Wall{
    constructor(img, x, y, wallType){
        this.img = img;
        this.x = x;
        this.y = y;
        this.ww = 200;
        this.wh = 200;
        this.wallType = wallType
    } 
    collisionDetection(newX, newY, walls) {
        for(let wall of walls){
            if(newX < wall.x + wall.ww &&
                newX + this.w > wall.x &&
                newY < wall.wy + wall.wh &&
                newY + this.wh > wall.y ){
                    return true;
                }
            }
            return false;
        }
        displayNow(){
            if(this.wallType === 1){
                image(this.img, this.x, this.y, this.ww, this.wh, 30, 16, 40, 40);
            }
            else if (this.wallType === 2){
                image(this.img, this.x, this.y, this.ww, this.wh, 20, 2, 64, 64);
            }
            else if (this.wallType === 3){
                image(this.img, this.x, this.y, this.ww, this.wh, 22, 20, 60, 60);
            }
             else if (this.wallType === 4){
                image(this.img, this.x, this.y, this.ww, this.wh, 10, 10, 64, 64);
            }
             else if (this.wallType === 5){
                image(this.img, this.x, this.y, this.ww, this.wh, 15, 17, 50, 50);
            }
        }
    }






//PDM2 W4L1 GridBasedMazeComplete
// function tryMovePlayer() {
//     let newX, newY;
//     switch(key){
//         case "UP_ARROW":
//             newY = player1.getY() - player1.getSpeed();
//             if(!dungeon.isOccupied(player1.getX() + player1.getWidth(), newY)){
//                 player1.moveUp();
//             }
//             break;
//             case "LEFT_ARROW":
//                 if(!dungeon.isOccupied(newX, player1.getY()) && !dungeon.isOccupied(newX, player1.getY() + player1.getHeight())){
//                     player1.moveLeft();
//                 }
//                 break;
//                 case "DOWN_ARROW":
//                     newY = player1.getY() +player1.getSpeed() + player1.getHeight();
//                     if (!dungeon.isOccupied(player1.getx() + player1.getWidth(), newY)) {
//                         player1.moveDown();
//                     }
//                     break;
//                     case "RIGHT_ARROW":
//                         newX = player1.getX() + player1.getSpeed() + player.getWidth();
//                         if (!dungeonrid.isOccupied(newX, player.getY()) && !dungeon.isOccupied(newX, player.getY() + player.getHeight())) {
//                 player.moveRight();
//             }
//             break;
//     }
// }

// function createWall() {
//     wall = [
//     new Wall(100, 0, 200, 200), 
//     new Wall (300, 0, 200, 200), 
//     new Wall (500, 0, 200, 200),
//     new Wall (100, 100, 200, 200),
//     new Wall (200, 100, 200, 200),
//     new Wall (500, 100, 200, 200),
//     new Wall (100, 300, 200, 200),
//     new Wall (300, 300, 200, 200),
//     new Wall (500, 300, 200, 200),
//     new Wall (100, 500, 200, 200),
//     new Wall (300, 500, 200, 200),
//     new Wall (500, 500, 200, 200),
//  ];
 
// }





