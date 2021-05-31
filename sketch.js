const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;


function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    ground1 = new ground(200,380,400,20)

   box1 = new Box(200,300,50,50)
   box2 = new Box(230,100,50,100)
    console.log(ground);
}

function draw(){
    background(0);
    Engine.update(engine);
   
    ground1.display()

   box1.display();
box2.display()
}