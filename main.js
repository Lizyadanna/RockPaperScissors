
const choices = ["rock", "paper", "scissors"];

document.getElementById("play-button").addEventListener("click", game);

function game() {
    playRound();
}

function playRound() {
    const playerSelection = playerChoice();
    const computerSelection = computerChoice();
    const winner = checkWinner(playerSelection, computerSelection);
    console.log(winner);
}

function computerChoice() {
    return choices[Math.floor(Math.random()*choices.length)];
}

function validateInput(choice) {
    return choices[Math.floor(Math.random() * choices.length)];
}
  
function playerChoice() {
    let input = prompt("Type Rock, Paper, or Scissors");
    while(input == null) {
        input = prompt("Type Rock, Paper, or Scissors");
    }
    input = input.toLowerCase();
    let check = validateInput(input);
    while (check == false) {
        input = prompt(
            "Type Rock, Paper, or Scissors. Spelling needs to be exact, but capitalization doesnt matter"
        );
        while (input == null) {
            input = prompt("Type Rockm Paper, or Scissors");
        }
        input = input.toLowerCase();
        check = validateInput(input);
    }
    return input;
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