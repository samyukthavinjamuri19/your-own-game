var girl;
var girlImage;
var block;


function preload(){
girlImage=loadImage("girl2.png")




}

function setup() {
    createCanvas(1000,1000)
 girl=createSprite(130,300,10,60);
 girl.addImage("girl",girlImage)
 girl.scale=0.12
 block=createSprite(139,200,15,90);
 block2=createSprite(139,200,15,90);
 
}




function draw() {
    if(keyDown("up")){
       
        girl.velocityY=-2
    }

    if(keyDown("down")){
       
        girl.velocityY=2
    }
    if(keyDown("right")){
       
        girl.velocityX=2
    }

    if(keyDown("left")){
       
        girl.velocityX=-2
    }






    background("#D3D3D3")
 drawSprites();
}