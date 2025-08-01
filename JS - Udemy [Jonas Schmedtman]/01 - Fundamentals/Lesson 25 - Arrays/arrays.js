'use strict';

// This is how I now would define friends
const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Jannes'

// Arrays

// Literal sentence
const friends = ['Micheal', 'Steven', 'Jannes'];
console.log(friends); 

// Less used way to make a Array
const y = new Array(1991, 1984, 2008, 2020);

// Arrays are zero-based, so they start at zero
console.log(friends[0]);
console.log(friends[2]);

// We can also see how many elements the array has. This isn't zero-based, so starts at one
console.log(friends.length)
console.log(friends[friends.length - 1]);

// We can also replace an element
friends[2] = 'Peter';
console.log(friends);

// We are able to add different data types to an array and even use another array inside it
const youri = ['Youri', 'Schneider', 2025 - 1993, friends];
console.log(youri);

// Exercise
const calcAge = function(birthYear) {
    return 2025 - birthYear;
}

const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);