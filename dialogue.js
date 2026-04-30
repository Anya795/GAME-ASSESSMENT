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
    textSize(18);
    text(this.dialogue[this.index], 80, 400);
}

nextLine(){
    this.index++;
    if(this.index >= this.dialogue.length) {
        this.outOfLines = true;
    }
}

}