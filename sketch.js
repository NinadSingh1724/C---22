const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;

var engine, world, ground;
var ball;

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;

  var options = {
    isStatic: true
  }

  ground = Bodies.rectangle(200,390,400,20,options);
  World.add(world, ground);

  var ballOptions = {
    restitution : 1
  } 
  
  ball = Bodies.circle(200,100,20,ballOptions);
  World.add(world, ball);

  console.log(ground);
  console.log(ground.position.x);
}

function draw() {
  background(0);  
  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20);

  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20);

}