'use strict'; // This activates strict mode, always put it as first line (comment lines are excluded)

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive :D');

// Strict mode reserves those words, so we can't use them as they might be used in the future
// const interface = 'Audio';
// const private = 555;
// const if (could not be used, even without strict mode)