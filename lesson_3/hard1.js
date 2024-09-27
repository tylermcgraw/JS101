// Question 1
// no, first returns an object, second returns undefined

// Question 2
// { first: [1, 2]}

// Question 3
/*
A: wrong
one is: ['two']
two is: ['three']
three is: ['two']
B: wrong
one is: ['two']
two is: ['three']
three is: ['one']
C:
one is: ['two']
two is: ['three']
three is: ['one']
*/

// Question 4
// variables: boo, scare, myBoo, halloweenCollection, myBoo
// primitives: scare, scare.toUpperCase(), "!!!", myBoo, greet, scare,
//  wish, "Happy Halloween", "Boo", "May all your pumpkins be glowing",
//  myBoo, "greet"
// objects: boo, halloweenCollection

// Question 5
function isDotSeparatedIpAddress(inputString) {
  let dotSeparatedWords = inputString.split(".");
  if (dotSeparatedWords.length !== 4) {
    return false;
  }
  while (dotSeparatedWords.length > 0) {
    let word = dotSeparatedWords.pop();
    if (!isAnIpNumber(word)) {
      return false;
    }
  }

  return true;
}