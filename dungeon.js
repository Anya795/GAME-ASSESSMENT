//example code

class dungeon{
    image;
    constructor(image){
        this.image = image;
    }

    AddKey(x, y){
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
        image(this.image, x, y, 200, 200, 20, 2, 64, 64 );
    }

    AddWall3(x, y){
        image(this.image, x, y, 200, 200, 16, 2, 64, 64 );
    }

    AddWall4(x, y){
        image(this.image, x, y, 200, 200, 30, 16, 64, 64 );
    }

    // AddSideWall(x, y){
    //     image(this.image, x, y, 300, 40, 0, 60, 90, 16);
    // }


}