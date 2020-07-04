class Player{
    constructor(){
        this.name = null;
        this.distance = 0;
    }

    getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",(data)=>{
      playerCount = data.val();
    })
    }

    updateCount(count){
        database.ref('/').update({
          playerCount: count
        });
    }
    
    update(state){
        database.ref('/').update({
          gameState: state
        });
    }

    static getPlayerInfo(){
      var playerInfoRef = database.ref('players');
      playerInfoRef.on("value",(data)=>{
        allPlayers = data.val();
      })
    }
    

    update(){
        var playerIndex = "players/player" + this.index;
        database.ref(playerIndex).set({
            name: this.name
        });
    }

    run(){
        if(keyIsDown(RIGHT_ARROW)){
            this.distance+=20;
        }
    }

    jump(){
        if(keyIsDown(UP_ARROW)){
            
        }
    }
}