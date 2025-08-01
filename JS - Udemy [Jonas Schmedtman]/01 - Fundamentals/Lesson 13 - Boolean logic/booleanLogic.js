const driversLicense = true;
const goodVision = true;

console.log(driversLicense && goodVision);
console.log(driversLicense || goodVision);
console.log(!driversLicense); // was true, becomes false

const shouldDrive = driversLicense && goodVision;

// if (shouldDrive) {
//   console.log('You are able to drive')
// } else {
//   console.log('Please, don\'t drive');
// }

const isTired = false;

console.log(driversLicense || goodVision || isTired);
console.log(driversLicense && goodVision && isTired);

if (shouldDrive && !isTired){
  console.log('You can drive');
} else {
  console.log('Don\'t drive')
}

// Challenge
const scoreDolphins = (96 + 108 + 89) / 3;
const scoreKoalas = (88 + 91 + 110) / 3;

if (scoreDolphins > scoreKoalas) {
    console.log('Dolphins win the trophy');
} else if (scoreDolphins < scoreKoalas) {
    console.log('Koalas win the trophy');
} else { // also could've been: else if (scoreDolphins === scoreKoals) but that would've been unnecessarily complicated
    console.log('Both win the trophy') 
} 