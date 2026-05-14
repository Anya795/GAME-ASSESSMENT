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
        background(0);
    modeButton.show();
    }
    else if (gameStart = "PLAYING"){
        modeButton.hide();
    }

}
