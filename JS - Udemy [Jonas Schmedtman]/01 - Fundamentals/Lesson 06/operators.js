const now = 2037;
const ageYouri = now - 1993;
const ageSarah = now - 2018;
console.log(ageYouri,ageSarah);

console.log(ageYouri * 2, ageYouri / 10, 2 ** 3)
// 2 ** 3 means 2 to the power of 3 = 2*2*2

const firstName = 'Youri';
const lastName = 'Schneider';

console.log(firstName + lastName);
console.log(firstName + ' ' + lastName);

// Assigment operators
let x = 10 + 5;
x += 10; // x = x + 10
x *= 4;
x++ // x = x + 1
x-- // x = x - 1
x-- // x = x - 1
console.log(x);

// Comparison operators
console.log(ageYouri > ageSarah); // if you want to compae to values, you don't use the = operator

console.log(ageYouri < ageSarah);

console.log(ageSarah >= 18); // This is used if you want if something is exact number or higher. So in this example 18 or higher

const isFullAge = ageSarah >= 18;
console.log(now - 1991 > now - 2018);