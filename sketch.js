var car,wall;
var speed,weight;

function setup() {
 createCanvas(900,900);
  car = createSprite(400, 200, 50, 50);
  wall = createSprite(100,100,100,100);
}

function draw() {
  background(255,255,255); 
   car.velocityX = 5;
  drawSprites();
}