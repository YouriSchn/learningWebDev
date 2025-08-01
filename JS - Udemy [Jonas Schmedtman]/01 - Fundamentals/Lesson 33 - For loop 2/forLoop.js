
const youri = [
    'Youri',
    'Schneider',
    2025 - 1993,
    'handhaver',
    ['Emily', 'Owin'],
    true
];

const types = [];

// console.log(youri[0]);
// console.log(youri[1]);
// console.log(youri[2]);
// console.log(youri[3]);
// console.log(youri[1]);
// console.log(youri[5]); doesnt exist


for(let i = 0; i < youri.length;  i++){
    // Reading for youri array
    console.log(youri[i], typeof(youri[i]));

    // Filling types array
    // types[i] = typeof youri[i];
    types.push(typeof youri[i]);
}

console.log(types);

const birthyear = [
    1990,
    2006,
    1970,
    2021
];

const ages = [];

for(let i = 0; i < birthyear.length; i++){
    ages.push(2025 - birthyear[i]);

}

console.log(ages)

// Continue and break
console.log('--- ONLY STRINGS ---');

for(let i = 0; i < youri.length;  i++){
    if(typeof youri[i] !== 'string') continue;

    console.log(youri[i], typeof(youri[i]));
}

console.log('--- BREAK WITH NUMBER ---');

for(let i = 0; i < youri.length;  i++){
    if(typeof youri[i] === 'number') break;

    console.log(youri[i], typeof(youri[i]));
}
