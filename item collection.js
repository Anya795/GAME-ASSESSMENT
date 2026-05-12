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
    constructor(AddGoldKey, AddSilverKey){
      this.x = 100;
      this.y = 100;
      this.width = 50;
      this.height = 50;
      this.AddGoldKey = AddGoldKey;
      this.AddSilverKey = AddSilverKey;
      this.collected = false;

    }

    show(){
        if(!this.collected){
            if(this.AddGoldKey === 'gold'){
                image(this.AddGoldKey, this.x, this.y, 50, 50, 144, 144, 16, 16); } else{
                        image(this.AddSilverKey, this.x, this.y, 50, 50, 128, 128, 16, 16);
                    }
                     updateCollision(player)
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