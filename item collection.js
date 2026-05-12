class collection{
  x;
  y;
  key; //silver or gold
    constructor(goldKey, silverKey){
      this.x = 100;
      this.y = 100;
      this.width = 50;
      this.height = 50;
      this.goldKey = goldKey;
      this.silverKey = silverKey;
      this.collected = false;

    }

    show(){
        if(!this.collected){
            if(this.type === 'gold'){
                image(this.goldKey, this.x, this.y, 50, 50, 144, 144, 16, 16); } else{
                        image(this.silverKey, this.x, this.y, 50, 50, 128, 128, 16, 16);
                    }
                }
            }
        }



function collisionCheck(player){
    if(!this.collected && collisionCheck(player, this)) {
        this.collected = true;
        console.log("Key picked up!");
        return true;
    }
    return false;
        }
    


function update() {
    for (let k of keys){
        k.collisionCheck(player);
    }
}

