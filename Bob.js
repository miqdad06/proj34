class Bob {

constructor (x,y,radius){

    var options = {
        // 'isStatic': true,
        //'restitution': 0.3,
        'friction': 0.1,
        'density': 0.450

    }

    this.body = Bodies.circle(x,y,radius,options);
    this.radius = radius;
    World.add(world,this.body);
  
}


 

display(){

    fill(198,234,230);
    ellipseMode(RADIUS);
    ellipse(this.body.position.x,this.body.position.y,this.radius,this.radius);

}

}