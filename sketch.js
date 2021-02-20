
var box;
var canvas;
var music;
var surface1,surface2,surface3,surface4;
var edges;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
surface1=createSprite(300,600,150,50);
surface1.shapeColor='blue';
surface2=createSprite(500,600,150,50);
surface2.shapeColor='#ffcc00';
surface3=createSprite(100,600,150,50);
surface3.shapeColor='#b30047';
surface4=createSprite(700,600,150,50);
surface4.shapeColor='green';
box=createSprite(400,100,40,40);
box.shapeColor='white';
box.velocityX=-5;
box.velocityY=-5;
    //create 4 different surfaces



    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    //createEdgeSprite();
    edges = createEdgeSprites(); 
    box.bounceOff(edges);

 
drawSprites();

if(surface1.isTouching(box) && box.bounceOff(surface1)){
    box.shapeColor='blue';
    music.play();
}
if(surface3.isTouching(box) && box.bounceOff(surface3)){
    box.shapeColor='#b30047';
   
}
if(surface2.isTouching(box)&& box.collide(surface2)){
    box.shapeColor='#ffcc00';
    box.velocityX=0;
    music.stop();
}
if(surface4.isTouching(box)&&box.bounceOff(surface4)){
    box.shapeColor='green';
}
   
    //add condition to check if box touching surface and make it box
}
 