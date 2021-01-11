
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var box1,box2,box3,stone,sling

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    box1=new Box(200,340);
    box2=new Box2(300,240);
	box3=new Boy(100,305);
	stone=new Stone(75,330);
	
	sling = new SlingShot(stone.body,{x:100,y:305});
	
	Engine.run(engine);

  
}


function draw() {
 background(220);
 Engine.update(engine)

 box1.display();
 box2.display();
 box3.display();
 stone.display();
}

function keyPressed(){
  if (keyCode === UP_ARROW) {

    Matter.Body.applyForce(stone.body,stone.body.position,{x:35,y:-25})
	fly();
	Matter.body.setStatic(stone.body,true);
	Matter.Body.setPosition(stone.body,{x:200,y:340})
	
	 }
}



