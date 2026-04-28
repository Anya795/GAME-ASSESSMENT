class LevelOne{
    levelName;
    constructor(){
        this.levelName = "Level One"
    }

    draw(){
    //start button 
    modeButton = createButton("Start!")
    const mainContainer = select("main");
    modeButton.parent(mainContainer);
    modeButton.position(300,500);
    modeButton.size(130,40);
    modeButton.mousePressed(startGame);
    }
}

function setup(){
    createCanvas(800, 600);
}

function draw(){
    background(0);
}
