//Project: Rock Paper Scissors
//Write the logic to get the computer choice
//Write the logic to get the human choice
//Declare the players score variables
//Write the logic to play a single round
//Write the logic to play the entire game

//computer choice
//function that randomly return one of the string values: “rock”, “paper” or “scissors”.
function getComputerChoice() {
   const choice = Math.floor(Math.random() * 3) + 1;

   if (choice === 1) {
    return "Rock"
   } else if (choice === 2) {
    return "Paper"
   } else {
    return "Scissors"
   }
}
 
//Function to get the human choice
function getHumanChoice() {
    const choice = prompt("Enter 1 for rock, 2 for paper, 3 for scissors: ");

    if (choice === '1') {
        return "Rock"
    }else if (choice === '2') {
        return "Paper"
    }else if (choice === '3') {
        return "Scissors"
    } else {
        return "incorrect input"
    }
}

//Variables to keep track of the players score

let humanScore = 0;
let computerScore = 0;

//The logic to play a single round //You lose! Paper beats Rock
function playRound(comp, human) {
    // Check for a tie first
    if (comp === human) {
        return "It's a tie!";
    }

    switch(true) {
        case (comp === "Rock" && human === "Scissors"):
            computerScore ++;
            return "You lose! Rock beats Scissors";        

        case (comp === "Paper" && human === "Rock"):
            computerScore ++;
            return "You lose! Paper beats Rock";

        case (comp === "Scissors" && human === "Paper"):
            computerScore ++;
            return "You lose! Scissors beats Paper";           

        case (comp === "Rock" && human === "Paper"):
            humanScore++;
            return "You win! Paper beats Rock";
        
        case (comp === "Paper" && human === "Scissors"):
            humanScore++;
            return "You win! Scissors beats Paper";

        case (comp === "Scissors" && human === "Rock"):
            humanScore++;
            return "You win! Rock beats Scissors";

        default:
            return "??? or incorrect input";
           
    }

}


// play the entire game 5 times

function playGame() {
    const computerSelection = getComputerChoice();
    const humanSelection = getHumanChoice();
    console.log(`The computer ${computerSelection} and The human ${humanSelection}`);
    console.log(playRound(computerSelection, humanSelection));
    console.log(`The human score is ${humanScore} and the computer is ${computerScore}`);
}

let round = 0;

for (round = 1; round < 6; round++) {
    
        playGame();
}

console.log("Game over");
console.log(`The round is ${round - 1}`);

if (humanScore === computerScore){
    console.log(`Your over all score is equal ${computerScore}, It is tie`);
}else if (humanScore > computerScore){
    console.log("your over all score is higher than computer score you win!");
}else {
    console.log("Computer wins, you loose!");
}