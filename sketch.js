
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball, body1, body2, body3, ground;

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball = new Paper(120,550);
	body1 = new Dustbin(1000,650,200,20);
	body2 = new Dustbin(913,602,20,85);
	body3 = new Dustbin(1087,602,20,85);
	ground = new Ground(600,670);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  keyPressed();
  
  ball.display();
  body1.display();
  body2.display();
  body3.display();
  ground.display();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball.body, ball.body.position, {x:1, y:-2.4});
	}
}



