const readline = require('readline-sync');
const VALID_CHOICES = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
const WIN_CONDITIONS = {
  rock: ['lizard', 'scissors'],
  paper: ['rock', 'spock'],
  scissors: ['paper', 'lizard'],
  lizard: ['paper', 'spock'],
  spock: ['rock', 'scissors']
};
const WIN_LIMIT = 3;
let playerWins = 0;
let computerWins = 0;
let gameOver = false;

function displayWinner(choice, computerChoice) {
  prompt(`You chose ${choice}, computer chose ${computerChoice}`);

  if (WIN_CONDITIONS[choice].includes(computerChoice)) {
    prompt('You win!');
    playerWins++;
  } else if (WIN_CONDITIONS[computerChoice].includes(choice)) {
    prompt('Computer wins!');
    computerWins++;
  } else {
    prompt("It's a tie!");
  }
}

function displayGrandWinner() {
  if (playerWins === WIN_LIMIT) {
    prompt("Congratulations! You are the grand champion!");
  } else if (computerWins === WIN_LIMIT) {
    prompt("Sorry. The computer is the grand champion!");
  } else {
    prompt(`The current score is: Player: ${playerWins} Computer: ${computerWins}`);
  }
}

function prompt(message) {
  console.log(`=> ${message}`);
}

function convertChoice(input) {
  VALID_CHOICES.forEach((choice) => {
    if (input === choice.substring(0, input.length)) {
      input = choice;
    }
  });
  return input;
}

function resetGame() {
  gameOver = false;
  playerWins = 0;
  computerWins = 0;
}

prompt(`Welcome to Rock, Paper, Scissors, Lizard, Spock! First to ${WIN_LIMIT} wins.`);
while (!gameOver) {
  prompt(`Choose one: ${VALID_CHOICES.join(', ')}`);
  let choice = convertChoice(readline.question());

  while (!VALID_CHOICES.includes(choice)) {
    prompt("That's not a valid choice");
    choice = convertChoice(readline.question());
  }

  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[randomIndex];

  displayWinner(choice, computerChoice);
  displayGrandWinner();
  gameOver = (playerWins === WIN_LIMIT || computerWins === WIN_LIMIT);

  if (gameOver) {
    prompt('Do you want to play again (y/n)?');
    let answer = readline.question().toLowerCase();
    while (answer[0] !== 'n' && answer[0] !== 'y') {
      prompt('Please enter "y" or "n".');
      answer = readline.question().toLowerCase();
    }

    if (answer[0] === 'y') resetGame();
  }
}