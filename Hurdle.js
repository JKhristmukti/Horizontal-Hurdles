class Hurdle{
    constructor(y){
        for (let i = 80; i < 1500; i + 50) {
            var options ={
                isStatic :true
            }
            this.body=Bodies.rectangle(i,y,15,10,options);
            this.w=15;
            this.h=10;
        }
    }
    displayHurdle(){
        var pos=this.body.position;
        rectMode(CENTER);
        push();
        fill("black");
        rect(pos.x,pos.y,this.w,this.h);
    }
}