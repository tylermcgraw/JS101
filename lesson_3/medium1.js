// Question 1
let str = "The Flintstones Rock!";
for (let i = 0; i < 10; i++) {
  console.log(str.padStart(str.length + i));
}

// Question 2
let munstersDescription = "The Munsters are creepy and spooky.";
munstersDescription.split('').map((letter) => {
  return (letter.match(/[A-Z]/g) === null) ? letter.toUpperCase() : letter.toLowerCase();
}).join('');

// Question 3
function factors(number) {
  let divisor = number;
  let factors = [];
  while (divisor > 0) {
    if (number % divisor === 0) {
      factors.push(number / divisor);
    }
    divisor -= 1;
  }
  return factors;
}
// bonus: check if there is a remainder when number is divided by divisor
// if not, divisor (and number / divisor) is a factor

// Question 4
// push mutates buffer, concat does not

// Question 5
// 0.9, true
// yikes: 0.89999, false

// Question 6
// false, NaN !=== NaN
// Number.isNaN()

// Question 7
// 34

// Question 8
// yes, munsters is passed by reference

// Question 9
// paper

// Question 10
// "no"