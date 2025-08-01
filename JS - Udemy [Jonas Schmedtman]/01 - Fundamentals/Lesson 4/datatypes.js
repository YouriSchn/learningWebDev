/* there are several datatypes, namely:
    nummer, string, boolean, undefined, null, symbol and BigInt

    Number: Floating point number, used for decimals and integers
    String: sequence of characters, used for text
    Boolean: Logical type that can onbly be true or false
    Undefined: not yet defined variable
    Null: also means 'emypt value'
    Symbol (ES2015): value that is unique and can't be changed
    BigInt: larger integers than the number type can hold
*/

true; // Boolean value
false; // Boolean value

let javasciptIsFun = true;
console.log(javasciptIsFun);

// console.log(typeof true);
console.log(typeof javasciptIsFun);
// console.log(typeof 1);
// console.log(typeof 'hoi');

javasciptIsFun = "YEAH!";
console.log(typeof javasciptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1993;
console.log(year);

console.log(typeof null);