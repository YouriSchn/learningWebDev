const age = 18;

if (age === 18) {
  console.log('You are an adult! :D');
} else {
  console.log("You are still a kid.")
}


// Do not use ==, always use === and do type coorcion manually
if (age == 18){
  console.log('You are an adult. (loosely equal)');
} else {
  console.log('You are just a child');
}


// Prompts and strict operators
const favourite = Number(prompt('What\'s your favorite number?'));
console.log(favourite);

if (favourite === 23) {
  console.log('Cool! 23 is a great number!');
} else if (favourite === 7){
  console.log('7 is also great!');
} else if (favourite === 9) {
  console.log('9 is also cool');
} else {
  console.log(`I am so sorry, but that number (${favourite}) is awesome!`);
}

if(favourite !== 23) {
  console.log('Why not 23?')
}