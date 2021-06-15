const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var block1;
var block2;
var rotator1;
var rotator2;
var rotator3;
var angle1 = 60;
var angle2 = 60;
var angle3 = 60;
var particle1;
var particle2;
var particle3;
var particle4;
var particle5;

function preload()
{
	
}

function setup() {
	createCanvas(400, 400);


	engine = Engine.create();
	world = engine.world;

	var options = {
		isStatic: true
	}
	ground = Bodies.rectangle(200,395,400,10,options);

	World.add(world,ground);

	var block1_options = {
		isStatic: true
	}

	block1 = Bodies.rectangle(50,270,60,20,block1_options);

	World.add(world,block1);

	var block2_options = {

		isStatic: true

	}

	block2 = Bodies.rectangle(350,270,60,20,block2_options);

	World.add(world,block2);

	var rotator_options = {
		isStatic: true
	}

	rotator1 = Bodies.rectangle(200,150,150,20,rotator_options);
	World.add(world,rotator1);

	rotator2 = Bodies.rectangle(200,150,20,150,rotator_options);
	World.add(world,rotator2);

	rotator3 = Bodies.rectangle(200,150,20,150,rotator_options);
	World.add(world,rotator3);

	var particle_options = {
		restitution:0.4,
		friction:0.2
	}

	particle1 = Bodies.circle(220,10,15,particle_options);
	World.add(world,particle1);

	particle2 = Bodies.circle(200,10,15,particle_options);
	World.add(world,particle2);

	particle3 = Bodies.circle(240,10,15,particle_options);
	World.add(world,particle3);

	particle4 = Bodies.circle(160,10,15,particle_options);
	World.add(world,particle4);

	particle5 = Bodies.circle(180,10,15,particle_options);
	World.add(world,particle5);

	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background("green");
  
  rect(ground.position.x,ground.position.y,400,10);

  rect(block1.position.x,block1.position.y,60,20);

  rect(block2.position.x,block2.position.y,60,20);

  rect(rotator1.position.x,rotator1.position.y,150,20);

  rect(rotator2.position.x,rotator2.position.y,20,150);

  rect(rotator3.position.x,rotator3.position.y,20,150);

  ellipse(particle1.position.x,particle1.position.y,15);

  ellipse(particle2.position.x,particle2.position.y,15);

  ellipse(particle3.position.x,particle3.position.y,15);

  ellipse(particle4.position.x,particle4.position.y,15);

  ellipse(particle5.position.x,particle5.position.y,15);

  Matter.Body.rotate(rotator1,angle1)
  Push();
  translate(rotator1.position.x,rotator1.position.y);
  rotate(angle1);
  rect(0,0,150,20);
  pop();
  angle1 +=0.5;

  Matter.Body.rotate(rotator2,angle2)
  Push();
  translate(rotator2.position.x,rotator2.position.y);
  rotate(angle2);
  rect(0,0,150,20);
  pop();
  angle2 +=0.1;

  Matter.Body.rotate(rotator3,angle3)
  Push();
  translate(rotator3.position.x,rotator3.position.y);
  rotate(angle3);
  rect(0,0,150,20);
  pop();
  angle3 +=0.2;

  drawSprites();
 
  Engine.update(engine);
}



