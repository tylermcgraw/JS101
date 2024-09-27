function logInBox(text) {
  for (let row = 0; row < 5; row++) {
    let curLine = (row === 0 || row === 4) ? '+' : '|';
    if (row === 2) {
      curLine += ' ' + text + ' |';
    } else {
      for (let col = 0; col < text.length + 2; col++) {
        if (row === 0 || row === 4) {
          curLine += '-';
        } else {
          curLine += ' ';
        }
      }
      if (row === 0 || row === 4) {
        curLine += '+';
      } else {
        curLine += '|';
      }
    }
    console.log(curLine);
  }
}

logInBox('To boldly go where no one has gone before.');
logInBox('');