function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  let index = Math.floor(Math.random() * choices.length);

  return choices[index];
}

const computerChoice = getComputerChoice();
console.log(computerChoice);

const buttons = document.querySelectorAll(".game-btn");

buttons.forEach((button) => {
  button.addEventListener("click", function () {
    const userChoice = this.getAttribute("data-choice");
    console.log(`User choice: ${userChoice}`);
  });
});

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  if (humanChoice === "rock") {
  }
}
