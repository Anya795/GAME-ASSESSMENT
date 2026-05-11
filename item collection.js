// class collection{
//     image;
//     constructor(rect){
//         this.rect = rect;
//     }
// }

const player = {
x: 250,
y: 200,

width: 30,
height: 40,
}

let goldKey = [
    { x: 250, y: 200, height: 50, width: 50, collected: false }
]

function collisionCheck(rect1, rect2){
    return(
    rect1.x < rect2.x + rect2.width &&
    rect1.x + rect1.width > rect2.x &&
    rect1.y < rect2.y + rect2.height &&
    rect1.y + rect1.height > rect2.y
    );
}

function update() {
    if(!goldKey[0].collected) {
        if(collisionCheck(player, goldKey[0])){
            goldKey[0].collected = true;
            console.log("Key picked up!");
        }
    }
}

