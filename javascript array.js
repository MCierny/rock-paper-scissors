const rockPaperScissors = ['Rock', 'Paper', 'Scissors', 'Kamen', 'papier']

function getComputerChoice() {
    return rockPaperScissors[Math.floor(Math.random() * rockPaperScissors.length)]
}

console.log(getComputerChoice());

const rockPaperScissors = ['Rock', 'Paper', 'Scissors', 'Kamen', 'papier']

function getComputerChoice() {
    let index = Math.floor(Math.random() * rockPaperScissors.length);
    return rockPaperScissors[index];
}

console.log(getComputerChoice());