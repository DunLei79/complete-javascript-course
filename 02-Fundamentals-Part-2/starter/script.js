'use strict';

// let hasDriversLicence = false;
// const passTest = true;

// if (passTest) {
//     hasDriversLicence = true;

// }
// if (hasDriversLicence) {
//     console.log(`i can drive`)
// }

// //✨ Functions
// function logger() {
//     console.log(`My name is Duncan`)
// }

// logger(); //calling running or invoking the function
// logger();

// function fruitProcessor(apples, oranges) {
//     const juice = `juice with ${apples} appels and ${oranges} oranges.`;
//     return juice;
// }
// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(2, 3);
// console.log(appleOrangeJuice);

// //✨function declerations vs Expression
//❗decletations
// function calAge1(birthYear) {
//     return 2037 - birthYear;

// }
// const age1 = calAge1(1991);


// ❗Expression
// const calAge2 = function (birthYear) {
//     return 2037 - birthYear;
// }
// const age2 = calAge2(1991);
// console.log(age1, age2);

//❗Arrow function

// const calAge3 = birthYear => 2037 - birthYear;
// const age3 = calAge3(1991);
// console.log(age3);

// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = 2021 - birthYear;
//     const retirement = 65 - age;
//     const payslips = retirement * 12;
//     return `${firstName} will retire in ${retirement} years and only has ${payslips} payslips left .`
// }
// // const retire = yearsUntilRetirement(1979, `Duncan`)
// // console.log(retire);
// const retire = yearsUntilRetirement(1987, `Marga`)
// console.log(retire);


// function cutFruitPieces(fruit) {
//     return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//     const applepieces = cutFruitPieces(apples);
//     const orangepieces = cutFruitPieces(oranges);

//     const juice = `juice with ${applepieces} pieces of appels and ${orangepieces} pieces of oranges.`;
//     return juice;
// }
// console.log(fruitProcessor(2, 0))

// const calcAge = function (birthYear) {
//     return 2021 - birthYear;

// }
// const yearsUntilRetirement = function (birthYear, firstName) {
//     const age = calcAge(birthYear)
//     const retirement = 65 - age;
//     const payslips = retirement * 12;

//     if (retirement > 0) {
//         console.log(`${firstName} will retire in ${retirement} years and only has ${payslips} payslips left .`)
//         return retirement;
//     } else {
//         return -1;
//     }
// }

// const retire = yearsUntilRetirement(1979, `Duncan`)
// console.log(retire);

// // ✨Arrays

// const friend1 = `micheal`;
// const friend2 = `steven`
// const friend3 = `duncan`

// const friends = [`micheal`, `steven`, `duncan`];
// //const years = new Array(2000, 2020, 2021);

// console.log(friends);
// console.log(friends[0]);
// console.log(friends[2]);
// console.log(friends.length);
// console.log(friends[friends.length - 1]);

// friends[2] = `Marga`
// console.log(friends);
//friends = [`duncan`, `jan`]

// const firstName = `Duncan`
// const duncan = [firstName, `Leite`, 2021 - 1979, `manger`, friends]
// console.log(duncan)

//exercise

// const calAge = function (birthYear) {
//     return 2037 - birthYear;
// }
// const years = [1990, 1967, 2002, 2010, 2018]
// const age1 = calAge(years[0]);
// const age2 = calAge(years[1]);
// const age3 = calAge(years[years.length - 1]);
// console.log(age1, age2, age3);

// const ages = [calAge(years[0]), calAge(years[1]), calAge(years[years.length - 1])];
// console.log(ages);

// //✨Array Operations

// const friends = [`Micheal`, `Steven`, `Duncan`];
// const newLength = friends.push(`Marga`);
// console.log(friends);
// console.log(newLength);

// friends.unshift(`Ballas`);
// console.log(friends);
// //remove

// const poppedFriend = friends.pop();
// console.log(friends);
// console.log(poppedFriend)
// friends.shift();
// console.log(friends)
// console.log(friends.indexOf(`Steven`));
// console.log(friends.indexOf(`bob`));

// console.log(friends.includes(`Steven`))
// console.log(friends.includes(`bob`))

// if (friends.includes(`Steven`)) {
//     console.log(`You have a friend called Steven.`)

// }

// //✨Object Dot vs Bracket Notation

// const duncan = {
//     firstName: `Duncan`,
//     lastName: `Leite`,
//     age: 2021 - 1979,
//     job: `manger`,
//     friends: [`Marga`, `Lara`, `Jane`]
// };
// console.log(duncan.lastName);
// console.log(duncan[`lastName`]);

// const nameKey = `Name`;
// console.log(duncan[`first` + nameKey])
// console.log(duncan[`last` + nameKey])

// const interestedIn = prompt(`What do you want to know about Duncan? Choose between firstName, lastName, age, job, or friends. `);
// console.log(duncan[interestedIn]);

// if (duncan[interestedIn]) {
//     console.log(duncan[interestedIn])
// } else {
//     console.log(`Wrong choose again.What do you want to know about `)
// }

// duncan.location = `South Africa`;
// duncan[`twitter`] = `@tweet`;
// console.log(duncan)

// console.log(`${duncan.firstName} has ${duncan.friends.length} friends and his best friend is ${duncan.friends[0]}`);

// //✨Object methods

// const duncan = {
//     firstName: `Duncan`,
//     lastName: `Leite`,
//     birthYear: 1979,
//     job: `manager`,
//     friends: [`Marga`, `Lara`, `Jane`],
//     hasDriverLicense: true,

// calcAge: function (birthYear) {
//     return 2021 - birthYear;
// }

// calcAge: function () {
//     return 2021 - this.birthYear;
// }
//     calcAge: function () {
//         this.age = 2021 - this.birthYear;
//         return this.age;
//     },

//     getSummary: function () {
//         return `${this.firstName} is a ${this.calcAge()}-years old ${this.job}, and he has ${this.hasDriverLicense ? `a` : `no`} driver license.`
//     }
// };

// console.log(duncan.calcAge());
// console.log(duncan.age);
// console.log(duncan.getSummary())


// // ✨Loops

// for (let rep = 1; rep <= 10; rep++) {
//     console.log(`rep${rep}`)
// };

// const duncan = [
//     `Duncan`,
//     `Leite`,
//     2021 - 1979,
//     `manger`,
//     [`Marga`, `Lara`, `Jane`],
//     true
// ];

// const types = [];

// for (let i = 0; i < duncan.length; i++) {
//     //reading array
//     //console.log(duncan[i], typeof duncan[i]);

//     //filling Array
//     //types[i] = typeof duncan[i];

//     types.push(typeof duncan[i]);
// };
// console.log(types);

// const years = [1990, 1967, 2002, 2010, 2018];
// const ages = [];

// for (let i = 0; i < years.length; i++) {
//     ages.push(2021 - years[i]);

// };
// console.log(ages)

// //❗continue and break
// console.log(`only strings`)
// for (let i = 0; i < duncan.length; i++) {
//     if (typeof duncan[i] !== `string`) continue;

//     console.log(duncan[i], typeof duncan[i]);
// }
// //❗Break with number
// console.log(`Break with number`)
// for (let i = 0; i < duncan.length; i++) {
//     if (typeof duncan[i] === `number`) break;

//     console.log(duncan[i], typeof duncan[i]);
// }

//✨
// const duncan = [
//     `Duncan`,
//     `Leite`,
//     2021 - 1979,
//     `manger`,
//     [`Marga`, `Lara`, `Jane`],
// ];

// for (let i = duncan.length - 1; i >= 0; i--) {
//     console.log(i, duncan[i]);
// }

// //❗ loop in loop
// for (let exercise = 1; exercise < 4; exercise++) {
//     console.log(`start exercise ${exercise}`);

//     for (let rep = 1; rep <= 5; rep++) {
//         console.log(`Exercise${exercise}:lifting weight${rep}🏋️‍♂️`)
//     }
// }

//❗ while loop

//for (let rep = 1; rep <= 10; rep++) {
//   console.log(`rep${rep}`)
//}

// let rep = 1;
// while (rep <= 10) {
//     console.log(`rep${rep}while loop`);
//     rep++;
//}

//let dice = Math.trunc(Math.random() * 6) + 1;
//console.log(dice);

//while (dice !== 6) {
   // console.log(`${dice}`);
   // dice = Math.trunc(Math.random() * 6) + 1;

   // if (dice === 6) {
   //     console.log(`the end`)
  //  }
//}
