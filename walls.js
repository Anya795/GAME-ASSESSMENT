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
    //gemini suggested this format/layout and to give the wall type numbers so it is easier to differentiate them    
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
//modification ends

collisionDetection(newX, newY, newW, newH){
    if (newX + newW <= this.x) return false;
    if (newX >= this.x + this.ww) return false;
    if (newY + newH <= this.y) return false;
    if(newY >= this.y + 90) return false;
        return true;
}
}
            









