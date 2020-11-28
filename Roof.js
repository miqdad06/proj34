class Roof{

   constructor(x,y,width,height){
       var options = {
           isStatic: true
       }

       this.body = Bodies.rectangle(x,y,width,height,options);
       this.width = width;
       this.height = height;
       World.add(world,this.body)

   }

   display(){
       var pos = this.body.position
       fill(52,133,160);
       rectMode(CENTER);
       rect(pos.x,pos.y,this.width,this.height);
   }

}