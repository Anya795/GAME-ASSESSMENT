class LevelTwo{
    levelName;
    elementHelper;
    constructor(){
        this.levelName = "Level Two"
    }
     draw(){
        libaryBackgroundImg();
        this.elementHelper.AddText(this.levelName, width/2, height/2);
 }
 
}