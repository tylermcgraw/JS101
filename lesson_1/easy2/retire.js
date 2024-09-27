const readlineSync = require('readline-sync');

let currentAge = parseInt(readlineSync.question('Age: '));
let retirementAge = parseInt(readlineSync.question('Retirement age: '));

let today = new Date();
let currentYear = parseInt(today.getFullYear());
let retirementYear = currentYear + retirementAge - currentAge;
let yearsLeft = retirementYear - currentYear;

console.log(`It is ${currentYear}. You will retire in ${retirementYear}.
  \nYou only have ${yearsLeft} years to go!`);