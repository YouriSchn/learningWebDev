'use strict';


// Function declaration
const age1 = calcAge1(1993);
console.log(age1); // this can be called, before defined

function calcAge1(birthyear) {
  return 2037 - birthyear;
}



// Function expression
// const age2 = calcAge2(1993) // now it doesn't work, so in expressions you should define the function (and I of course mean this if it wouldn't be a comment)

const calcAge2 = function (birthyear) {
  return 2037 - birthyear; // this creates an expression, so has a value
}

const age2 = calcAge2(1993)


console.log(age1, age2)