var bgImg;
var cat,catImage1,catImage2,catImage3;
var mouse,mouseImage1,mouseImage2,mouseImage3;

function preload() {
    //load the images here
    bgImg = loadImage("images/garden.png");
    catImage1 = loadAnimation("images/cat1.png");
    mouseImage1 = loadAnimation("images/mouse1.png");
    catImage2 = loadAnimation ("images/cat2.png","images/cat3.png");
    mouseImage2 = loadAnimation ("images/mouse2.png","images/mouse3.png");
    catImage3 = loadAnimation("images/cat4.png");
    mouseImage3 = loadAnimation("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
  cat = createSprite(870,600);
  cat.addAnimation("catSleeping",catImage1);
  cat.scale = 0.2;
  
  mouse = createSprite(200,600);
  mouse.addAnimation("mouseComing",mouseImage1);
  mouse.scale = 0.16;

}

function draw() {

    background(bgImg);
    //Write condition here to evalute if tom and jerry collide

    if(cat.x - mouse.x <(cat.width - mouse.width)/2){
        cat.velocityX = 0;
        cat.addAnimation("catSatisfied",catImage3);
        cat.x = 300;
        cat.scale = 0.2;
        cat.changeAnimation("catSatisfied");

        mouse.addAnimation("mouseSatisfied",mouseImage3);
        mouse.scale = 0.16;
        mouse.changeAnimation("mouseSatisfied");
    }
    drawSprites();
}

function keyPressed(){

  //For moving and changing animation write code here

  if(keyCode === LEFT_ARROW){

    mouse.addAnimation("mouseTeasing",mouseImage2);
    mouse.changeAnimation("mouseTeasing");
    mouse.frameDelay = 25;

    cat.addAnimation("catRunning",catImage2);
    cat.changeAnimation("catRunning");
    cat.velocityX = -5;
 }
}
