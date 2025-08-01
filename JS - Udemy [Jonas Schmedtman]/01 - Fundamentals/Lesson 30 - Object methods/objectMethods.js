'use strict';

// object
const youri = {
    firstName: 'Youri',
    lastName: 'Schneider',
    birthyear: 1993,
    job: 'police officer',
    family: ['Emily', 'Owin'],
    hasDriversLicense: true,

    // This function needs to be an expression, so you have to use a name and :, otherwise it doesn't work
    // calcAge: function(birthyear) {
    //     return 2025 - birthyear;
    // }

    // calcAge: function() {
    //     return 2025 - this.birthyear; 
    // }

    calcAge: function() {
        this.age = 2025 - this.birthyear;
        return this.age;
    },

    getSummary: function() {
        return `${this.firstName} is a ${this.calcAge()} year old ${this.job} and he has ${this.hasDriversLicense ? 'a' : 'no'} drivers license.`
    }
};

console.log(youri.calcAge()); // We need this to calculate the age, otherwise the code underneath doesn't work

console.log(youri.age);
console.log(youri.age);
console.log(youri.age);

// Challenge
// Youri is a 32 year old handhaver, and he has a/no driver's license

console.log(youri.getSummary());