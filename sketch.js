
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;

var paper;
var dustbin1,dustbin2,dustbin3;
var ground;

function preload()
{
	
}

function setup() {
  createCanvas(800, 700);
  
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  ground = new Ground(400,height,800,20);
  dustbin1 = new Dustbin(490,620,20,100);
  dustbin2 = new Dustbin(320,620,20,100);
  dustbin3 = new Dustbin(405,660,150,20);
  paper = new Paper(50,600,20,20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);

  ground.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  paper.display();
 
}

function keyPressed(){
  if (keyCode === UP_ARROW){
    Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
  }
}



