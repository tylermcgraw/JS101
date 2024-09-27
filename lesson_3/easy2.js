// Question 1
let advice = "Few things in life are as important as house training your pet dinosaur.";
return advice.replaceAll('important', 'urgent');

// Question 2
let numbers = [1, 2, 3, 4, 5];
numbers.toReversed();
numbers.slice().reverse();
Array.from(numbers).reverse()
numbers.slice().sort((a, b) => b - a);
let reversedNumbers = [];
numbers.forEach(n(number => reversedNumbers.unshift(number)));

// Question 3
let num1 = 2
numbers.some((num) => num = num1);
numbers.includes(num1);

// Question 4
let famousWords = "seven years ago...";
"Four score and " + famousWords;
'Four score and '.concat(famousWords);

// Question 5
numbers.splice(2, 1);

// Question 6
flintstones = [].concat(...flintstones);
flinstones.flat();

// Question 7
let flintstones = { Fred: 0, Wilma: 1, Barney: 2, Betty: 3, Bambam: 4, Pebbles: 5 };
let barney = Object.entries(flintstones)[2];
barney = Object.entries(flintstones).filter((pair) => pair[0] == 'Barney').shift();

// Question 8
numbers = [1, 2, 3, 4]; // true
let table = { field1: 1, field2: 2, field3: 3, field4: 4 }; // false
Array.isArray(numbers);
Array.isArray(table);

// Question 9
let title = "Flintstone Family Members";
// need the center of the title to be character 20
// so we must add 20 - title.length / 2 spaces
for (let i = 0; i < 20 - title.length / 2; i++) {
  title = ' ' + title;
}
title.padStart(20 + title.length / 2);

// Question 10
let statement1 = "The Flintstones Rock!";
let statement2 = "Easy come, easy go.";
[...statement1.matchAll('t')].length;
statement2.split('').filter((c) => c === 't').length;