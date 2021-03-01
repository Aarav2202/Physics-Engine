const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies

var engine
var world
var ground
var ball

function setup() {
  createCanvas(800,400);
  engine=Engine.create()
  world=engine.world

  ground=Bodies.rectangle(400,400,800,20,{isStatic:true})
  World.add(world,ground)
  console.log(ground)

  ball=Bodies.circle(400,100,40,{restitution:0.7})
  World.add(world,ball)
}

function draw() {
  background(0);  
  Engine.update(engine)
  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,800,20)
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,40,40)
}