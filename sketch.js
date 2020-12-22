const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var particals=[];
var plinkos=[];
var divisions=[];

var divisionHeight=300;
function setup() {
  createCanvas(480,800);
  engine=Engine.create();
  world=engine.world;

  mainGround=new Ground(250,720,500,10);
  for(var k=0;k<=width;k=k+80){
    divisions.push(new Divisions(k,height-divisionHeight/2,10,divisionHeight/2,10))
  }
  for(var j=15;j<=width;j=j+30){
     plinkos.push(new Plinkos(j,35,10));
  }
  for(var j=15;j<=width;j=j+30){
    plinkos.push(new Plinkos(j,85,10));
  }
  for(var j=15;j<=width;j=j+30){
    plinkos.push(new Plinkos(j,135,10));
  }
  for(var j=15;j<=width;j=j+30){
    plinkos.push(new Plinkos(j,185,10));
  }

}

function draw() {
  background(0);
  text(mouseX+","+mouseY,mouseX,mouseY);
  Engine.update(engine);
  push();
  fill("yellow")
  mainGround.display();
  pop();
  for(var k=0;k<divisions.length;k++){
    divisions[k].display();
  }
  for(var j=0;j<plinkos.length;j++){
    plinkos[j].display();
  }
  if(frameCount%60 === 0){
    particals.push(new Particals(random(20,width-20),0,5));
  }
  for(var j=0;j<particals.length;j++){
  particals[j].display();
  }
}