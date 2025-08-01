const age = 23;
age >= 18 ? console.log('You are grown up'): /* IF */ console.log('You aren\'t grown up'); // else
  
const grownUp = age >= 18 ? 'Grown up' : 'Not yet';
console.log(grownUp);

// The code above does the same as:

let grownUp2;
if (age >= 18) {
  grownUp2 = 'Yeah';
} else{
  grownUp2 = 'No';
}
console.log(grownUp2);

console.log(`Am i a grown-up? ${age >= 18 ? 'Grown up' : 'Not yet'}`);

