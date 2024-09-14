function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  let index = Math.floor(Math.random() * choices.length);
  return choices[index];
}

const outcome = document.querySelector("#outcome");
let humanScore = 0;
let computerScore = 0;

function updateHumanScore() {
  humanScore += 1;
  document.querySelector("#user-score").textContent = humanScore;
}

function updateComputerScore() {
  computerScore += 1;
  document.querySelector("#computer-score").textContent = computerScore;
}

// Results of each outcome for each round
function playRound(humanChoice, computerChoice) {
  if (humanChoice === "rock" && computerChoice === "paper") {
    updateComputerScore();
    outcome.textContent = `You lose! ${computerChoice} beats ${humanChoice}.`;
  } else if (humanChoice === "rock" && computerChoice === "scissors") {
    updateHumanScore();
    outcome.textContent = `You win! ${humanChoice} beats ${computerChoice}.`;
  } else if (humanChoice === "paper" && computerChoice === "scissors") {
    updateComputerScore();
    outcome.textContent = `You lose! ${computerChoice} beats ${humanChoice}.`;
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    updateHumanScore();
    outcome.textContent = `You win! ${humanChoice} beats ${computerChoice}.`;
  } else if (humanChoice === "scissors" && computerChoice === "rock") {
    updateComputerScore();
    outcome.textContent = `You lose! ${computerChoice} beats ${humanChoice}.`;
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    updateHumanScore();
    outcome.textContent = `You win! ${humanChoice} beats ${computerChoice}.`;
  } else {
    outcome.textContent = "Draw!";
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
    outcome.textContent = "Game over! You win!";
  } else if (computerScore === 5) {
    disableButtons();
    outcome.textContent = "Game over! You lose!";
  }
}

// Round and 'game over' check is performed here to play game
function playGame(userChoice, computerChoice) {
  const result = playRound(userChoice, computerChoice);
  console.log(result);
  checkGameOver();
}

getHumanChoice(playGame);
