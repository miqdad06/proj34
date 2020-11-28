
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;
var roof;
var rope1, rope2, rope3, rope4, rope5;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	bobObject1 = new Bob(130,520,40);
	bobObject2 = new Bob(210,520,40);
	bobObject3 = new Bob(290,520,40);
	bobObject4 = new Bob(370,520,40);
	bobObject5 = new Bob(450,520,40);

	roof = new Roof(290,200,400,10);

	rope1 = new Rope(bobObject1.body,{x:130, y:200});
	rope2 = new Rope(bobObject2.body,{x:210, y:200});
	rope3 = new Rope(bobObject3.body,{x:290, y:200});
	rope4 = new Rope(bobObject4.body,{x:370, y:200});
	rope5 = new Rope(bobObject5.body,{x:450, y:200});

	Engine.run(engine);
  
}


function draw() {
  Engine.update(engine);
  background(0);
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

  roof.display();

  

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
 
		Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-200,y:-225});
//	 Matter.Body.setStatic(rope2,{X:210,Y:200}, true)
   
	  }

	  if(keyCode === DOWN_ARROW){
 
		Matter.Body.applyForce(bobObject5.body,bobObject5.body.position,{x:200,y:-225});
//	 Matter.Body.setStatic(rope2,{X:210,Y:200}, true)
   
	  }
}



