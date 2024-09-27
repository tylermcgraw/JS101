const readlineSync = require('readline-sync');

let widthMeters = readlineSync.question('What is the width of the room in meters?');
let lengthMeters = readlineSync.question('What is the length of the room in meters?');

let areaMeters = widthMeters * lengthMeters;
let areaFeet = areaMeters * 10.7639;
console.log(`==> The area of the room is ${areaMeters} square meters (${areaFeet} square feet).`);