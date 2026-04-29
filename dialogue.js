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
    fill(0);
    stroke(255);
    rect(50, 250, 500, 100);

    fill(255);
    noStroke();
    textSize(18);
    text(this.dialogue[this.index], 70, 280);
}

nextLine(){
    this.index++;
    if(this.index >= this.dialogue.length) {
        this.outOfLines = true;
    }
}

}