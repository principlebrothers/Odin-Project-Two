
//Computer player argorithm
function computerPlay(){
    let comOption = "";
    const guess = Math.floor(Math.random()*10)+1;
    let finalAnswer = guess % 3;
    if(finalAnswer > 1){
        comOption = "rock"; 
    }else if(finalAnswer === 1){
        comOption = "paper";
    }else if(finalAnswer < 1){
        comOption = "scissors";
    }
    return comOption;
}

function playerChoice() {
    let moveList = ['rock', 'paper', 'scissors']
    let choice;
    let move = prompt("What do you move? (i.e. rock, paper or scissors)").toLowerCase();
    if (moveList.indexOf(move) != -1){
      choice = move;
    }else{choice = "Invalid Input"}
    return choice;
}

//Single round function
function playRound(comOption, playerChoice){
    let declareResult;
    let computerWin = `COMPUTER WIN! ${comOption} beats ${playerChoice}`;
    let youWin = `YOU WIN! ${playerChoice} beats ${comOption}`;
    
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
    else{
        declareResult = `INVALID INPUT`
    }
    
    return declareResult;
    
}

function game(){
    let results = "";
    let resultsArray = [];
    resultsArray.sort();

    let playTime = parseInt(prompt("Enter number of times to play: "))
    if(Number.isInteger(playTime)){
        for(let count = 0; count < playTime; count++){
            results = (playRound(computerPlay(), playerChoice()));
            resultsArray.push(results)
        }
        //return resultsArray;

        let map = resultsArray.reduce(function(prev, cur) {
            prev[cur] = (prev[cur] || 0) + 1;
            return prev;
          }, {});
          
          // map is an associative array mapping the elements to their frequency:
          return map;

    }else{ return "ENTRY IS NOT A NUMBER";}
    
}

console.log(game());

