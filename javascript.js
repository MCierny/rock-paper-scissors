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


let playerSelection = "";  //prompt("What is your choice? (Rock, Paper or Scissors)")?.toLowerCase();


function gameRound() {
    let computerSelection = getComputerChoice();
    if (playerSelection === computerSelection) {
        document.getElementById('score-message').textContent = `Its a TIE! ${playerSelection} vs ${computerSelection} !`;
        console.log(`Its a TIE! ${playerSelection} vs ${computerSelection} !`);
    }   else if (playerSelection === "Rock" && computerSelection === "Scissors") {
            playerScore = ++playerScore;
            document.getElementById('score-message').textContent = `You WIN! ${playerSelection} beats ${computerSelection} !`;
            console.log(`You WIN! ${playerSelection} beats ${computerSelection} !`);
    }   else if (playerSelection === "Rock" && computerSelection === "Paper") {
            computerScore = ++computerScore;
            document.getElementById('score-message').textContent = `You LOOSE! ${computerSelection} beats ${playerSelection} !`;
            console.log(`You LOOSE! ${computerSelection} beats ${playerSelection} !`);
    }   else if (playerSelection === "Scissors" && computerSelection === "Rock") {
            computerScore = ++computerScore;  
            document.getElementById('score-message').textContent = `You LOOSE! ${computerSelection} beats ${playerSelection} !`;
            console.log(`You LOOSE! ${computerSelection} beats ${playerSelection} !`);
    }   else if (playerSelection === "Scissors" && computerSelection === "Paper") {
            playerScore = ++playerScore;  
            document.getElementById('score-message').textContent = `You WIN! ${playerSelection} beats ${computerSelection} !`;
            console.log(`You WIN! ${playerSelection} beats ${computerSelection} !`);
    }   else if (playerSelection === "Paper" && computerSelection === "Rock") {
            playerScore = ++playerScore;   
            document.getElementById('score-message').textContent = `You WIN! ${playerSelection} beats ${computerSelection} !`;
            console.log(`You WIN! ${playerSelection} beats ${computerSelection} !`);
    }   else if (playerSelection === "Paper" && computerSelection === "Scissors") {
            computerScore = ++computerScore; 
            document.getElementById('score-message').textContent = `You LOOSE! ${computerSelection} beats ${playerSelection} !`;
            console.log(`You LOOSE! ${computerSelection} beats ${playerSelection} !`);
    }  
    document.getElementById('player-score').textContent = `You: ${playerScore}`;
    document.getElementById('computer-score').textContent = `Computer: ${computerScore}`; 
    document.getElementById('player-choice').textContent = `Your choice: ${playerSelection}`;
    document.getElementById('computer-choice').textContent = `Computer choice: ${computerSelection}`;
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


// function game() {
//     for (let i = 0; i < 5; i++) {
//         console.log(gameRound());
//         console.log("Your score: ", playerScore);
//         console.log("Opponent score: ", computerScore);
//     }  
//     if (playerScore > computerScore) {
//         alert("You WON!");
//         console.log("You WON the GAME!");
//     } else if (playerScore < computerScore) {
//         alert("You LOST!");
//         console.log("You LOST the GAME!");
//     } else if (playerScore === computerScore) {
//         alert("Its a TIE!")
//         console.log("Its a TIE!");
//     }
// }

// game();

const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        playerSelection = button.textContent;
        gameRound(); 
    }) 
});


