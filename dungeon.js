//PDM2 W7L1 Environment
class dungeon{
    image;
    constructor(image){
        this.image = image;
    }

    AddGoldKey(x, y){
        image(this.image, x, y, 50, 50, 144, 144, 16, 16);
    }

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
}