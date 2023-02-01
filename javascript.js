

function getComputerChoice() {
    const compChoice = Math.floor(Math.random() * 3);
    if (compChoice === 0) {
        return "Rock";
    } else if (compChoice === 1) {
        return "Paper";
    }
    else {
        return "Scissors";
    }

}


/* Create a single round of Roock, Paper, Scissors */
/* 
Create a variable playerSelection
Create a variable computerSelection
Request player input and store it in variable playerSelection
Computer input is random

if player == rock and computer == rock, print "its a TIE"
else if player == rock and computer == scissors, print "You WIN"
else if player == rock and computer == paper, print "You LOOSE"
else if player == scissors and computer == rock, print "You LOOSE"
else if player == scissors and computer == scissors, print "its a TIE"
else if player == scissors and computer == paper, print "you WIN"
else if player == paper and computer == rock, print "you WIN"
else if player == paper and computer == scissors, print "you LOOSE"
else if player == paper and computer == paper, print "its a TIE"
else print "Wrong input, you probably made a spelling mistake"
*/

const computerSelection = getComputerChoice();
const playerSelection = prompt("What is your choice? (Rock, Paper or Scissors").toLowerCase();

function gameRound(playerSelection, computerSelection) {
    if (playerSelection == "rock" && computerSelection === "Rock") {
        return "Its a TIE!";
    }   else if (playerSelection == "rock" && computerSelection === "Scissors") {
            return "You WIN! Rock beats Scissors.";
    }   else if (playerSelection == "rock" && computerSelection === "Paper") {
            return "You LOOSE! Paper beats Rock.";
    }   else if (playerSelection == "scissors" && computerSelection === "Rock") {
            return "You LOOSE! Rock beats Scissors.";
    }   else if (playerSelection == "scissors" && computerSelection === "Scissors") {
            return "Its a TIE!";
    }   else if (playerSelection == "scissors" && computerSelection === "Paper") {
            return "You WIN! Scissors beat Paper.";
    }   else if (playerSelection == "paper" && computerSelection === "Rock") {
        return "You WIN! Paper beat Rock.";
    }   else if (playerSelection == "paper" && computerSelection === "Scissors") {
        return "You LOOSE! Scissors beat Paper.";
    }   else if (playerSelection == "paper" && computerSelection === "Paper") {
        return "Its a TIE!";
    }   else {
        return "Wrong input, you probably made a spelling mistake";
    }
}

console.log(gameRound(playerSelection, computerSelection));