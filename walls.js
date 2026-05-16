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








