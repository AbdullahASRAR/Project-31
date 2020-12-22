class Particals{

  constructor(x,y,r){
      var options={
      restitution:0.4
    }
    this.x=x;
    this.y=y;
    this.r=r;
    this.body=Bodies.circle(x,y,r,options);
    this.color=color(random(80,255),random(80,255),random(80,255))
    World.add(world,this.body);
  }
  display(){
   var pos=this.body.position;
   var angle=this.body.angle;
   
   push();
   translate(pos.x,pos.y);
   rotate(angle);
   noStroke();
   fill(this.color);
   ellipseMode(RADIUS);
   strokeWeight(3);
   ellipse(0,0,this.r,this.r);
   pop();
  }
}