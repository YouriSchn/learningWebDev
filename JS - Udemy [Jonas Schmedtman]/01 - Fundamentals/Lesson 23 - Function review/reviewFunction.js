'use strict'

const calcAge = function(birthYear){
  return 2037 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 67 - age;

  if(retirement > 0){
    return retirement;
    console.log('This string shouldn\'t be logged, as return exits the function immediately')
  } else{
    console.log('This one does get logged, as it is above the return')
    return -1;
  }
}

console.log(yearsUntilRetirement(1993, 'Youri'));
console.log(yearsUntilRetirement(1938, 'John'));

// Function Declaration, can be used before declared
function calculateAge(birthYear){
  return 2037 - birthYear;
}

// Function expression, a function stored inside a variable
const calculateAge2 = function (birthYear){
  return 2037 - birthYear;
}

// special function expression, useful for quick one-line functions
const calculateAge3 = birthYear => 2037 - birthYear;