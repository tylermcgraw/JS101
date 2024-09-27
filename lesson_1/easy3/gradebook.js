const SCORE_TO_LETTER_GRADE = {
  90: 'A',
  80: 'B',
  70: 'C',
  60: 'D',
  0: 'F'
};

function average(a, b, c) {
  return (a + b + c) / 3;
}

function getGrade(grade1, grade2, grade3) {
  averageGrade = average(grade1, grade2, grade3);
  letterGrade = '';
  for(const [score, letter] of Object.entries(SCORE_TO_LETTER_GRADE)) {
    if (averageGrade >= score) letterGrade = letter;
  }
  return letterGrade;
}

console.log(getGrade(95, 90, 93));    // "A"
console.log(getGrade(50, 50, 95));    // "D")