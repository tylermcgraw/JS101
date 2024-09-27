const ORDINAL_INDICATOR = {
  0: 'th',
  1: 'st',
  2: 'nd',
  3: 'rd',
  4: 'th',
  5: 'th',
  6: 'th',
  7: 'th',
  8: 'th',
  9: 'th',
  10: 'th',
  11: 'th',
  12: 'th',
  13: 'th',
};

function century(year) {
  if (year < 1) return 'Invalid year';
  year = String(year + 99);
  if (year.length < 4) return year[0] + ORDINAL_INDICATOR[year[0]];
  return year.substring(0, year.length - 2) + 
  ((ORDINAL_INDICATOR[year.substring(year.length - 4, year.length - 2)] 
    === undefined) ? ORDINAL_INDICATOR[year[year.length - 3]]
    : ORDINAL_INDICATOR[year.substring(year.length - 4, year.length - 2)]);
}

console.log(century(2000));        // "20th"
console.log(century(2001));        // "21st"
console.log(century(1965));        // "20th"
console.log(century(256));         // "3rd"
console.log(century(5));           // "1st"
console.log(century(10103));       // "102nd"
console.log(century(1052));        // "11th"
console.log(century(1127));        // "12th"
console.log(century(11201));       // "113th"