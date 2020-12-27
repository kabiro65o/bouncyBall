const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var myengine,myworld;
var ground,ball;


function setup() {
  createCanvas(400,400);
  myengine = Engine.create();
  //my world is my engine's world
  myworld =myengine.world;

  Engine.run(myengine);
  var ground_options={
   isStatic : true
 }
  ground = Bodies.rectangle(200,390,400,30,ground_options);
  World.add(myworld,ground); 
  console.log(ground);

  var ball_options={
    restitution : 0.8
  }
  ball = Bodies.circle(200,100,20,ball_options);
  World.add(myworld,ball);
  console.log(ball);
}

function draw() {
  background(255,255,255);  
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,30);
  
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20)
console.log(ball.position.y);
}