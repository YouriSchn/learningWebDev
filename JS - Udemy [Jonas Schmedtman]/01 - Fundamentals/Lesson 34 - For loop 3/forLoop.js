// Loop over Array backwards
const youri = [
    'Youri',
    'Schneider',
    2025 - 1993,
    'Handhaver',
    ['Emily', 'Owin'],
];

for(let i = youri.length - 1; i >= 0; i--){
    console.log(youri[i]);
}

// Loop inside of a loop
for(let exercise = 1; exercise <= 3; exercise++){
    console.log(`------- Starting exercise ${exercise}`);

    for(let repetition = 1; repetition <=5; repetition++){
        console.log(`Exercise ${exercise}: Lifting weight repetition ${repetition}`);
    }
}


