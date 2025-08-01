'use strict';

// Object literal syntax
// The order doesn't matter, so use arrays for ordered data and objects for unordered data
const youri = {
    firstName: 'Youri', // propery firstname, with value Youri
    lastName: 'Schneider',
    age: 2025 - 1993,
    job: 'Dadada',
    family: ['Emily', 'Owin']
};
console.log(youri);

// this is how we select a property
console.log(youri.lastName);
console.log(youri['lastName']); // we can put in any expression

const nameKey = 'Name'
console.log(youri['first' + nameKey]);
console.log(youri['last' + nameKey]);

// console.log(youri.'last' + nameKey); this doesn't work

// When we need to compue a proprty name, we use the bracet notation. Otherwise the dot notation

const interestedIn = prompt('What do you want to know about me? Choose between firstName, lastName, age, job and family'); // prompt is very anoying while learning

if(youri[interestedIn]){
    console.log(youri[interestedIn]); // true
} else{
    console.log('Your input isn\'t valid! Choose between firstName, lastName, age, job and family'); // false
}

youri.location = 'Zeeland';
youri['city'] = 'Middelburg';

// Challenge
// Youri leeft met meerdere mensen (hoeveel) en wat zijn hun namen?

// Naam, getal, naam
console.log(`${youri.firstName} heeft ${youri.family.length} andere mensen thuiswonen. Een daarvan is zijn vrouw ${youri.family[0]}, de andere is zijn zoontje ${youri.family[1]}`);