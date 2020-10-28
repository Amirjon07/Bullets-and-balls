var bullet,wall,speed,weight,thickness
function setup() {
  createCanvas(800,400);
  bullet=createSprite(200, 200, 20, 20);
  bullet.shapeColor=("white")
  wall=createSprite(700, 200, 50, 200);
  wall.shapeColor=("gray")
  speed=random(223,321)
  thickness=random(22,83)
  bullet.velocityX=speed
  weight=random(30,52)
}

function draw() {
  background(0);  
  if (wall.x-bullet.x<bullet.width/2+wall.width/2){
    bullet.velocityX=0
    var damage=0.5*speed*speed*weight/thickness*thickness*thickness
    if (damage>10){
      bullet.shapeColor=("Red")
    }
  if (damage<10){
    bullet.shapeColor=("green")
  }
  }
  drawSprites();
}