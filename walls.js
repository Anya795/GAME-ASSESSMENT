function tryMovePlayer() {
    let newX, newY;
    switch(key){
        case "UP_ARROW":
            newY = player1.getY() - player1.getSpeed();
            if(!dungeon.isOccupied(player1.getX() + player1.getWidth(), newY)){
                player1.moveUp();
            }
            break;
            case "LEFT_ARROW":
                if(!dungeon.isOccupied(newX, player1.getY()) && !dungeon.isOccupied(newX, player1.getY() + player1.getHeight())){
                    player1.moveLeft();
                }
                break;
                case "DOWN_ARROW":
                    newY = player1.getY() +player1.getSpeed() + player1.getHeight();
                    if (!dungeon.isOccupied(player1.getx() + player1.getWidth(), newY)) {
                        player1.moveDown();
                    }
                    break;
                    case "RIGHT_ARROW":
                        newX = player1.getX() + player1.getSpeed() + player.getWidth();
                        if (!grid.isOccupied(newX, player.getY()) && !grid.isOccupied(newX, player.getY() + player.getHeight())) {
                player.moveRight();
            }
            break;
    }
}

function createWall() {
    wall = [
    new Wall(100, 0, 200, 200), 
    new Wall (300, 0, 200, 200), //
    new Wall (500, 0, 200, 200),
    new Wall (100, 100, 200, 200),
    new Wall (200, 100, 200, 200),
    new Wall (500, 100, 200, 200),
    new Wall (100, 300, 200, 200),
    new Wall (300, 300, 200, 200),
    new Wall (500, 300, 200, 200),
    new Wall (100, 500, 200, 200),
    new Wall (300, 500, 200, 200),
    new Wall (500, 500, 200, 200),
 ];
 
}

function addWallsToGrid() {
    for (const wall of walls) {
        grid.addToGrid(wall);
    }
}



