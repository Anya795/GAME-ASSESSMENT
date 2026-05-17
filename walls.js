class Wall{
    constructor(image, x, y, wallType){
        this.image = image;
        this.x = x;
        this.y = y;
        this.ww = 200;
        this.wh = 100;
        this.c = 40; //collision
        this.wallType = wallType;
    }
    displayNow(){
    fill(150, 50, 50);
    // rect(this.x, this.y, this.ww, this.wh);

    if (this.wallType === 1){
        image(this.image, this.x, this.y, this.ww, 200, 30, 16, 40, 40);
    }
    if (this.wallType === 2){
        image(this.image, this.x, this.y, this.ww, 200, 20, 2, 64, 64);
    }
    if (this.wallType === 3){
        image(this.image, this.x, this.y, this.ww, 200, 22, 20, 60, 60);
    }
    if (this.wallType === 4){
        image(this.image, this.x, this.y, this.ww, 200, 10, 10, 64, 64);
    }
    if (this.wallType === 5){
        image(this.image, this.x, this.y, this.ww, 200, 15, 17, 50, 50);
    }
}

collisionDetection(newX, newY, newW, newH){
    if(
        newX < this.x + this.ww &&
        newX + newW > this.x &&
        newY < this.y + this.c &&
        newY + newH > this.y

    ){
        return true;
    }
    return false;
}
}
            









