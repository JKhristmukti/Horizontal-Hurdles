class Hurdler{
    constructor(x,y,width,height){
        this.x=x;
        this.y=y;
        this.width=10;
        this.height=20;
    }

    displayHurdler(){
        this.sprite = createSprite(this.x,this.y,this.width,this.height);
        this.sprite.speedX=3;
        this.sprite.speedY=0.02;
        form.hide();
    }

    update(state){
        database.ref('/').update({
          gameState: state
        });
    }
}