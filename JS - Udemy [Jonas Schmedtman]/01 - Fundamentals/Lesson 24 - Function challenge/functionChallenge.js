/* Write your code below. Good luck! 🙂 */
const calcAverage = (a, b, c) => (a + b + c) / 3;

let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);

const checkWinner = function(avgDolphins, avgKoalas){
    if(avgDolphins >= 2 * scoreKoalas){
        return console.log(`Dolphins win ${avgDolphins} vs. ${avgKoalas} `);
    } else if (avgKoalas >= 2 * scoreKoalas){
        return console.log(`Koalas win ${avgKoalas} vs. ${avgDolphins}`);
    } else{
        return console.log('No team wins...');
    }
}

checkWinner(scoreDolphins, scoreKoalas);

// Test 2
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
checkWinner(scoreDolphins, scoreKoalas);