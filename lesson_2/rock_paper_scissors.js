const readline = require('readline-sync');
const VALID_CHOICES = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
const WIN_CONDITIONS = {
  rock: ['lizard', 'scissors'],
  paper: ['rock', 'spock'],
  scissors: ['paper', 'lizard'],
  lizard: ['paper', 'spock'],
  spock: ['rock', 'scissors']
};

function displayWinner(choice, computerChoice) {
  prompt(`You chose ${choice}, computer chose ${computerChoice}`);

  if (WIN_CONDITIONS[choice].includes(computerChoice)) {
    prompt('You win!');
  } else if (WIN_CONDITIONS[computerChoice].includes(choice)) {
    prompt('Computer wins!');
  } else {
    prompt("It's a tie!");
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

while (true) {
  prompt(`Choose one: ${VALID_CHOICES.join(', ')}`);
  let choice = convertChoice(readline.question());

  while (!VALID_CHOICES.includes(choice)) {
    prompt("That's not a valid choice");
    choice = readline.question();
  }

  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[randomIndex];

  displayWinner(choice, computerChoice);

  prompt('Do you want to play again (y/n)?');
  let answer = readline.question().toLowerCase();
  while (answer[0] !== 'n' && answer[0] !== 'y') {
    prompt('Please enter "y" or "n".');
    answer = readline.question().toLowerCase();
  }

  if (answer[0] !== 'y') break;
}