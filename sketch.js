
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bob1 = new Bob (350,500,50)
	roof1 = new Roof (350,25,1600,50) 
	rope1 = new Rope (roof1.body,bob1.body)

	bob2 = new Bob (450,500,50)
	roof2 = new Roof (450,25,1600,50) 
	rope2 = new Rope (roof2.body,bob2.body)

	bob3 = new Bob (550,500,50)
	roof3 = new Roof (550,25,1600,50) 
	rope3 = new Rope (roof3.body,bob3.body)

	bob4 = new Bob (650,500,50)
	roof4 = new Roof (650,25,1600,50) 
	rope4 = new Rope (roof4.body,bob4.body)

	bob5 = new Bob (750,500,50)
	roof5 = new Roof (750,25,1600,50) 
	rope5 = new Rope (roof5.body,bob5.body)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);

  bob1.display()
  roof1.display()
  rope1.display()

  bob2.display()
  roof2.display()
  rope2.display()

  bob3.display()
  roof3.display()
  rope3.display()

  bob4.display()
  roof4.display()
  rope4.display()

  bob5.display()
  roof5.display()
  rope5.display()

  drawSprites();
 
}

function keyPressed(){ 
if(keyCode === UP_ARROW){
 Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-5,y:-5}) 
}
}
