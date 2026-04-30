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

function mousePressed(startGame){
   if (modeButton.mousePressed){
    background(libaryBackgroundImg);
   } else{
    background(0);
   }
}

// function startGame(){
//     modeButton.hide();
//   }


