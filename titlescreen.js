let gameStart = "MENU";

let modeButton;


function startButton(){
    console.log("Button clicked!");
    modeButton.hide();
    gameStart = "PLAYING"
}

function mouseClicked(){
    modeButton.mouseClicked(startButton)
}