'use strict';
// function discribeCountry(county, population, capitalCity) {
//     const countries = `${county} has ${population} million people and its capital is ${capitalCity}`
//     return countries;
// }

// discribeCountry('Finland', 6, 'Helsinki');

// const finland = discribeCountry('Finland', 6, 'Helsinki');
// const england = discribeCountry('England', 10, 'London');
// const southAfrica = discribeCountry('South Africa', 46, 'Pretoria');

// console.log(finland);
// console.log(england);
// console.log(southAfrica);

//✨
// function percentageOfWorld(population) {
//     return (population / 7900) * 100;
// }
//const percentageOfChina = percentageOfWorld(1441)
// const percentageOfsouthAfrica = percentageOfWorld(46)
// const percentageOfRussa = percentageOfWorld(144)
//console.log(`China population percentage ${percentageOfChina}`)
// console.log(`South Africa population percentage ${percentageOfsouthAfrica}`)
// console.log(`Russa popuation percentage ${percentageOfRussa}`)

//function expression
//const percentageOfWorld = function (population) {
//    return (population / 7900) * 100;
//}
// const percentageOfChina = percentageOfWorld(1441)
// const percentageOfsouthAfrica = percentageOfWorld(46)
// const percentageOfRussa = percentageOfWorld(144)
// console.log(`China population percentage ${percentageOfChina}`)
// console.log(`South Africa population percentage ${percentageOfsouthAfrica}`)
// console.log(`Russa popuation percentage ${percentageOfRussa}`)

//✨


// const percentage = percentageOfWorld3 => percentageOfWorld3 / 7900 * 100;
// const chinaPercentage = percentage(1441);
// const southAfricapercentage = percentage(46);
// const russaPercentage = percentage(144);

// console.log(`China has a averege of ${chinaPercentage} and South Africa has ${southAfricapercentage} then Russa is ${russaPercentage}.`)


// //✨

// const percentageOfWorld = function (population) {
//     return (population / 7900) * 100;
// }



// const describePopulation = function (country, population) {
//     const percentage = percentageOfWorld(population);
//     const description = `${country} has ${population} and ${percentage}`;
//     return (description);
// }

// console.log(describePopulation('china', 1441));
// console.log(describePopulation('South Africa', 46));
// console.log(describePopulation('Russa', 144));

// //✨ Introduction to Arrays
// const population = [46, 144, 1441, 7];
// console.log(population.length >= 4)
// const percentages = []

// const percentageOfWorld = function (population) {
//     return (population / 7900) * 100;
// }
// console.log(percentageOfWorld(population[0]), percentageOfWorld(population[1]), percentageOfWorld(population[2]), percentageOfWorld(population[population.length - 1]))

// //✨Basic Array Operators

// const neighbours = [`Namibia`, `Botswana`, `Zimbabwe`];

// neighbours.push(`Utopia`);
// console.log(neighbours);
// const old = neighbours.pop();
// console.log(neighbours);

// if (old != `germany`) {
//     console.log(`Probably not central european county😁.`)
// }

// console.log(neighbours.indexOf(`Zimbabwe`))
// neighbours[2] = `Durban`;
// console.log(neighbours)

// //✨
// const myCountry = {
//     country: `South Africa`,
//     capital: `Pretoria`,
//     language: `Afrikaans`,
//     population: 46,
//     neighbours: [`namibia`, `zimbabwe`, `botswana`],


//     discribe: function () {
//         return `${this.country} has ${this.population} million South Africans same speak ${this.language} with ${this.neighbours.length} neighbouring countries and a capital ${this.capital}`
//     }
// };
// myCountry.isIsLand = false;
// console.log(myCountry.discribe());

// console.log(`${myCountry.country} has ${myCountry.population} million South Africans same speak ${myCountry.language} with ${myCountry.neighbours.length} neighbouring countries and a capital ${myCountry.capital} and  ${myCountry.isIsLand ? `it is` : `not`} a Island.`)

//✨loops

// for (let i = 1; i <= 50; i++) {
//     console.log(`Voter number ${i} is currently voting`)
//}
// const population = [46, 144, 1441, 7];
//const percentages2 = [];
//const percentages3 = [];



// for (let i = 0; i < population.length; i++) {
//     const perc = (population[i] / 7900) * 100;
//     percentages2.push(perc)

// }
// console.log(percentages2)

// let i = 0;
// while (i < population.length) {
//     const perc = (population[i] / 7900) * 100;
//     percentages3.push(perc);
//     i++;
// }
//console.log(percentages3);

//❗❗
// const listOfNeighours = [
//     [`canada`, `Mexico`],
//     [`Spain`],
//     [`Norway`, `Sweden`, `Russia`]
// ]
// for (let i = 0; i < listOfNeighours.length; i++)
//     for (let y = 0; y < listOfNeighours[i].length; y++)

//         console.log(`Neighbour: ${listOfNeighours[i][y]}`);






