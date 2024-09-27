const readlineSync = require('readline-sync');

function shortLongShort(str1, str2) {
  return str1.length < str2.length ? str1 + str2 + str1 : str2 + str1 + str2;
}

console.log(shortLongShort('abc', 'defg'));
console.log(shortLongShort('TTT', 'mm'));
console.log(shortLongShort('', 'xyz'));