function isOdd(num) {
  return num < 0 ? num % 2 === -1 : num % 2 === 1;
}

console.log(isOdd(9));
console.log(isOdd(-8));
console.log(isOdd(Infinity));
console.log(isOdd(-7));