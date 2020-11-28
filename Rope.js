class Rope{

    constructor(bodyA,pointB){

        var options = {
            'bodyA': bodyA,
            'pointB': pointB,
            //'length': 320,
            'stiffness': 0.2
        }
       this.rope = Constraint.create(options) 
       this.bodyA = bodyA;
       this.pointB = pointB;
       World.add(world,this.rope);
    }

    display(){
     
        stroke(236,179,193);
        strokeWeight(8);
        line (this.rope.bodyA.position.x,this.rope.bodyA.position.y-20,this.rope.pointB.x,this.rope.pointB.y)
 
    }



}
