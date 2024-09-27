// Question 1
let numbers = [1, 2, 3, 4];
numbers.forEach(_ => numbers.pop());
numbers.splice(0, numbers.length);
while (numbers.length > 0) numbers.pop();

// Question 2
// 1,2,34,5

// Question 3
// 'hello there'

// Question 4
// [{ first: 42 }, { second: "value2" }, 3, 4, 5]

// Question 5
function isColorValid(color) {
  return (color === "blue" || color === "green")
}

const isColorValid = color => ['blue', 'green'].includes(color);

// Question 6
// variables: arr, newArr, num, newNum, double, num
// primitives: num, newNum, 1, 2, 3, 0, num * 2, 2, num
// objects: arr, double