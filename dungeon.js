class dungeon{
    image;
    constructor(image){
        this.image = image;
    }

    AddKey(x, y){
        image(this.image, x, y, 100, 100, 0, 1100, 320, 320);
    }

    AddChest(x, y){
        image(this.image, x, y, 100, 100, 675, 1005, 320, 320);
    }

    AddWall(x, y){
        image(this.image, x, y, 100, 100, 250, 800, 32, 32);
    }

}