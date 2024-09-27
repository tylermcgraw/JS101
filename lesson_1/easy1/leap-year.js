function isLeapYear(year) {
  if (year % 4 === 0) {
    if (year % 100 === 0 && year > 1752) {
      if (year % 400 === 0) {
        return true; // dibisible by 400
      }
      return false; // divisible by 100 but not 400
    }
    return true; // divisible by 4 but not 100, or divisible by 4 before 1752
  }
  return false; // year divisible by 4
}

console.log(isLeapYear(1997));
console.log(isLeapYear(2016));
console.log(isLeapYear(2000));
console.log(isLeapYear(2100));
console.log(isLeapYear(240000));