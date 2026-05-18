class Wall{
    constructor(image, x, y, wallType){
        this.image = image;
        this.x = x;
        this.y = y;
        this.ww = 64
        this.wh = 64;
        this.c = 64; //collision
        this.wallType = wallType;
    }
    displayNow(){
    fill(150, 50, 50);
    // rect(this.x, this.y, this.ww, this.wh);

    if (this.wallType === 1){
        image(this.image, this.x, this.y, 200, 200, 30, 16, 40, 40);
    }
    if (this.wallType === 2){
        image(this.image, this.x, this.y, 200, 200, 20, 2, 64, 64);
    }
    if (this.wallType === 3){
        image(this.image, this.x, this.y, 200, 200, 22, 20, 60, 60);
    }
    if (this.wallType === 4){
        image(this.image, this.x, this.y, 200, 200, 10, 10, 64, 64);
    }
    if (this.wallType === 5){
        image(this.image, this.x, this.y, 200, 200, 15, 17, 50, 50);
    }
}

collisionDetection(newX, newY, newW, newH){
    if (newX + newW <= this.x) return false;
    if (newX >= this.x + this.ww) return false;
    if (newY + newH <= this.y) return false;
    if(newY >= this.y + 40) return false;
        return true;
}
}
            









