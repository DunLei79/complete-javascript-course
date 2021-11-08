'use strict';

//🐱‍👤//Part2 Challange 1

// const dolphins = 85 + 54 + 41;
// const koalas = 23 + 34 + 27;


// const calcAverage = totalscore => totalscore / 3;

// // console.log(calcAverage(koalas));
// // console.log(calcAverage(dolphins));

// const checkWinner = function (avgDolphins, avgKoalas) {
//     avgDolphins = calcAverage(dolphins);
//     avgKoalas = calcAverage(koalas);

//     if (avgDolphins >= 2 * avgKoalas) {
//         console.log(`Dolphins wins ${avgDolphins} vs ${avgKoalas}`);
//     } else if (avgKoalas >= 2 * avgDolphins) {
//         console.log(`Koalas wins ${avgKoalas} vs ${avgDolphins}`);
//     } else {
//         console.log(`no winner`)
//     }
// }
// console.log(checkWinner())

//🐱‍👤// Part2 Challange 2

//const bill = 100;
//const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.20;
//const total = bill + tip;
//console.log(`The bill is ${bill} and the tip is ${tip} we need to pay ${total}`);

// const bills = [125, 555, 44];

// const calcTip = function (bills) {
//     const tip = bills <= 300 && bills >= 50 ? bills * 0.15 : bills * 0.20;
//     return (tip);
// }
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// console.log(tips, bills);

// const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]]
// console.log(total)


//🐱‍👤 #4

// const mark = {
//     fisrtName: `Mark`,
//     lastName: `Miller`,
//     weight: 78,
//     height: 1.69,

//     calcBMI: function () {
//         return this.weight / this.height ** 2
//     }
// };
// console.log(mark.calcBMI());

// const john = {
//     fisrtName: `John`,
//     lastName: `Smith`,
//     weight: 92,
//     height: 1.95,

//     calcBMI: function () {
//         this.BMI = this.weight / this.height ** 2;
//         return this.BMI
//     }
// };
// console.log(john.calcBMI());
// console.log(`${mark.fisrtName} ${mark.lastName} has the higher BMI of ${mark.calcBMI()} while ${john.fisrtName} ${john.lastName} only has a BMI of ${john.calcBMI()}.`)

//🐱‍👤


const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const total = [];

for (let i = 0; i < bills.length; i++) {

    const tip = bills[i] <= 300 && bills[i] >= 50 ? bills[i] * 0.15 : bills[i] * 0.20;
    tips.push(tip);

    const tota = tips[i] + bills[i];
    total.push(tota)

}
console.log(tips, total);

const calcAverage = function (arr) {
    const sum = arr[i]
}


