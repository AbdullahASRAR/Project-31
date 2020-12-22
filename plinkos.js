class Plinkos{
    constructor(x,y,r){
        var options={
            isStatic:true
        }
        this.x=x;
        this.y=y;
        this.r=r;
        this.body=Bodies.circle(this.x,this.y,r,options);
        World.add(world,this.body)
    }
    display(){
        var plinkosPos=this.body.position;
        push();
        translate(plinkosPos.x,plinkosPos.y);
        ellipseMode(CENTER);
        strokeWeight(3);
        fill("white");
        ellipse(0,0,this.r,this.r);
        pop();
    }
}