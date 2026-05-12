const player = {
    x: 100,
    y: 100,
    width: 30,
    height: 40,
}



class collection{
  x;
  y;
  key; //silver or gold
    constructor(keyImage, keyType){
      x = 100;
      y = 100;
      this.width = 50;
      this.height = 50;
      this.keyType = keyType
      this.keyImage = keyImage;
      this.collected = false;
      


    }

    show(){
        if(!this.collected){
            if(this.keyImage === 'gold'){
                image(this.keyImage, this.x, this.y, 50, 50, 144, 144, 16, 16); } else{
                        image(this.keyImage, this.x, this.y, 50, 50, 128, 128, 16, 16);
                    }
                }if(!this.collected && rect(player, this)) {
                    this.collected = true;
                    console.log("Key picked up!");
                }
            }

            }



function update() {
    for (let k of keys){
        k.rect(player);
    }
}

function rect(r1, r2){
    return(
    r1.x < r2.x + r2.width &&
    r1.x + r1.width > r2.x &&
    r1.y < r2.y + r2.height &&
    r1.y + r1.height > r2.y
    );
}

// dungeonTile.AddSilverKey(100, 400);
//   dungeonTile.AddGoldKey(250, 200);