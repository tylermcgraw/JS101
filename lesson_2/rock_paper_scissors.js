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
const GAME_OUTCOME = {
  playerWin: 'You win!',
  computerWin: 'Computer wins!',
  tie: "It's a tie"
};
const FINAL_OUTCOME = {
  playerChampion: 'Congratulations! You are the grand champion!',
  computerChampion: 'Sorry. The computer is the grand champion!'
};

// Is it ok that displayGameWinner does 2 things - displays the winner
// and increments playerWins/computerWins?
function displayGameWinner(choice, computerChoice) {
  prompt(`You chose ${choice}, computer chose ${computerChoice}`);

  if (WIN_CONDITIONS[choice].includes(computerChoice)) {
    playerWins++;
    prompt(GAME_OUTCOME.playerWin);
  } else if (WIN_CONDITIONS[computerChoice].includes(choice)) {
    computerWins++;
    prompt(GAME_OUTCOME.computerWin);
  } else {
    prompt(GAME_OUTCOME.tie);
  }
}

function displayGrandWinner() {
  if (playerWins === WIN_LIMIT) {
    prompt(FINAL_OUTCOME.playerChampion);
  } else if (computerWins === WIN_LIMIT) {
    prompt(FINAL_OUTCOME.computerChampion);
  } else {
    // I initially had this template literal in my FINAL_OUTCOME object, but I
    // took it out because playerWins and computerWins need to be updated
    prompt(`The current score is: Player: ${playerWins} Computer: ${computerWins}`);
  }
}

function prompt(message) {
  console.log(`=> ${message}`);
}

// Converts substrings  of choices to valid choices
// Ex. 'r' -> 'rock', 'sc' -> 'scissors'
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

  displayGameWinner(choice, computerChoice);
  displayGrandWinner();
  prompt(playerWins);
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