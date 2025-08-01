'use strict';

const friends = ['Micheal', 'Steven', 'Jannes'];

// Push methods adds elements to the end of an array.
const newLength = friends.push('Jay');
console.log(friends)
console.log(newLength)

// unshift adds an element to the beginning of the array
friends.unshift('Josh');
console.log(friends);

// Pop removes last array element
friends.pop(); // pop doesn't return the lengthed of the array, but the removed element.
const popped = friends.pop();
console.log(friends);
console.log(popped); // As you see the last element got returned in the console

// Shift removes first element of array
friends.shift();
console.log(friends);

// Return place of a value
console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Bobbie')); // this one doesn't exists, so gets a minus 1

// ES6 method: includes, returns true or false of index is/isn't in array
friends.push(23)
console.log(friends.includes('Steven'))
console.log(friends.includes('Bobbie'));
console.log(friends.includes(23)); // This is true
console.log(friends.includes('23')); // this is false, as 23 is NaN but a string and the includes feature doesn't do type coercion

if(friends.includes('Steven')) {
  console.log('You have a friend called Steven');
}  else{
  console.log('You ain\'t got a friend named Steven')
}