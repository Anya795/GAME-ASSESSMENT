//PDM1 W8L2(highScores)
let scores, startY, scoresY, scoresHeight;

function setup(){
    startY = height;
    scoresY = startY;
    scoresHeight = 10 * (scores.length + 1);
    textSize(12);
    textAlign(CENTER, TOP);
    fill(0, 255, 100);
}

function draw(){
    let display = "Score\n";
    for(let score of scores){
        display += score + "\n";
    }
    text(display, 0, scoresY, width, scoresHeight)
    moveText();
}

function moveText(){
    if (scoresY <= -scoresHeight) {
        scoresY = startY;
    } else {
        scoresY--;
    }
    }