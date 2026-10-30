"use strict";
const choices = ["rock", "paper", "scissors"];
const beats = { rock: "scissors", paper: "rock", scissors: "paper" };
let playerScore = 0;
let computerScore = 0;
const moveButtons = document.querySelectorAll("[data-choice]");
const results = document.querySelector("#results");
function getComputerChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}
function playRound(playerSelection, computerSelection = getComputerChoice()) {
  if (playerScore >= 5 || computerScore >= 5) return;
  let message;
  if (playerSelection === computerSelection) {
    message = "It's a tie. Nobody scores.";
  } else if (beats[playerSelection] === computerSelection) {
    playerScore++;
    message = "You win this round!";
  } else {
    computerScore++;
    message = "Computer wins this round.";
  }
  document.querySelector("#player-score").textContent = playerScore;
  document.querySelector("#computer-score").textContent = computerScore;
  results.textContent = `You chose ${playerSelection}; computer chose ${computerSelection}. ${message}`;
  if (playerScore === 5 || computerScore === 5) {
    results.textContent += playerScore === 5 ? " You win the game!" : " Computer wins the game!";
    moveButtons.forEach(button => { button.disabled = true; });
  }
}
moveButtons.forEach(button => button.addEventListener("click", () => playRound(button.dataset.choice)));
document.querySelector("#restart").addEventListener("click", () => {
  playerScore = 0;
  computerScore = 0;
  document.querySelector("#player-score").textContent = 0;
  document.querySelector("#computer-score").textContent = 0;
  results.textContent = "New game. Make your first move!";
  moveButtons.forEach(button => { button.disabled = false; });
});
