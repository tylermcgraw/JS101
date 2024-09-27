function cleanUp(str) {
  str = str.split('')
    .map(char => 
    (char >= 'A' && char <= 'Z') ||
    (char >= 'a' && char <= 'z') ?
    char : ' '
  ).join('');
  noSpaces = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1] && 
        str[i] === ' ') {
          continue;
    }
    noSpaces += str[i];
  }
  return noSpaces;
}

console.log(cleanUp("---what's my +*& line?"));    // " what s my line "