let computerChoice = getComputerChoice();
let humanChoice = getHumanChoice();

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

function getHumanChoice() {
    let choice = prompt("Rock, Paper, Scissors!");

    return choice;
}