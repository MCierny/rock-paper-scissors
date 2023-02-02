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


function gameRound() {
    const computerSelection = getComputerChoice();
    const playerSelection = prompt("What is your choice? (Rock, Paper or Scissors)")?.toLowerCase();
    if (playerSelection === "rock" && computerSelection === "Rock") {
        return "Its a TIE! Rock vs Rock";
    }   else if (playerSelection === "rock" && computerSelection === "Scissors") {
            playerScore = ++playerScore;
            return "You WIN! Rock beats Scissors.";
    }   else if (playerSelection === "rock" && computerSelection === "Paper") {
            computerScore = ++computerScore;
            return "You LOOSE! Paper beats Rock.";
    }   else if (playerSelection === "scissors" && computerSelection === "Rock") {
            computerScore = ++computerScore;  
            return "You LOOSE! Rock beats Scissors.";
    }   else if (playerSelection === "scissors" && computerSelection === "Scissors") {
            return "Its a TIE! Scissors vs Scissors";
    }   else if (playerSelection === "scissors" && computerSelection === "Paper") {
            playerScore = ++playerScore;  
            return "You WIN! Scissors beat Paper.";
    }   else if (playerSelection === "paper" && computerSelection === "Rock") {
            playerScore = ++playerScore;   
            return "You WIN! Paper beats Rock.";
    }   else if (playerSelection === "paper" && computerSelection === "Scissors") {
            computerScore = ++computerScore; 
            return "You LOOSE! Scissors beat Paper";
    }   else if (playerSelection === "paper" && computerSelection === "Paper") {
            return "Its a TIE Paper vs Paper.";
    }   else {
            return "Wrong input, you probably made a spelling mistake!";
    }
}

/* Crate a function that will play 5 rounds and keps score, and reports winner oor loser at the end */

/* 
Create variable playerScore
Create variable computerScore
Create for loop with function gameRound()
if player wins round +1 score
if computer wins round +1 score
if player score = 3 first = Player WINS
if computer score = 3 first = Computer WINS
*/

let playerScore = 0;
let computerScore = 0;

function game() {
    for (let i = 0; i < 5; i++) {
        console.log(gameRound());
        console.log("Your score: ", playerScore);
        console.log("Opponent score: ", computerScore);
    }  
    if (playerScore > computerScore) {
        alert("You WON!");
        console.log("You WON the GAME!");
    } else if (playerScore < computerScore) {
        alert("You LOST!");
        console.log("You LOST the GAME!");
    } else if (playerScore === computerScore) {
        alert("Its a TIE!")
        console.log("Its a TIE!");
    }
}

game();


