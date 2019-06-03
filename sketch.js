var mainCharacter;
var gravity = 10/64.0;
var backgroundImage;
var mainCharacterImage;
var monsterImage
var groundOffset = 100
var monsterArray = []
var monster2Image
var monster2Array = [] 
var health = 100;


class Character {
  constructor(x, y, width, isMonster,isMonster2) {
    this.x = x;
    this.y = y;
    this.ySpeed = 0;
    this.xSpeed = 0;
    this.width = width;
    this.color = "blue"
    this.isMonster = isMonster
    this.isMonster2 = isMonster2
  }
  
  update(){
	if(this.y+this.width*0.5 >= (height-groundOffset) && this.ySpeed > 0) 
    {
      this.ySpeed = this.ySpeed*(-0.4)
      this.y = height-this.width*0.5-groundOffset
    }
   
   this.ySpeed += gravity;
   this.y += this.ySpeed;
   
  if(this.isMonster === false)
  {
    this.xSpeed *= 0.8
  }
    
   
   this.x += this.xSpeed;
  if(this.isMonster2 === false)
  {
    this.xSpeed *= 0.8
  }
    this.x += this.xSpeed;
  }
  movebad(){
   if(this.isTouchingmainCharacter()){
     
   }
    
    
    
    
    var differenceX = mainCharacter.x-this.x
    if(differenceX>0)
    {
      this.xSpeed += 0.1
    }
    else
    {
      this.xSpeed -= 0.1
    }
  }
   isTouchingmainCharacter(){
    if(mainCharacter.x + mainCharacter.width >= this.x
       && mainCharacter.x <= this.x + this.width
       && mainCharacter.y + mainCharacter.width >= this.y
       && mainCharacter.y <= this.y + this.width)
    {
    return true
    }
    return false
  }
  
    draw(){
      
    if(this.isMonster){
      image(monsterImage, this.x, this.y, this.width, this.width)  
    
    } else if(this.isMonster2){
      image(monster2Image, this.x, this.y, this.width, this.width)  
    }  else {
      image(mainCharacterImage, this.x, this.y, this.width, this.width)
    }
    
       
    
}
}
function setup() {
  createCanvas(800, 500);
  mainCharacter = new Character(100, 200, 115,false,false)
  backgroundImage = loadImage("./background.png")
  mainCharacterImage = loadImage("./ironman.png")
  monsterImage = loadImage("./thanos.png")
  monster2Image = loadImage("./ebonymaw.png")
  
  var newMonster = new Character(470, 100, 175,true,false)

  monsterArray.push(newMonster)
  
  var newMonster2 = new Character(600,20,120,false,true)
  
  monsterArray.push(newMonster2)
}

function draw() {
  background(0, 200, 150);
  image(backgroundImage, 0, 0, width, height)
  
  if(keyIsDown(LEFT_ARROW)){
    //move left
    mainCharacter.xSpeed -= 2.0
  }
  
  if(keyIsDown(RIGHT_ARROW)){
    //move right
    mainCharacter.xSpeed += 2.0
  }
  
  mainCharacter.update();
  mainCharacter.draw()
  
  fill("blue")
  stroke("black")
  rect(10,10,health * 2,20)
  
  
  
  monsterArray[0].update()
  monsterArray[0].draw()
  monsterArray[1].movebad()
  monsterArray[0].movebad()
  monsterArray[1].update()
  monsterArray[1].draw()
  //draining health bar
  if(monsterArray[1].isTouchingmainCharacter()
  && monsterArray[0].isTouchingmainCharacter())
  {
  
    health -= 0.2
  }


}

function keyPressed(){
    if(key === " " && mainCharacter.y >= 320 ){
    //JUMP!
    mainCharacter.ySpeed -= 10.0
  }
}

