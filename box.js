class Box{
    constructor(x,y,w,h){
     var options={
         isStatic:true,
         density:1,
         friction:0
     }
     this.body=Bodies.rectangle(x,y,w,h,options)
     this.width=w;
     this.height=h;
     World.add(world,this.body);
    }
   
    display(){
     var pos=this.body.position;
     var angle=this.body.angle;
     //var width=this.width;
     //var height=this.height;
     push();
     translate(pos.x,pos.y);
     rotate(angle);
     rectMode(CENTER);
     fill("white");
     rect(0,0,this.width,this.height);
     pop();
    }
   
   }