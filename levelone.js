class LevelOne{
    levelName;
    elementHelper;
    constructor(){
        this.levelName = "Level One"
    }
     draw(){
        ;
        this.elementHelper.AddText(this.levelName, width/2, height/2);
 }

 draw(){
    // background(0);
 }

}

function startGame(){
    // background(0);
    clickCounter++; ////PDM1 W7L1 (inputsAndEvents)
    // background(libaryBackgroundImg);
    // image(libaryBackgroundImg);
    player.show();
    player.move();
    player.update();
    }

function buttonHide(){
    if (mouseIsPressed){
        modeButton.hide();
        // background(libaryBackgroundImg);
        if(mouseIsPressed){
            background(0)
        } else{
            background(libaryBackgroundImg);
        }
    }
}

