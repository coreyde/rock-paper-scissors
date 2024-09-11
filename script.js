function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  let index = Math.floor(Math.random() * choices.length);
  return choices[index];
}

let humanScore = 0;
let computerScore = 0;

// Results of each outcome for each round
function playRound(humanChoice, computerChoice) {
  if (humanChoice === "rock" && computerChoice === "paper") {
    computerScore++;
    console.log(`User score: ${humanScore}, Computer score: ${computerScore}`);
    return `You lose! ${computerChoice} beats ${humanChoice}.`;
  } else if (humanChoice === "rock" && computerChoice === "scissors") {
    humanScore++;
    console.log(`User score: ${humanScore}, Computer score: ${computerScore}`);
    return `You win! ${humanChoice} beats ${computerChoice}.`;
  } else if (humanChoice === "paper" && computerChoice === "scissors") {
    computerScore++;
    console.log(`User score: ${humanScore}, Computer score: ${computerScore}`);
    return `You lose! ${computerChoice} beats ${humanChoice}.`;
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    humanScore++;
    console.log(`User score: ${humanScore}, Computer score: ${computerScore}`);
    return `You win! ${humanChoice} beats ${computerChoice}.`;
  } else if (humanChoice === "scissors" && computerChoice === "rock") {
    computerScore++;
    console.log(`User score: ${humanScore}, Computer score: ${computerScore}`);
    return `You lose! ${computerChoice} beats ${humanChoice}.`;
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    humanScore++;
    console.log(`User score: ${humanScore}, Computer score: ${computerScore}`);
    return `You win! ${humanChoice} beats ${computerChoice}.`;
  } else {
    console.log(`User score: ${humanScore}, Computer score: ${computerScore}`);
    return "Draw!";
  }
}

// Retrieve button press from the website, listen for user's choice
function getHumanChoice(callback) {
  const buttons = document.querySelectorAll(".game-btn");

  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      const userChoice = this.getAttribute("data-choice");
      const computerChoice = getComputerChoice();
      console.log(userChoice, computerChoice);

      callback(userChoice, computerChoice);
    });
  });
}

// Disable button press after game has concluded
function disableButtons() {
  const buttons = document.querySelectorAll(".game-btn");

  buttons.forEach((button) => {
    button.disabled = true;
  });
}

// Check to see if the round limit has been reached, then end game
function checkGameOver() {
  if (humanScore === 5) {
    disableButtons();
    console.log("Game over! You win!");
  } else if (computerScore === 5) {
    disableButtons();
    console.log("Game over! You lose!");
  }
}

// Round and 'game over' check is performed here to play game
function playGame(userChoice, computerChoice) {
  const result = playRound(userChoice, computerChoice);
  console.log(result);
  checkGameOver();
}

getHumanChoice(playGame);
