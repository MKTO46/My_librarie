function setup() {
  createCanvas(800,400);
  fixedrect = createSprite(200, 200, 50, 50);
  movingrect = createSprite(600, 200, 80, 50);
  fixedrect.velocityX = 5
  movingrect.velocityX = -5
}

function draw() {
  background('purple');  
BounceOff(fixedrect,movingrect)
  drawSprites();
}


