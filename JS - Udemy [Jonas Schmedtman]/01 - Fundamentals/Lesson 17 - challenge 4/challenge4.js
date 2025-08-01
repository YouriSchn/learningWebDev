const bill = 275;
const tip = bill <= 300 && bill >= 50 
  ? bill * 0.15 // if
  : bill * 0.20; // else
console.log(`the bill was ${bill}, the tip was ${tip}, and the total value is ${bill + tip}`);