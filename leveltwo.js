class LevelTwo{
    levelName;
    elementHelper;
    AddText;
    constructor(){
        this.levelName = "Level Two"
        this.elementHelper = "Level Two"
        this.AddText = "Level Two"
    }
     draw(){
        this.elementHelper.AddText(this.levelName, width/2, height/2);
 }
 
}