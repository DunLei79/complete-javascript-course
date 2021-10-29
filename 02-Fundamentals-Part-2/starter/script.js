// 'use strict';

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


function fruitProcessor(apples, oranges) {
    const juice = `juice with ${apples} appels and ${oranges} oranges.`;
    return juice;
