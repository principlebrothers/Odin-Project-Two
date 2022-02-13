
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
    let comWinArray = [];
    let playerWinArray = [];
    let drawArray = [];
    let invalidResult = [];

    let playTime = parseInt(prompt("Enter number of times to play: "))
    if(Number.isInteger(playTime)){
        for(let count = 0; count < playTime; count++){
            results = (playRound(computerPlay(), playerChoice()));
            if(results === "COMPUTER WIN! rock beats scissors" || results === "COMPUTER WIN! scissors beats paper" || results === "COMPUTER WIN! paper beats rock"){
                comWinArray.push(results);
            }
            else if(results === "YOU WIN! rock beats scissors" || results === "YOU WIN! scissors beats paper" || results === "YOU WIN! paper beats rock"){
                playerWinArray.push(results);
            }
            else if(results === "TIE"){
                drawArray.push(results);
            }else{invalidResult.push(results)}
        }

        console.log(`Invalid entry ${invalidResult.length}`);
        console.log(`You win ${playerWinArray.length}`);
        console.log(`Computer Win ${comWinArray.length}`);
        console.log(`Draw ${drawArray.length}`);
        

        if(comWinArray.length > playerWinArray.length || comWinArray.length === playTime){
            console.log("\t\t***COMPUTER WIN***");
        }else if(playerWinArray.length > comWinArray.length || playerWinArray.length === playTime){
            console.log("\t\t***YOU WIN***");
        }else if(drawArray.length > comWinArray.length && drawArray.length > playerWinArray.length || drawArray.length === comWinArray.length && drawArray.length === playerWinArray.length || drawArray.length === playTime){
            console.log("\t\t***IT A DRAW GAME***");
        }else if(invalidResult.length > comWinArray.length && invalidResult.length >playerWinArray.length ||invalidResult.length === playTime){console.log("\t\t***INVALID INPUTS***");}


    }else{ return "ENTRY IS NOT A NUMBER";}
    
}

console.log(game());

