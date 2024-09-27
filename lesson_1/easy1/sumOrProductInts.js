const readlineSync = require('readline-sync');

let number = readlineSync.question('==> What is your number?');
let sumOrProduct = readlineSync.question("==> Type 's' for sum and 'p' for product.");

let result = 1;
for (let i = 2; i <= number; i++) {
  result = sumOrProduct === 's' ? result + i : result * i;
}
console.log(`==> The ${sumOrProduct === 's' ? 'sum' : 'product'} is ${result}.`);