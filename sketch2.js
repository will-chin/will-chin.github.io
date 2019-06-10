var ballArray = []
var gravity = 9.8/30.0;
var speed = 0.0005

var sunX = 300
var sunY = 300

var sun2X = 100
var sun2Y = 100


class Ball {
    constructor(x, y, width) {
        this.x = x;
        this.y = y;
        this.ySpeed = 0;
        this.xSpeed = 0;
        this.width = width;
        this.color = "hotpink"
    }

    update(){
        var directionX = sunX-this.x
        var directionY = sunY-this.y
        var direction2X = sun2X-this.x
        var direction2Y = sun2Y-this.y

        this.xSpeed += directionX*speed/(this.width*0.04)
        this.ySpeed += directionY *speed/(this.width*0.04)
        this.xSpeed += direction2X*speed/(this.width*0.04)
        this.ySpeed += direction2Y *speed/(this.width*0.04)


        this.x += this.xSpeed
        this.y += this.ySpeed



    }

    draw(){

        fill(this.color)
        fill(Math.abs(this.xSpeed)*255, Math.abs(this.xSpeed)*0, 255)

        ellipse(this.x, this.y, this.width, this.width)
    }
}

function setup() {
    createCanvas(1965, 800);
    for(var i = 0;i<20;i++){
        var newBall = new Ball(random(0, width), random(0, height), random(10, 100))
        ballArray.push(newBall)
    }
}

function draw(){
    background(0,0,0)

    fill("yellow")
    ellipse(sunX, sunY, 10, 10)

    fill("yellow")
    ellipse(sun2X, sun2Y, 10, 10)

    for(var i = 0;i<ballArray.length;i++){
        ballArray[i].update()
        ballArray[i].draw()
    }



}
function mouseClicked(){
    sunX = mouseX;
    sunY = mouseY;

}