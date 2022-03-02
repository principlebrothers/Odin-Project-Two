const buttons = document.querySelectorAll('button');
const comOutput = document.getElementById('comOutput');
let playerOut = document.getElementById('playerOutput');
let youWin = document.getElementById('youWin');
let draw = document.getElementById('draw');
let comWin = document.getElementById('comWin');
let explainedOutput = document.getElementById('explained_output');
let overallWinner = document.getElementById('overallWinner');
let gameRoundDisplay = document.querySelector('.gameRounds');
let playerChoice;
let comOption;
let declareResult;
let results = "";
let comWinArray = [];
let playerWinArray = [];
let drawArray = [];
let count = 0;
let resultLimit = 5;



buttons.forEach((button)=>{
  button.addEventListener('click',(e)=>{
    playerChoice = button.id // is the same as e.target.id
    playerOut.textContent = `YOUR CHOICE: ${playerChoice}`;
    count++
    gameRoundDisplay.textContent =`ROUND: ${count}`
    computerPlay();
    //playRound(comOption, playerChoice)
    game();
    
  });
});

//Computer player algorithm
function computerPlay(){
    const guess = Math.floor(Math.random()*10)+1;
    let finalAnswer = guess % 3;
    if(finalAnswer > 1){
        comOption = "rock"; 
    }else if(finalAnswer === 1){
        comOption = "paper";
    }else if(finalAnswer < 1){
        comOption = "scissors";
    }
   comOutput.textContent = `COMPUTER'S CHOICE: ${comOption}`; 
}

// //Rounds count
// function countUp(){
//     count.textContent++;
// }

//Single round function
function playRound(comOption, playerChoice){
    const computerWin = `COMPUTER WIN: ${comOption} beats ${playerChoice}`;
    const youWin = `YOU WIN: ${playerChoice} beats ${comOption}`;
    
    if(playerChoice == "scissors" && comOption == "paper"){
        declareResult = youWin;
    }
    else if(playerChoice =="paper" && comOption == "rock"){
        declareResult = youWin;
    }
    else if(playerChoice =="rock" && comOption == "scissors"){
    
        declareResult = youWin;
    }
    else if(comOption == "paper" && playerChoice == "rock"){
    
        declareResult = computerWin;
    }
    else if(comOption == "scissors" && playerChoice == "paper"){
            declareResult = computerWin;
    }
    else if(comOption == "rock" && playerChoice == "scissors"){
            declareResult = computerWin;
    }
    else if(comOption === playerChoice){
            declareResult = `TIE`;
    }
    
    explainedOutput.textContent = declareResult;
    return declareResult;
}

// Function for result display
function game(){
    
    if(comWinArray.length !== resultLimit || playerWinArray.length !== resultLimit || drawArray.length !== resultLimit){
        results = playRound(comOption, playerChoice);
        if(results === "COMPUTER WIN: rock beats scissors" || results === "COMPUTER WIN: scissors beats paper" || results === "COMPUTER WIN: paper beats rock"){
            comWinArray.push(results);
        }
        else if(results === "YOU WIN: rock beats scissors" || results === "YOU WIN: scissors beats paper" || results === "YOU WIN: paper beats rock"){
            playerWinArray.push(results);
        }
        else if(results === "TIE"){
            drawArray.push(results);
        }
    }
    if(comWinArray.length === resultLimit){
        overallWinner.textContent = 'COMPUTER WIN';
    }
    if(playerWinArray.length === resultLimit){
        overallWinner.textContent = 'YOU WIN';
    }   
    if(drawArray.length === resultLimit){
        overallWinner.textContent = 'DRAW GAME';
    }
    //console.log(`Invalid entry ${invalidResult.length}`);
    youWin.textContent = `YOUR SCORE: ${playerWinArray.length}`;
    draw.textContent = `DRAW: ${drawArray.length}`;
    comWin.textContent = `COMPUTER SCORE: ${comWinArray.length}`
    
}



 