class Question {

  constructor() {
    this.title = createElement('h1')
    this.input1 = createInput("Enter Your Name Here....");
    this.input2 = createInput("Enter Correct Option No..");
    this.button = createButton('Submit');
    this.question = createElement('h3');
    this.option1 = createElement('h4');
    this.option2 = createElement('h4');
    this.option3 = createElement('h4');
    this.option4 = createElement('h4');
  }

  hide(){
    this.title.hide();
    this.input1.hide();
    this.button.hide();
    this.input2.hide();
  
  }

  getState(){
    var gameStateRef  = database.ref('GameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  display(){

    background("pink");
    this.title.html("MyQuiz Game");
    this.title.position(350, 0);

    this.question.html("Question:- What starts and ends with the letter ‘E’, but has only one letter? " );
    this.question.position(150, 80);
    this.option1.html("1: Everyone " );
    this.option1.position(150, 100);
    this.option2.html("2: Envelope" );
    this.option2.position(150, 120);
    this.option3.html("3: Estimate " );
    this.option3.position(150, 140);
    this.option4.html("4: Example" );
    this.option4.position(150, 160);

    this.input1.position(150, 230);
    this.input2.position(350, 230);
    this.button.position(290, 300);

    this.button.mousePressed(()=>{

      background("yellow");
      this.title.hide();
      this.input1.hide();
      this.input2.hide();
      this.button.hide();

      textSize(50);
      fill("black");
      text("Result Of Quiz", 300, 50);

      fill("blue");
      textSize(20);
      text("*Note: Contestant who answered correctly has been highlighted in green!!", 130, 230);
     
     
    gameState.update(1);
 
      contestant.name = this.input1.value();
      contestant.answer = this.input2.value();
      ContestentCount+=1;
      contestant.index = ContestentCount;
      contestant.update();
      contestant.updateCount(ContestentCount);
      
      contestant.getContestantInfo();

      for(var plr in allContestants){
        var correctAns = "2";
        if(correctAns===allContestants[plr].answer){
        fill("green")    
        }else{
          fill("red");
        }
        
      }

    });
  }
}
