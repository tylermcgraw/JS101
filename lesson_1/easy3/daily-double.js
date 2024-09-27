function crunch(str) {
  let newStr = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== str[i + 1]) {
      curChar = str[i];
      newStr += str[i];
    }
  }
  console.log(newStr);
}

crunch('ddaaiillyy ddoouubbllee');    // "daily double"
crunch('4444abcabccba');              // "4abcabcba"
crunch('ggggggggggggggg');            // "g"
crunch('a');                          // "a"
crunch('');                           // ""