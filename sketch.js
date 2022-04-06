
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
var ground, wallRight, wallLeft;
function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//crear los cuerpos aquí.
var ball_options={
	isStatic:false,
	restitution:0.3,
	friction:0,
	density:1.2,
};

ball=Bodies.circle(100,10,20, ball_options);
World.add(world,ball);

	Engine.run(engine);
  

ground= new Ground(width/2,670,width,20);
wallRight= new Ground(1350,600,20,120);
wallLeft= new Ground(1100,600,20,120);
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 ground.display()
 wallRight.display()
 wallLeft.display()
 ellipse(ball.position.x,ball.position.y,40);
}



function keyPressed(){

	if(keyCode===UP_ARROW)
	{
		Matter.Body.applyForce(ball,ball.position,{x:90,y:-90})

	}

}