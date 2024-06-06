
const choices = ["rock", "paper", "scissors"];

function game() {
    playRound();
}

function playRound() {
    const playSelection = playerChoice();
    const computerSelection = computerChoice();
    const winner = checkWinner(playerChoice, computerChoice);
    console.log(winner);
}

function computerChoice() {
    return choices[Math.floor(Math.random()*choices.length)]
}
  
function playerChoice() {
    let input = prompt("Type Rock, Paper, or Scissors");
    while(input == null) {
        input = prompt('Type Rock, Paper, or Scissors');
    }
    input = input.toLowerCase();
    console.log(input);
}

function checkWinner(choiceP, choiceC) {
    if (choiceP === choiceC) {
        return 'It\'s a tie';
    } else if (
        (choiceP === "rock" && choiceC === "scissors") ||
        (choiceP === "paper" && choiceC === "rock") ||
        (choiceP === "scissors" && choiceC === "paper")
    ) {
        return 'Player wins!';
    } else {
        return 'Computer wins!';
    }
}

game();