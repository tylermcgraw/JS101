let rlSync = require('readline-sync');

const LOAN_AMOUNT = getNumber('Enter your loan amount in dollars.\n');
const MONTHLY_INTEREST = getNumber(
  'Enter your APR as a percent (5% or 5), not a decimal.\n') / 12;
const LOAN_DURATION = getNumber('Enter your loan duration in months.\n');
const MONTHLY_PAYMENT = LOAN_AMOUNT * (MONTHLY_INTEREST / (1 - Math.pow((1 +
  MONTHLY_INTEREST), (-LOAN_DURATION))));

console.log(`Your monthly payment is $${MONTHLY_PAYMENT.toFixed(2)}\n`);

function getNumber(prompt) {
  let response;
  do {
    response = rlSync.question(prompt);
    // Ignore $ in front of answer, convert string to float
    response = parseFloat(response.substring(response.indexOf('$')));
  } while (Number.isNaN(response) || response < 0);
  return response;
}