function getComputerChoice() {
    const compChoice = Math.floor(Math.random() * 3);
    if (compChoice === 0) {
        return "Rock";
    } else if (compChoice === 1) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

// let playerSelection = "";  //prompt("What is your choice? (Rock, Paper or Scissors)")?.toLowerCase();
function gameRound(playerSelection) {
    let computerSelection = getComputerChoice();
    if (playerSelection === computerSelection) {
        messageUi.textContent = 'Its a TIE!';
        scoreMessageUi.textContent = `${playerSelection} ties with ${computerSelection} !`;
    }   else if (playerSelection === "Rock" && computerSelection === "Scissors") {
            playerScore = ++playerScore;
            messageUi.textContent = 'You WIN!';
            scoreMessageUi.textContent = `${playerSelection} beats ${computerSelection} !`;
    }   else if (playerSelection === "Rock" && computerSelection === "Paper") {
            computerScore = ++computerScore;
            messageUi.textContent = 'You LOOSE!';
            scoreMessageUi.textContent = `${computerSelection} beats ${playerSelection} !`;
    }   else if (playerSelection === "Scissors" && computerSelection === "Rock") {
            computerScore = ++computerScore;  
            messageUi.textContent = 'You LOOSE!';
            scoreMessageUi.textContent = `${computerSelection} beats ${playerSelection} !`;
    }   else if (playerSelection === "Scissors" && computerSelection === "Paper") {
            playerScore = ++playerScore;
            messageUi.textContent = 'You WIN!';
            scoreMessageUi.textContent = `${playerSelection} beats ${computerSelection} !`;
    }   else if (playerSelection === "Paper" && computerSelection === "Rock") {
            playerScore = ++playerScore;
            messageUi.textContent = 'You WIN!'; 
            scoreMessageUi.textContent = `${playerSelection} beats ${computerSelection} !`;
    }   else if (playerSelection === "Paper" && computerSelection === "Scissors") {
            computerScore = ++computerScore;
            messageUi.textContent = 'You LOOSE!'; 
            scoreMessageUi.textContent = `${computerSelection} beats ${playerSelection} !`;
    }  
    playerScoreUi.textContent = `You: ${playerScore}`;
    computerScoreUi.textContent = `Computer: ${computerScore}`; 
    updateChoices(playerSelection, computerSelection);
    game();
}

function game() {
    let result;
    if (playerScore === 5) {
        result = alert("You WON!");
        location.reload();
    } else if (computerScore === 5) {
        result = alert("You LOST!");
        location.reload();
    }
}

function updateChoices(playerSelection, computerSelection) {
    switch (playerSelection) {
      case 'Rock':
        playerChoiceUi.innerHTML = '<img src="imgs/rock.png" alt="rock hand gesture" class="show-choice"></img>';
        break
      case 'Paper':
        playerChoiceUi.innerHTML = '<img src="imgs/paper.png" alt="rock hand gesture" class="show-choice"></img>';
        break
      case 'Scissors':
        playerChoiceUi.innerHTML = '<img src="imgs/scissors.png" alt="rock hand gesture" class="show-choice"></img>';
        break
    }
  
    switch (computerSelection) {
      case 'Rock':
        computerChoiceUi.innerHTML = '<img src="imgs/rock.png" alt="rock hand gesture" class="show-choice"></img>';
        break
      case 'Paper':
        computerChoiceUi.innerHTML = '<img src="imgs/paper.png" alt="rock hand gesture" class="show-choice"></img>';
        break
      case 'Scissors':
        computerChoiceUi.innerHTML = '<img src="imgs/scissors.png" alt="rock hand gesture" class="show-choice"></img>';
        break
    }
  }

const playerScoreUi =  document.getElementById('player-score');
const computerScoreUi = document.getElementById('computer-score');
const playerChoiceUi = document.getElementById('player-choice');
const computerChoiceUi = document.getElementById('computer-choice');
const scoreMessageUi = document.getElementById('score-message');
const messageUi = document.getElementById('message');
const btnRock = document.getElementById('rock');
const btnPaper = document.getElementById('paper');
const btnScissors = document.getElementById('scissors');

let playerScore = 0;
let computerScore = 0;

btnRock.addEventListener('click', () => {
    gameRound('Rock');
});
btnPaper.addEventListener('click', () => {
    gameRound('Paper');
});
btnScissors.addEventListener('click', () => {
    gameRound('Scissors');
});



// const buttons = document.querySelectorAll('button');
// buttons.forEach(button => {
//     button.addEventListener('click', () => {
//         playerSelection = button.textContent;
//         gameRound(); 
//     }) 
// });


