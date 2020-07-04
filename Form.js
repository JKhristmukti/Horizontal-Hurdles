class Form {

  constructor() {
    this.input = createInput("Name");
    this.button = createButton('Play');
    this.greeting = createElement('h2');
    this.reset = createButton('Reset');
  }

  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
  }

  display(){
    var title = createElement('h2')
    title.html("Hurdle Up!");
    title.position(displayWidth/4 - 50,0);

    this.input.position(displayWidth/2 - 40, displayHeight/2);
    this.button.position(displayWidth/2 + 30, displayHeight/2 + 20);

    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      hurdlers.name = this.input.value();
      this.greeting.html("Hello " + hurdlers.name + "Press SPACE to start");
      this.greeting.position(displayWidth/2 - 70, displayHeight/4);
    });

    this.reset.mousePressed(()=>{
        player.updateCount(0);
    })
  }
}
