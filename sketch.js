var seaImg;
var shipImg;
function preload(){

seaImg = loadImage("sea.png");
shipImg = loadImage ("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png");
}

function setup(){
  createCanvas(600,400);
  sea = createSprite (200,100);
  sea.addAnimation("flow", seaImg);
  sea.scale = 0.3;
  sea.velocityX = -3;
  ship = createSprite (300, 90)
  ship.addAnimation("wave",shipImg);
  ship.scale = 0.25;
}

function draw() {
  background("white");
  if(sea.x < 0){
  sea.x = sea.width/8;
  }
 drawSprites();
}