'use strict';

// Arrow function
const calcAge3 = birthyear => 2025 - birthyear; // this is still a function expression, but a lot easier and faster to write
const age3 = calcAge3(1993);
console.log(age3)

const yearsUntilRetirement = (birthyear, firstName) => {
  const age = 2025 - birthyear;
  const retirement = 67 - age;
 // return retirement;
 return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1993, 'Youri'));
console.log(yearsUntilRetirement(2004, 'Robbie'));