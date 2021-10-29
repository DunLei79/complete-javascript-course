'use strict';

const dolphins = 85 + 54 + 41;
const koalas = 23 + 34 + 27;


const calcAverage = totalscore => totalscore / 3;

// console.log(calcAverage(koalas));
// console.log(calcAverage(dolphins));

const checkWinner = function (avgDolphins, avgKoalas) {
    avgDolphins = calcAverage(dolphins);
    avgKoalas = calcAverage(koalas);

    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins wins ${avgDolphins} vs ${avgKoalas}`);
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas wins ${avgKoalas} vs ${avgDolphins}`);
    } else {
        console.log(`no winner`)
    }
}
console.log(checkWinner())
