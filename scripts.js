let humanScore = 0;
let computerScore = 0;
let roundsPlayed = 0;

function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

function playRound(computerSelection, humanSelection) {
    const computer = computerSelection.toLowerCase();
    const human = humanSelection.toLowerCase();
    
    if (computer === human) {
        return "It's a tie!";
    }

    if (
        (computer === 'rock' && human === 'scissors') ||
        (computer === 'paper' && human === 'rock') ||
        (computer === 'scissors' && human === 'paper')
    ) {
        computerScore++;
        return `You lose! ${computerSelection} beats ${humanSelection}`;
    } else {
        humanScore++;
        return `You win! ${humanSelection} beats ${computerSelection}`;
    }
}

function updateScore() {
    document.querySelector('.humanScore').textContent = `Your score: ${humanScore}`;
    document.querySelector('.compScore').textContent = `Computer score: ${computerScore}`;
    document.querySelector('.rounds').textContent = `Rounds played: ${roundsPlayed}`;
}

function checkGameOver() {
    if (humanScore >= 5 || computerScore >= 5) {
        const winner = humanScore >= 5 ? "You" : "Computer";
        document.querySelector('.results').textContent = `Game Over! ${winner} won the game!`;
        
        // Disable buttons after game ends
        document.querySelectorAll('button').forEach(button => {
            button.disabled = true;
        });

        // Add reset button
        const resetBtn = document.createElement('button');
        resetBtn.textContent = 'Play Again';
        resetBtn.addEventListener('click', resetGame);
        document.querySelector('.results').appendChild(resetBtn);
        return true;
    }
    return false;
}

function resetGame() {
    humanScore = 0;
    computerScore = 0;
    roundsPlayed = 0;
    updateScore();
    document.querySelector('.results').textContent = '';
    document.querySelectorAll('button').forEach(button => {
        button.disabled = false;
    });
    document.querySelector('.currentWiner').textContent = 'Make your choice!';
}

function playGame() {
    document.querySelectorAll('button').forEach(button => {
        button.addEventListener('click', (e) => {
            if (humanScore >= 5 || computerScore >= 5) return;
            
            const humanChoice = e.target.textContent;
            const computerChoice = getComputerChoice();
            const result = playRound(computerChoice, humanChoice);
            
            document.querySelector('.currentWiner').textContent = result;
            roundsPlayed++;
            updateScore();
            checkGameOver();
        });
    });
}

// Initialize the game
playGame();