
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
    fill(0);
    background(0);
}

}

function startGame(){
    clickCounter++; ////PDM1 W7L1 (inputsAndEvents)
    modeButton.hide();
    let s = show(libaryBackgroundImg);
    background(libaryBackgroundImg);
      libaryBackgroundImg.show();
      player.show();
      bookImg.show();
      witchImg.show();
    }

