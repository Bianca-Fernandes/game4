class Player{
    constructor(){
        this.name = null;
        this.rank = null;
        this.index = null;
        this.score = 0;
    }
    
left(){
    this.animation.changeAnimation("aniL", animationL);
}

right(){
    this.animation.changeAnimation("aniR", animationR);
}
getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value", (data)=>{
        playerCount = data.val();
    })
}

updateCount(count){
    database.ref('/').update({
        playerCount: count
    })  
}

update(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name:this.name,
      score: this.score
    });
}

getRank(){
    database.ref('rank').on("value", (data)=>{
      this.rank = data.val();
    });
}

static updateRank(rank){
    database.ref('/').update({
      rank: rank
    });
}

static getPlayerInfo(){
    var playerInfoRef = database.ref('players');
    playerInfoRef.on("value",(data)=>{
      allPlayers = data.val();
    })
}
}