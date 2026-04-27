const START = 0;
const PLAYING = 1;
let state = START;

function setup(){
    createCanvas(800, 600);
    //start button 
    modeButton = createButton("Start!")
    const mainContainer = select("main");
    modeButton.parent(mainContainer);
    modeButton.position(300,500);
    modeButton.size(130,40);
    modeButton.mousePressed(startGame);
}

function draw(){
    background(0);
    image(libaryBackgroundImg, 0, 0, 800, 600);
    switch (state){
        case START:
            drawStart();
            break;
        case PLAYING:
            preload();
            break;
 }

 libaryBg();
}

//start scene
function libaryBg(){
    textAlign(CENTER);
    textSize(30);
    text("Level One!", 400, 300);
}

function preload (){
  libaryBackgroundImg = loadImage('/assets/Background.png');
}
