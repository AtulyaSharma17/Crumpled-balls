
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject,crumpledPaper	
var world;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(950,650);
	crumpledPaper = new Paper(200,500);

	Engine.run(engine);
  
}
//this might be my best project 😳

function draw() {
  rectMode(CENTER);
  background(230);
 

  groundObject.display();
  dustbinObj.display();
  crumpledPaper.display();


  drawSprites();
}



function keyPressed(){
    if(keyCode === UP_ARROW){
        Matter.Body.applyForce(crumpledPaper.body,crumpledPaper.body.position,{x:74,y:-75});
    }
}
