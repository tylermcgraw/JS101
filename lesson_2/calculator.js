const readline = require('readline-sync');
const messages = require('./calculator_messages.json');

let calculate = true;
prompt(messages.language);
let lang = readline.question();
while (!['en', 'es'].includes(lang)) {
  prompt(messages.invalidLanguage);
  lang = readline.question();
}
prompt(messages[lang].welcome);

do {
  prompt(messages[lang].num1);
  let number1 = readline.question();

  while (invalidNumber(number1)) {
    prompt(messages[lang].invalidNum);
    number1 = readline.question();
  }

  prompt(messages[lang].num2);
  let number2 = readline.question();

  while (invalidNumber(number2)) {
    prompt(messages[lang].invalidNum);
    number2 = readline.question();
  }

  prompt(messages[lang].operation);
  let operation = readline.question();

  while (!['1', '2', '3', '4'].includes(operation)) {
    prompt(messages[lang].invalidOp);
    operation = readline.question();
  }

  let output;
  switch (operation) {
    case '1':
      output = Number(number1) + Number(number2);
      break;
    case '2':
      output = Number(number1) - Number(number2);
      break;
    case '3':
      output = Number(number1) * Number(number2);
      break;
    case '4':
      output = Number(number1) / Number(number2);
      break;
  }

  prompt(`${messages[lang].result} ${output}`);

  prompt(messages[lang].repeat);
  let repeat = readline.question();
  while (!['y', 'n'].includes(repeat)) {
    prompt(messages[lang].invalidRepeat);
    repeat = readline.question();
  }
  if (repeat === 'n') {
    calculate = false;
  }
} while (calculate);

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}