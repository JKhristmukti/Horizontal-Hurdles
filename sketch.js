const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var database;

var engine,world;

var hurdles = [];

var hurdlers = [];

var distance = 0;
var gameState = 0;

var hurdler1,hurdler2,hurdle1,hurdle2,hurdle3,hurdle4,form,b1,b2,b3;

var player;

function setup(){
  createCanvas(1500,500);

    database = firebase.database();

    player = new Player();

    var gameStateref=database.ref('gameState');
    gameStateref.on("value",function(data){
        gameState = data.val();
    });

    hurdler1 = new Hurdler(50,115);
    hurdlers.push(hurdler1);

    hurdler2 = new Hurdler(50,240);
    hurdlers.push(hurdler2);

    hurdler3 = new Hurdler(50,365);
    hurdlers.push(hurdler3);

    hurdler4 = new Hurdler(50,490);
    hurdlers.push(hurdler4);

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

    hurdle2 = new Hurdle(370);

    hurdle3 = new Hurdle(245);

    hurdle4 = new Hurdle(120);

    Engine.run(engine);
}

function draw(){
    background("white");

    if(keyCode ===32 && playerCount === 4){    
        hurdler1.displayHurdler();
        hurdler2.displayHurdler();
        hurdler3.displayHurdler();
        hurdler4.displayHurdler();

        hurdler1.gravity();
        hurdler2.gravity();
        hurdler3.gravity();
        hurdler4.gravity();

        b1.separatePlayers();
        b2.separatePlayers();
        b3.separatePlayers();

        hurdle1.displayHurdle();
        hurdle2.displayHurdle();
        hurdle3.displayHurdle();
        hurdle4.displayHurdle();

        hurdler1.update(1);
        hurdler2.update(1);
        hurdler3.update(1);
        hurdler4.update(1);
         
    Player.getPlayerInfo();

    if(allPlayers !== undefined){
        var index = 0;

        var x;
        var y = 115;

        for(var plr in allPlayers){
            index = index + 1;
            
            y = y + 125;

            x = displayWidth - allPlayers[plr].distance;
            cars[index-1].x = x;
            cars[index-1].y = y;
            
            if(index === player.index){
                hurdlers[index - 1].shapeColor = "blue";
                camera.position.x = cars[index-1].x;
                camera.position.y = displayHeight/2;
            }
        }
    }

        drawSprites();
    
  }
}

function getState(){
  var gameStateRef  = database.ref('gameState');
  gameStateRef.on("value",function(data){
     gameState = data.val();
  })
}

async function start(){
  if(gameState === 0){
    var playerCountRef = await database.ref('playerCount').once("value");
  if(playerCountRef.exists()){
    playerCount = playerCountRef.val();
    player.getCount();
  }
  form = new Form()
  form.display();
  
}
}