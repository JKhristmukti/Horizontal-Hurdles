class Borders{
    constructor(x,y){
        var options ={
            isStatic :true
        }
        this.body=Bodies.rectangle(x,y,1500,10,options);
        this.w=1500;
        this.h=10;
    }
    separatePlayers(){
        var pos=this.body.position;
        rectMode(CENTER);
        push();
        fill("black");
        rect(pos.x,pos.y,this.w,this.h);
    }
}