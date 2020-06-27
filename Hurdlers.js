class Hurdler{
    constructor(x,y,width,height){
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
    }

    displayHurdler(){
        this.sprite = createSprite(this.x,this.y,this.width,height);
        form.hide();
    }

    update(state){
        database.ref('/').update({
          gameState: state
        });
      }
}