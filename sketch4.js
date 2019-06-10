let egg1;
let egg2;
let egg3;
let egg4;

function setup() {
    createCanvas(400, 400);
    egg1 = new egg();
    egg2 = new egg();
    egg3 = new egg();
    egg4 = new egg();
}
function mousePressed(){
    let a = random (10,50);
    let b = new egg(mouseX, mouseY, a);
    egg.push (b);
}

function draw() {
    background('black');
    egg1.show();
    egg1.move();
    egg2.show();
    egg2.move();
    egg3.show();
    egg3.move();
    egg4.show();
    egg4.move();
}