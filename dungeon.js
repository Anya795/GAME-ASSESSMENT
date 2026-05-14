//PDM2 W7L1 Environment
class dungeon{
    image;
    constructor(image){
        this.image = image;
    }

    AddGoldKey(x, y){
        image(this.image, x, y, 50, 50, 144, 144, 16, 16);
    }

    AddSilverKey(x, y){
        image(this.image, x, y, 50, 50, 128, 128, 16, 16);
    }

    // AddChest(x, y){
    //     image(this.image, x, y, 100, 100, 675, 1005, 320, 320);
    // }

    AddWall(x, y){
        image(this.image, x, y, 200, 200, 30, 16, 40, 40);
    }

    AddWall2(x, y){
        image(this.image, x, y, 200, 200, 20, 2, 64, 64);
    }

    AddWall3(x, y){
        image(this.image, x, y, 200, 200, 22, 20, 60, 60);
    }

    AddWall4(x, y){
        image(this.image, x, y, 200, 200, 10, 10, 64, 64);
    }

    AddWall5(x, y){
        image(this.image, x, y, 200, 200, 15, 17, 50, 50);
    }

    // AddSideWall(x, y){
    //     image(this.image, x, y, 300, 40, 0, 60, 90, 16);
    // }
}

//PDM2 W4L1 GridBasedMazeComplete
class Wall{
    /** 
     * @param {number} x The x coordinate
     * @param {number} y The y coordinate
     * @param {number} w The width
     * @param {number} h The height
     */
    constructor(x ,y, w, h){
        this.x = x;
        this.y = y;
        this.h = h;
        this.w = w;
    }

    AddNewWall(x ,y, w, h){
        this.AddWall(x,y);
        Wall.push(new Wall(x, y, w,h));
    }
}

function isOccupied(checkX, checkY){
        for(let w of wall){
            if(checkX < w.x + w.w &&
                checkX + 30 > w.x &&
                checkY < w.y + w.h &&
                checkY + 40 > w.y){
                    return true;
                }
        }
        return false;
    }