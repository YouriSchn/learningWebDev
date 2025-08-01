// 5 falsy values: 0, '', undefined, null, NaN

console.log(Boolean(0)); // falsy value
console.log(Boolean(undefined)); // falsy value
console.log(Boolean('Youri')); // Truthy value
console.log(Boolean({})); // Trutyh value
console.log(Boolean('')); // falsy value

const money = 100; // If this number is zero, the value is falsy

if (money){
  console.log('Don\'t spend it all');
} else {
  console.log('You should get a job!');
}

let height = 0;
if (height) {
  console.log("Good job, height is defined");
} else {
  console.log('Height is UNDEFINED');
}