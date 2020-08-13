class Dustbin{
    constructor(x,y,width,height){
    var options={
    isStatic:true
    }
    this.body=Bodies.rectangle(x,y,width,height,options);
    this.x=x
    this.y=y
    this.height=height
    this.width=width
    
    World.add(world,this.body);
    }
    display(){
        push();
        translate(this.body.position.x,this.body.position.y)
        rotate(this.body.angle)
        rectMode(CENTER);
        rect(0,0,this.width,this.height)
        pop();
    }
    }