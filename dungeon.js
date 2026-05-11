class dungeon{
    image;
    constructor(image){
        this.image = image;
    }

    AddKey(x, y){
        image(this.image, x, y, 50, 50, 144, 144, 16, 16);
    }

    AddSilverKey(x, y){
        image(this.image, x, y, 50, 50, 128, 128, 16, 16)
    }

    // AddChest(x, y){
    //     image(this.image, x, y, 100, 100, 675, 1005, 320, 320);
    // }

    AddWall(x, y){
        image(this.image, x, y, 200, 200, 16, 16, 64, 64);
    }

    AddWall2(x, y){
        image(this.image, x, y, )
    }

}