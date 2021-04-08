const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground ;
var engine ;

function setup(){
createCanvas(1200,600);
engine=Engine.create();
world=engine.world;

ground = new Ground(600,550,1200,20);
block1 = new Block(700,100,50,50);
block2 = new Block(700,100,50,50);
block3 = new Block(700,100,50,50);
block4 = new Block(700,100,50,50);
block5 = new Block(700,100,50,50);
block6 = new Block(700,100,50,50);
block7 = new Block(700,100,50,50);
block8 = new Block(700,100,50,50);
block9 = new Block(700,100,50,50);

block11 = new Block(800,100,50,50);
block12 = new Block(800,100,50,50);
block13 = new Block(800,100,50,50);
block14 = new Block(800,100,50,50);
block15 = new Block(800,100,50,50);
block16 = new Block(800,100,50,50);
block17 = new Block(800,100,50,50);

block21 = new Block(900,100,50,50);
block22 = new Block(900,100,50,50);
block23 = new Block(900,100,50,50);
block24 = new Block(900,100,50,50);
block25 = new Block(900,100,50,50);
block26 = new Block(900,100,50,50);
block27 = new Block(900,100,50,50);
block28 = new Block(900,100,50,50);

ball = new Ball(200,200,20,20);

rope = new Rope(ball.body,{x:400,y:100});

console.log(block1);
}

function draw(){
Engine.update(engine);
background("white");
ground.display();
block1.display();
block2.display();
block3.display();
block4.display();
block5.display();
block6.display();
block7.display();
block8.display();
block9.display();
block11.display();
block12.display();
block13.display();
block14.display();
block15.display();
block16.display();
block17.display();
block21.display();
block22.display();
block23.display();
block24.display();
block25.display();
block26.display();
block27.display();
block28.display();
ball.display();
rope.display();
}