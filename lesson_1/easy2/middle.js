function centerOf(str) {
  let startIndex = Math.ceil(str.length / 2) - 1;
  let endIndex = str.length % 2 === 0 ? startIndex + 2 : startIndex + 1;
  console.log(str.slice(startIndex, endIndex));
}

centerOf('I Love JavaScript'); // "a"
centerOf('Launch School');     // " "
centerOf('Launch');            // "un"
centerOf('Launchschool');      // "hs"
centerOf('x');                 // "x"