const now = 2037;
const ageYouri = now - 1991;
const ageMarwin = now - 2018;

console.log(now - 1991 > now - 2018); // This works because of operator precedence, the calculation goes before the comparison.

console.log(25 - 10 - 5); // goes from left to right

let x, y;
x = y = 25-10-5; x= y = 10, x = 10
console.log(x, y);

const averageAge = (ageYouri + ageMarwin) / 2;
console.log(ageYouri, ageMarwin, averageAge);