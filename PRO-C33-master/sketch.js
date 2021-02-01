var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 var ground1;
 var ground2;
 var ground3;
 var ground4;
 var ground5;
 var ground6;
 var ground7;
 var ground8;
 var ground9;
var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight=00;
var score =0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

  ground1= new Ground(80,780,10,650);
  ground2= new Ground(160,780,10,650);
  ground3= new Ground(240,780,10,650);
  ground4= new Ground(320,780,10,650);
  ground5= new Ground(400,780,10,650);
  ground6= new Ground(480,780,10,650);
  ground7= new Ground(560,780,10,650);
  ground8= new Ground(640,780,10,650);
  ground9= new Ground(720,780,10,650);
  


  


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
  fill(random(255),random(255),random(255))
text("Score : "+score,20,30);
  Engine.update(engine);
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   if(frameCount%60===0){
     particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
     score+1;
   }
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
  
  ground.display();
 ground1.display();
 ground2.display();
 ground3.display();
 ground4.display();
 ground5.display();
 ground6.display();
 ground7.display();
 ground8.display();
 ground9.display();
}
function mousePressed(){

}