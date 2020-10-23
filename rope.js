class Rope{

constructor(Body_A,Body_B){

var options= {

    bodyA:Body_A,
    bodyB:Body_B,
    stiffness:0.04
}

this.rope=Constraint.create(options)
World.add(world,this.rope)


}
display(){

var point_A=this.rope.bodyA.position
var point_B=this.rope.bodyB.position
push();
strokeWeight(10)
line(point_A.x,point_A.y,point_B.x,point_B.y)
pop();

}

}