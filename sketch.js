var backgroundImg, background;
var catStart, catWalking, catSitting;
var mouseTeasing, mouseStopping;
var cat, mouse;

function preload() {
    backgroundImg = loadImage ("garden.png");
    catStart = loadImage ("cat1.png");
    catWalking = loadAnimation ("cat2.png", "cat3.png");
    catSitting = loadImage ("cat4.png");

    mouseTeasing = loadAnimation ("mouse1.png", "mouse2.png", "mouse3.png");
    mouseStopping = loadImage ("mouse4.png");
}

function setup(){
    createCanvas(1000,1000);

    cat = createSprite (500, 200);
    cat.addImage (catStart);

    mouse = createSprite (250, 200);
    mouse.addAnimation (mouseTeasing);
}

function draw() {

    background(255);
    
    keyPressed ();

    if (cat.x - mouse.x < (cat.width - mouse.width) /2) {
        cat.velocityX = 0;
        cat.addAnimation ("catSitting", catSitting);
        cat.changeAnimation (catSitting);
    }

    drawSprites();
}


function keyPressed(){

    if (keyCode === LEFT_ARROW) {
        cat.velocityX = -4;
        cat.addAnimation ("catWalking", catWalking);
        cat.changeAnimation (catWalking);
    }


}
