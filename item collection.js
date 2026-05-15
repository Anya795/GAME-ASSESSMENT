class Key {
    constructor( x, y, img) {
        this.x = x;
        this.y = y;
        this.img = img;
        this.kw = 50;
        this.kh = 50;
        this.collected = false;
    }

    showCase() {
        if(this.collected === false){
            image(this.img, this.x, this.y, this.kw, this.kh, 144, 144, 16, 16);
        }
    }

    checkingCollision(ax, ay, aw, ah){
        if(!this.collected &&
            ax < this.x + this.kw &&
            ax + aw > this.x &&
            ay < this.y + this.kh &&
            ay + ah > this.y){
                this.collected = true;
                return true;
            }
            return false;
    }
}

