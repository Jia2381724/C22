const Engine=Matter.Engine; 
const World= Matter.World;
 const Bodies= Matter.Bodies

var engine, world, ground, ball
 function setup() {
createCanvas(400,400);
engine = Engine.create();
world = engine.world;

ground = Bodies.rectangle();

var ground_options = {isStatic : true};

ground = Bodies.rectangle(0,390,800,20,ground_options);

World.add(world, ground);
var ball_options = {
  restitution:1.0 
}
ball = Bodies.circle(200,100,20,ball_options);
World.add(world,ball);
 }

 function draw() {
   background("black");
Engine.update(engine);
rectMode(CENTER)
ellipseMode(RADIUS)
rect(ground.position.x , ground.position.y, 800,20);
ellipse(ball.position.x, ball.position.y, 20,20);


 }

 