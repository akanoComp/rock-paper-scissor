function getComputerChoice() {
  let option = ["ROCK", "PAPER", "SCISSOR"];
  return option[Math.floor(Math.random() * option.length)];
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {
    function playRound(humanChoice, computerChoice) {
      if (humanChoice === computerChoice) {
        console.log(`You choose: ${humanChoice}, computer choose: ${computerChoice}. It's a draw! `);
      } else if (humanChoice === "ROCK" && computerChoice === "SCISSOR") {
        console.log(`${humanChoice} beats ${computerChoice}, You win!`);
        humanScore += 1;
        console.log(`Player score: ${humanScore}`);
      } else if (humanChoice === "PAPER" && computerChoice === "ROCK") {
        console.log(`${humanChoice} beats ${computerChoice}, You win!`);
        humanScore += 1;
        console.log(`Player score: ${humanScore}`);
      } else if (humanChoice === "SCISSOR" && computerChoice === "PAPER") {
        console.log(`${humanChoice} beats ${computerChoice}, You win!`);
        humanScore += 1;
        console.log(`Player score: ${humanScore}`);
      } else {
        console.log(`${computerChoice} beats ${humanChoice}, You lose! `);
        computerScore += 1;
        console.log(`Computer score: ${computerScore}`);
      }
    }
    const computerChoice = getComputerChoice();
    const humanChoice = prompt("choose your weapon: ").toUpperCase();

    playRound(humanChoice, computerChoice);
  }
  if (humanScore > computerScore) {
    console.log("You win");
  } else {
    console.log("you lose");
  }
}

playGame();
