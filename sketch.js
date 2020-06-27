const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var database;

var engine,world;

var hurdles = [];

var hurdlers = [];

var hurdler1,hurdle1,form,b1,b2,b3;

var gameState = 0;

function setup(){
  createCanvas(1500,500);

    database = firebase.database();

    var gameStateref=database.ref('gameState');
    gameStateref.on("value",function(data){
        gameState = data.val();
    });

    hurdler1 = new Hurdler(displayWidth/50,400,7,18);
    hurdlers.push(hurdler1);

    hurdle = new Hurdle();
    hurdles.push(hurdle);
    form = new Form();
    form.display();

    engine=Engine.create();
    world=engine.world;

    b1 = new Borders(750,250);
    
    b2 = new Borders(750,125);

    b3 = new Borders(750,375);

    hurdle1 = new Hurdle(495);

    Engine.run(engine);
}

function draw(){
    background("white");
    if(keyCode ===32){
        hurdler1.displayHurdler();
        b1.separatePlayers();
        b2.separatePlayers();
        b3.separatePlayers();
        hurdle1.displayHurdle();
        drawSprites();
  }
}