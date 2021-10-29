// const county = "South Africa";
// const continent = "Africa";
// const population = 46;
//let isIsland = false;
// let language = "null";
// let finland = 6;
// let averagePop = 33;
// let description = `Portugal is in Europe, and its 11 million people speak portuguese.`
// let halfPop = population / 2

// // ✨Data Types
// console.log(typeof isIsland);
// console.log(population);
// console.log(county);
// console.log(language)

// //✨let , const and var
//language = "afrikaans"
// console.log(language);
// console.log(halfPop);
// console.log(halfPop += 1);
// console.log(population > finland);
// console.log(averagePop < population);
// console.log(description)

// //✨if else Statmenst
// if (population > 33) {
//     console.log(`Portugal population is above avarage`)
// } else {
//     console.log(`Portugal population is 22 milion below average.`)
// }
// //✨String and Template literals
// const fisrtName = "Duncan";
// co job = 'manager';
//const birthYear = 1979;
// const year = 2037;

// const duncan = 'My Name is ' + fisrtName + ' and ' + (year - birthYear) + ' years old I work as a ' + job + '.';
// console.log(duncan);

// const duncanNew = `My name is ${fisrtName} and ${year - birthYear} yeasr old, I work as a ${job}.`;
// console.log(duncanNew);
// //multy line string
// console.log(`1line
// 2line`)

// ✨if else statments
// const age = 15;


// if (age >= 18) {
//     console.log(`Sara can drive.👍`)
// } else {
//     const yearsleft = 18 - age
//     console.log(`to young sorry😒 ${yearsleft} more years befor you can drive.`);
// }

// let century;

// if (birthYear <= 2000) {
//     century = 20;
// } else {
//     century = 21;
// }
// console.log(century)

// // ✨Type Convertion 
// const inputYear = '1991';
// console.log(Number(inputYear), inputYear);
// console.log(Number(inputYear) + 18);
// console.log(String(23), 23)

// //✨Type  Coercion
// console.log()
//console.log('5' + '6' + '4' + 9 - 4 - 2)

//✨ // Equaliy Operator == vs ===

// const age = 18;
// if (age === 18) console.log(`big boy now`)

// const favourite = Number(prompt(`whats you farourite number`))
// console.log(favourite);

// const numNeighbours = Number(prompt(`How many neighbour countries does you county have>`));

// if (numNeighbours == 1) {
//     console.log(`Only 1 border!`)
// } else if (numNeighbours > 1) {
//     console.log(`More than one border`);
// } else if (numNeighbours === 0) {
//     console.log(`no borders`)

// }

// //✨ Truthy and falsy Values
// false values 0,'',undefined,null,NaN

// const money = 0;

// if (money) {
//     console.log(`dont spend it all`);
// } else {
//     console.log(`get a job`);
// }

// let height;
// if (height) {
//     console.log(`yay defined`)
// } else {
//     console.log(`undefined`)
// }

// //✨ Boolean Logic

// const hasDriversLicense = true; //A
// const hasGoodVision = true;    //B
// const shouldDrive = hasDriversLicense && hasGoodVision;
// const isTired = false;

// if (shouldDrive) {
//     console.log(`Marga can drive`)
// } else {
//     console.log(`let me drive`)
// }

// console

// console.log(hasDriversLicense && hasGoodVision);
// console.log(hasDriversLicense || hasGoodVision);
// console.log(!hasDriversLicense);
// console.log(hasDriversLicense || hasGoodVision || isTired);

// if (hasGoodVision && hasDriversLicense && !isTired) {
//     console.log(`Marga can drive`)
// } else {
//     console.log(`let me drive`)
// }


// const speakEnglish = prompt(`Does your country speak english?`)
// const overPOP = prompt(`How many millions of people live in your country?`)
// const isLand = prompt(`do you live on a Island?`)

// if (speakEnglish === `yes` && overPOP < 50 && isLand === `no`) {
//     console.log(`Perfect when can I move in.`)
// } else {
//     console.log(`Ill keep looking thx.`)
// }

// //✨ Switch Statement

// const day = 'frid'

// switch (day) {
//     case 'monday':
//         console.log(`it monday`);
//         break;

//     case 'tuesday':
//         console.log(`Its tuesday`);
//         break;
//     case 'wednesday':
//     case 'thursday':
//         console.log('We have 2 days');
//         break;
//     case 'friday':
//         console.log('Almost weekend');
//         break;
//     case 'saterday':
//     case 'sunday':
//         console.log('Its the weekend')
//         break;
// }

// if (day === 'monday') {
//     console.log('monday')

// } else if (day === 'tuesday') {
//     console.log('tuesday')

// } else if (day === 'wednesday' || day === 'thursday') {
//     console.log('We have 2 daysif')

// } else if (day === 'friday') {
//     console.log("It`s almost weekend")

// } else if (day === 'saturday' || day === 'sunday') {
//     console.log("It`s the weekend")
// } else {
//     console.log('invalid day')
// }

// const language = ''

// switch (language) {
//     case 'mandarin':
//         console.log('most people speak this');
//         break;
//     case 'spanish':
//         console.log('Second most spoken')
//         break;
//     case 'english':
//         console.log(`Third most`)
//         break;
//     case `hindi`:
//         console.log(`4th most`);
//         break;
//     case `arabic`:
//         console.log(`5th most spoken`);
//         break;
//     case '':
//         console.log(`all good`)
// }

// //✨ Statments and Exprestions

// //✨ Conditional (Ternary) Operator
// const age = 23
// age >= 18 ? console.log(`i like wine`) :
//     console.log(`water please`);

// const drink = age >= 18 ? `wine` : `water`;
// console.log(drink)

// console.log(`I drink ${age >= 18 ? `wine` : `water`}`)


// const portAverage = population >= 33 ? `Portugal is above avarage` `:` `Portugal is below avarage`
// console.log(portAverage)


//---------------------------------------------------------------------------------------
//🐱‍👤 //Challenge#1
// let markMass = 78;
// let markHeight = 1.69;

// let johnMass = 92;
// let johnHeight = 1.95;
// //BMI
// let bmiJohn = johnMass / johnHeight ** 2
// console.log("John BMI", bmiJohn);

// let bmiMark = markMass / markHeight ** 2
// console.log("Mark BMI", bmiMark);

// let markHeigherBMI = bmiMark > bmiJohn;
// console.log(markHeigherBMI)

//🐱‍👤 //Challenge#2
// if (bmiMark > bmiJohn) {
//     console.log(`Marks BMI (${bmiMark}) is higher than Johns BMI (${bmiJohn}).`)
// } else {
//     console.log(`John as a lower BMI.`)
// }

//🐱‍👤//Challenge#3


// const dG1T1 = 96;
// const dG2T1 = 108;
// const dG3T1 = 89;
// const dolphinsAverageT1 = (dG1T1 + dG2T1 + dG3T1) / 3;
// console.log(dolphinsAverageT1);


// const kG1T1 = 88;
// const kG2T1 = 91;
// const kG3T1 = 110;
// const koalasAverageT1 = (kG1T1 + kG2T1 + kG3T1) / 3;
// console.log(koalasAverageT1);

// if (dolphinsAverageT1 > koalasAverageT1) {
//     console.log(`Dolphins won!🥇`);
// } else if (dolphinsAverageT1 < koalasAverageT1) {
//     console.log(`Koalas won!🥇`);
// } else {
//     console.log(`Its a draw!`)
// }

// //bonus
// const dG1B1 = 97;
// const dG2B1 = 112;
// const dG3B1 = 95;
// const dolphinsAverageB1 = (dG1B1 + dG2B1 + dG3B1) / 3;
// console.log(dolphinsAverageB1);

// const kG1B1 = 109;
// const kG2B1 = 95;
// const kG3B1 = 100;
// const koalasAverageB1 = (kG1B1 + kG2B1 + kG3B1) / 3;
// console.log(koalasAverageB1);

// if (dolphinsAverageB1 > koalasAverageB1 && dolphinsAverageB1 >= 100) {
//     console.log(`Dolphins won bonus round!🥇`);
// } else if (dolphinsAverageB1 < koalasAverageB1 && koalasAverageB1 >= 100) {
//     console.log(`Koalas won bonus round!🥇`)
// } else if (dolphinsAverageB1 && koalasAverageB1 >= 100) {
//     console.log(`Bonus round draw😢`)
// } else {
//     console.log(`No winners`)
// }
//🐱‍👤 //Challenge#4

// const bill = 430;
// const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.20;
// const total = bill + tip;
// console.log(`The bill is ${bill} and the tip is ${tip} we need to pay ${total}`)







