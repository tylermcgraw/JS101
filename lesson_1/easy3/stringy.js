function stringy(num) {
  console.log(num % 2 === 0 ? '10'.repeat(num / 2) : '10'.repeat(num / 2) + '1');
}

stringy(6);    // "101010"
stringy(9);    // "101010101"
stringy(4);    // "1010"
stringy(7);    // "1010101"