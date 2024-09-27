function multiSum(num) {
  let sum = 0;
  for (let counter = 2; counter <= num; counter++) {
    if (counter % 3 === 0 || counter % 5 === 0) sum += counter;
  }
  return sum;
}

console.log(multiSum(3));
console.log(multiSum(5));
console.log(multiSum(1000));