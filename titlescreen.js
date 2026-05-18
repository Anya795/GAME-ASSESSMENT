let gameStart = "MENU";

let modeButton;


function startButton(){
    console.log("Button clicked!");
    modeButton.hide();
    gameStart = "PLAYING"
}

function mouseClicked(){
    modeButton.mouseClicked(startButton);
}

function endGame(){
    if (gameStart = "MENU"){
    modeButton.show();
    }
    else if (gameStart = "PLAYING"){
        modeButton.hide();
    }

}

function winScreen(){
    background(20, 200, 99);
    fill(255);
    textSize(28);
    textAlign(CENTER)
    textFont(myFont);
    text("YOU WON, CONGRATULATIONS!", width/2, height/2);
    textSize(14);
    textFont("Arial");
    text("Press 'R' to return back to the Home Page", width/2, height/2 + 50);

}

function keyPressed(){
    if(gameStart === "WIN"){
        if(key === 'R'){
            console.log("R is clicked");
            gameStart = "MENU";

            player1.x = 700;
            player1.y = 200;
        }
    }
}