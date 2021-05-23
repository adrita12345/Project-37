class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
   question.hide();
   background("yellow");
   this.title.html("Result Of Quiz");
   this.title.position(250, 20);


    contestant.getContestantInfo();


   if(allContestants !== undefined){
      fill("blue");
      textSize(20);
      text("Note: Contestant who answered correctly has been highlighted in green!!", 130, 230);
   }

  for(var plr in allContestants){
    var correctAns = "2";
    if(correctAns===allContestants[plr].answer){
    fill("green")    
    }else{
      fill("red");
    }
    
  }

  }}
