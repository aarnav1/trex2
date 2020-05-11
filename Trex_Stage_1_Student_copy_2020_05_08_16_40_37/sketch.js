var trex, trex_running, trex_collide;
var ground, ground_Image, invis_Ground;

function preload(){
  trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png");
  trex_collide = loadImage("trex_collided.png");
  ground_Image = loadImage("ground2.png");
}



function setup() {
  createCanvas(400, 400);               
  
  trex = createSprite(50, 380, 20, 20);
  trex.addAnimation("trex_running", trex_running);
  trex.scale = 0.5;
  
  ground = createSprite(200, 380, 400, 10);
  ground.addImage("ground", ground_Image);
  ground.x = ground.width / 2;
  invisground = createSprite(200, 385, 400, 10);
  invisground.visible = false;
}

function draw() {
  background(255);
  
   if (keyDown("space")){
     trex.velocityY = -10;
   }
  
  trex.velocityY = trex.velocityY + 0.8;
  
  if (ground.x < 0){
    ground.x = ground.width / 2;
  }
  
  trex.collide(invisground);
  
 
  
  drawSprites();
  
  
}