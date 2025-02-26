function playGame() {
    let winnerTxt = document.querySelector(".winner");

    let humanScore = 0;
    let computerScore = 0;
    
    // Gets the computer choice with the Math.random() func
    function getComputerChoice() {
        let choice = Math.floor(Math.random() * 3) + 1;
    
        if (choice === 1) {
            return "Paper";
        } else if (choice === 2) {
            return "Rock";
        } else {
            return "Scissors";
        }
    }
    
    // Gets the player choice with a prompt
    function getHumanChoice() {
        let choice = prompt("Rock, Paper, Scissors!");
    
        return choice;
    }

    function playRound(humanChoice, computerChoice) {
        // Check if the game was a tie and return no points
        if (computerChoice === humanChoice) {
            console.log("It's a tie!");
            return {humanScore, computerScore};
        }

        // Check if the computer wins if so return it as a object with
        // one more point
        if (computerChoice === "paper" && humanChoice === "rock") {
            console.log("You lose! Paper beats Rock");
            return {humanScore, computerScore: computerScore + 1};
        } else if (computerChoice === "scissors" && humanChoice === "paper") {
            console.log("You lose! Scissors beats Paper");
            return {humanScore, computerScore: computerScore + 1};
        } else if (computerChoice === "rock" && humanChoice === "scissors") {
            console.log("You lose! Rock beats Scissors");
            return {humanScore, computerScore: computerScore + 1};
        }
    
        // Check if the human wins if so return it as a object with
        // one more point
        if (humanChoice === "paper" && computerChoice === "rock") {
            console.log("You win! Paper beats Rock");
            return {humanScore: humanScore + 1, computerScore};
        } else if (humanChoice === "scissors" && computerChoice === "paper") {
            console.log("You win! Scissors beats Paper");
            return {humanScore: humanScore + 1, computerScore};
        } else if (humanChoice === "rock" && computerChoice === "scissors") {
            console.log("You win! Rock beats Scissors");
            return {humanScore: humanScore + 1, computerScore};
        }
    }

    // This repeats the game for 5 rounds
    for (let i = 0; i < 5; i++) {
        let computerChoice = getComputerChoice().toLowerCase();
        let humanChoice = getHumanChoice().toLowerCase();

        let result = playRound(humanChoice, computerChoice);
        humanScore = result.humanScore;
        computerScore = result.computerScore;

        console.log(`Round ${i + 1}: Human ${humanScore} - Computer ${computerScore}w`);
    }
    
    // Check who has the most points at the end of the game
    if (humanScore > computerScore) {
        console.log("Human Wins!");
        winnerTxt.textContent = "Human Wins!";
    } else if (computerScore > humanScore) {
        console.log("Computer Wins!");
        winnerTxt.textContent = "Computer Wins!";
    } else {
        console.log("It's a tie!");
        winnerTxt.textContent = "It's a tie!";
    }
}

playGame();
