class Player{
    constructor(){
        this.index = null;
        this.distance = 0;
        this.name = null;
        this.pos = null;
    }

    getCount(){
        var playerCountRef = database.ref('playerCount');
        playerCountRef.on("value",(data)=>{
            playerCount = data.val();
        });
    }

    updateCount(count){
        database.ref('/').update({
            playerCount : count
        });
    }

    update(){
        var playerIndex = "players/player" + this.index;
        database.ref(playerIndex).set({
            name: this.name,
            distance: this.distance
        });
    }

    static getPlayerInfo(){
        var playerInfoRef = database.ref('players');
        playersInfoRef.on("value", (data)=>{
            allPlayers = data.val();
        })
        
    }

    runnerRank(){
        database.ref('RunnersAtEnd').on("value", (data)=>{
            this.rank = data.val();
        })
    }

    static updateRunnerRank(rank){
        database.ref('/').update({
            RunnersAtEnd: rank
        })
    }

}