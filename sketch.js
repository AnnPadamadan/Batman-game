const Engine = Matter.Engine;
 const World = Matter.World;
 //const Events = Matter.Events;
const  Bodies = Matter.Bodies;

var person;
var maxDrops = 100
var drop;
var lighting;
var light;
function preload(){
    light = loadImage("1.png");
    light1 = loadImage("2.png");
    light2 = loadImage("3.png");
    light3 = loadImage("4.png");
}

function setup(){
  createCanvas(400, 800);
  engine = Engine.create();
  world = engine.world;
  
 
   person = new Umbrella(200, 700, 200);
}

function draw(){
  Engine.update(engine);
  background("gray");
 for(var i  = 0; i<maxDrops;i++ ){
   drop =  new Drops(random(1, 400), random(1, 400));
   
 }
 storm();

drop.display();
person.display();

drawSprites();
}   


function storm(){
  var lightning;
  lightning = createSprite(200, 100, 10, 10);
  lightning.addImage(light3);

  
if(frameCount%10!==0){
 

  lightning.visible = false;
  
  var l = Math.round(random(1, 5));
  console.log(l);
  switch(l){
    case 1: lightning.addImage(light);
    break;
    case 2: lightning.addImage(light1);
    break;
    case 3: lightning.addImage(light2);
    break;
    case 4: lightning.addImage(light3);
    break;
    case 5: lightning.addImage(light3);
    break;
   
  
    default: break;
 }}
else if(frameCount%10===0){
lightning.visible = true;
}


}





 
