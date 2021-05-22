
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);








	

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
paper1=new paper(100,600,20);
ground1=new ground(400,680,800,20);
//left block
rbody1=new ground(550,620,20,100);
//right block
rbody2=new ground(610,660,100,20);
//lower block
rbody3=new ground(670,620,20,100);



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper1.display();
  ground1.display();
  rbody3.display();
  rbody2.display();
  rbody1.display();
  keypressed();
 
  drawSprites();
 
}


function keypressed() {
	if (keyCode===UP_ARROW) {
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:15,y:-1});;
		
	}
}
