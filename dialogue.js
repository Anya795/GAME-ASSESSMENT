// W7L2(dialogueBox)
class DialogueBox {
    dialogue;
    index;
    outOfLines;

    constructor(dialogue) {
        this.dialogue = dialogue;
        this.index = 0;
        this.outOfLines = false;
    }

    draw() {

    fill(255);
    noStroke();
    textSize(12);
    textFont("Arial");
    text(this.dialogue[this.index], 200, 400);
}

nextLine(){
    this.index++;
    if(this.index >= this.dialogue.length) {
        this.outOfLines = true;
    }
}

}