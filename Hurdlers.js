class Hurdler{
    constructor(x,y){
        this.x=x;
        this.y=y;
        this.width=10;
        this.height=20;
    }

    displayHurdler(){
        this.sprite = createSprite(this.x,this.y,this.width,this.height);
        this.sprite.velocity.x=2;
        form.hide();
    }

    update(state){
        database.ref('/').update({
          gameState: state
        });
    }

    gravity(){
        if(this.sprite.y >= this.y){
            this.sprite.velocity.y=0;
        }
        else{
            this.sprite.velocity.y=0.08;
        }
    }
}