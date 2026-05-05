

class LevelOne{
    levelName;
    elementHelper;
    constructor(){
        this.levelName = "Level One"
        this.elementHelper = "Level One"
        this.AddText = "Level One"
    }
     draw(){
        ;
        this.elementHelper.AddText(this.levelName, width/2, height/2);
 }

 draw(){
    image(libaryBackgroundImg, 0, 0, 800, 600);
 }

}

function startGame(){

    clickCounter++; ////PDM1 W7L1 (inputsAndEvents)
    player.show();
    player.move();
    player.update();
    }

function buttonHide(){
    if (mouseIsPressed){
        modeButton.hide();
        image(libaryBackgroundImg, 0, 0, 800, 600);

        if(mouseIsPressed){
            levelState = 2;
            image(libaryBackgroundImg, 0, 0, 800, 600);
            image(witchImg, 600, 375 , 120, 100);
            dialogueBox.show();
        } else{
            background(0)
            levelState = 0;
        }
        player.show();
        player.update()
        player.move();
    }
}