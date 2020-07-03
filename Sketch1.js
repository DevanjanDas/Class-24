const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2;
var box3,box4,box5;
var pig1,pig2;
var bird;
var log1,log2,log3,log4;

function setup() {
    var canvas = createCanvas(1200,800);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(800,780,50,50);
    box2 = new Box(950,780,50,50);
    pig1 = new Pig(870,780,40,40);
    log1 = new Log(875,720,200,PI);
    box3 = new Box(800,680,50,50);
    box4 = new Box(950,680,50,50);
   pig2 = new Pig(870,680,40,40);
   log2 = new Log(875,650,200,PI);
    box5 = new Box(875,600,50,50);
   log3 = new Log(900,590,85,PI/5);
   log4 = new Log(830,590,85,-PI/5);
   bird = new Bird(400,400,50,50);
    ground = new Ground(600,height,1200,20);
    

}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();
    box3.display();
    box4.display();
    pig2.display();
    log2.display();
    box5.display();
    log3.display();
    log4.display();
    bird.display();
}