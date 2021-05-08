var charecter1
function preload(){
  bg = loadImage("snow2.jpg")
  snowman = loadImage("snowman.png")

}


function setup() {
  createCanvas(800,400);
   charecter1 = createSprite(400, 350, 50, 50);
  charecter1.addImage(snowman)
  charecter1.scale = 0.2
}

function draw() {
  background(bg); 
  drawSprites();
  if(keyDown("left_arrow")){
    charecter1.x=charecter1.x-5
    console.log("left_arrowKeyPressed")

  }
  if(keyDown("right_arrow")){
    charecter1.x=charecter1.x+5
  }
  
  if(keyDown("space")) {
    charecter1.velocityY = -13;
  
}

//add gravity
charecter1.velocityY = charecter1.velocityY + 0.2
}