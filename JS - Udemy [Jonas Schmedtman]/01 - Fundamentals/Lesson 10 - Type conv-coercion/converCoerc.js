
// Type conversion
const inputYear = '1993'
console.log(Number(inputYear));
console.log(Number(inputYear) + 18);

// this doesn't work, of course
console.log(Number('Jonas'));
console.log(typeof NaN);

console.log(String(23), 23);

// Type coercion
console.log('I am ' + 23 + ' years old') // the + sign does the conversion automatically. In this case it changes the type of 23 to a string

console.log('23' - '10' - 3);
console.log('23' * '2');
// the mathmatical symbol adds the automatic conversion