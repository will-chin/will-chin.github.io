class egg {
    constructor() {
        this.x = 200;
        this.y = 150;
    }

    move(){
        this.x = this.x + random(-4,4);
        this.y = this.y + random(-4,4);
    }

    show() {
        stroke(255);
        strokeWeight(18);
        fill('yellow');
        ellipse(this.x,this.y,60,60);
    }
}
