
/*Go back to your “Rock Paper Scissors” game from a previous lesson and give it a simple UI so that the
player can play the game by clicking on buttons rather than typing their answer in a prompt.
Copy your original code into a new file so you don’t lose it.
For now, remove the logic that plays exactly five rounds.
Create three buttons, one for each selection.*/


//Add an event listener to the buttons that calls your playRound function with the
//correct playerSelection every time a button is clicked. (you can keep the console.logs for this step)

let playerScore = 0;
let compScore = 0;
let tieScore = 0;




/*Add a div for displaying results and change all of your console.logs into DOM methods.
Display the running score, and announce a winner of the game once one player reaches 5 points.
You will likely have to refactor (rework/rewrite) your original code to make it work for this. That’s OK! Reworking old code is an important part of the programmer’s life.
Don’t forget to go back and add your new version to the original Rock Paper Scissors Project! */
/*
    
    //3. Function called computerPlay that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’ 
    function computerPlay () {
        let randomNumber = Math.floor(Math.random() *3);
        
        if (randomNumber == 0) {
          return "rock";
        }
        
        else if (randomNumber == 1) {
           return "paper";
        
        }
        else
          return "scissors";
                  
      }
  
    //4. Write a function that plays a single round of Rock Paper Scissors
    let playerScore = 0;
    let compScore = 0;
    let tieScore = 0;
    function playRound (playerSelection,computerSelection) {
      if (playerSelection.toLowerCase ()== "rock") {
          if (computerSelection == "rock") {
            tieScore++;
            return "Tie!";            
          } 
          
          else if (computerSelection == "paper"){
            compScore++;
            return "You Lose! Paper beats Rock"
          } else {
            playerScore++;
            return "You Win! Rock beats Scissors"
            
          }
          
        }
        
      else if (playerSelection.toLowerCase () == "paper") {
          if (computerSelection == "rock") {
            playerScore++;
            return "You Win! Paper beats Rock";
          }
          else if (computerSelection == "paper") {
            tieScore++;
            return "Tie!";
            
          } else {
            compScore++;
            return "You Lose! Scissors beats Paper";
            
          }
        }
      
      else if (playerSelection.toLowerCase () == "scissors") {
        if (computerSelection == "rock") {
          compScore++;
          return "You Lose! Rock beats Scissors";
        }
        else if (computerSelection == "paper"){
          playerScore++;
          return "You Win! Scissors beats Rock";
        } else {
          tieScore++;
          return "Tie!";
            
          }

      } else {
        return alert("Try again!");
        
        }
        
      }


    //5. Write a NEW function called game().
    //Use the previous function inside of this one to play a 5 round game that
    //keeps score and reports a winner or loser at the end.
    
    function game () {
     
         
      for (let i = 0; i < 5; i++) {
        
        let playerSelection = prompt("What is your choice? \n Paper - Rock - Scissors");
        let computerSelection = computerPlay();
        console.log(playRound (playerSelection, computerSelection));
             
      }
    }
    game();
    // Feel free to create more “helper” functions if you think it would be useful.
    function finalScore (compScore,playerScore){
      
      if (compScore<playerScore){
        return  "Computer Score: "+compScore + " Your Score: " + playerScore + " Tie: " + tieScore +"\nYou won!";
      } else if (compScore>playerScore){
        return "Computer Score: "+compScore + " Your Score: " + playerScore + " Tie: " + tieScore +"\nYou lost!"; 
      }
      else{
        return "It's a tie!"
      }
    }
    finalScore();
    console.log(finalScore (compScore,playerScore));
    */