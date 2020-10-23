class Bob  {

    constructor(x,y,r) {
    
    var options={
        isStatic:false,
        restitution:0.3,
        friction:0.5  
    
    }
    this.x=x
    this.y=y
    this.radius=r
    this.body=Bodies.circle(this.x, this.y, this.radius , options)
    World.add(world, this.body)
    }
    
    display(){
        var pos=this.body.position
        push();
        ellipseMode(RADIUS)
        fill("green")
        ellipse(pos.x,pos.y,this.radius,this.radius)
        pop();        

    }
}