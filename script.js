function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  let index = Math.floor(Math.random() * choices.length);

  return choices[index];
}

const compChoice = getComputerChoice();
console.log(compChoice);
