class Pig{
    constructor(x,y,width,height){
   var options={
   "restitution": 0.4,
   "friction" : 1.0,
   "density" : 0.6
   }
this.Body = Bodies.rectangle(x,y,width,height,options);
this.width = width;
this.height = height;

World.add(world,this.Body);
    }
    display() {
        var pos =this.Body.position;
        var angle = this.Body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill("green");
        rect(0, 0, this.width, this.height);
        pop();
    }
} 