const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight = 300;

function setup() {
  createCanvas(800,800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);
  for(var k = 0;k<=width;k=k+80){
  divisions.push(new Division(k,height-divisionHeight/2,10,divisionHeight));
  }

  for(var k = 75;k<=width;k=k+50){
  plinkos.push(new Plinko(k,75));
    }

    for(var k = 50;k<=width-10;k=k+50){
    plinkos.push(new Plinko(k,175));
      }

      for(var k = 75;k<=width;k=k+50){
        plinkos.push(new Plinko(k,275));
          }

          for(var k = 375;k<=width-10;k=k+50){
            plinkos.push(new Plinko(k,175));
              }
        
  
}

function draw() {
  background(0);  
  Engine.update(engine);
  ground.display();
  for(var i = 0; i<plinkos.length;i++){
    plinkos[i].display();
  }
  if(frameCount%60==0){
    particles.push(new Particle(random(width/2-30,width/2+30),10,10));
  }
  for(var i = 0 ;i<particles.length;i++){
  particles[i].display();
  }
  for(var i = 0 ;i<divisions.length;i++){
    divisions[i].display();
    }
}