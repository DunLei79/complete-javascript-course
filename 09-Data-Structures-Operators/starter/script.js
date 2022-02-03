'use strict';

// Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
// const weekdays = ['mon','thu','wed','thu','fri','sat','sun'];
// const openingHours =  {
//   thu: {
//     open: 12,
//     close: 22,
//   },
//   fri: {
//     open: 11,
//     close: 23,
//   },
//   [weekdays[5]]:{
//     open: 0, // Open 24 hours
//     close: 24,
//   },
// };

// const restaurant = {
//   rname: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],

//   openingHours,
  

  
  
//   order(starterIndex, mainIndex){
//     return [this.starterMenu[starterIndex],this.mainMenu[mainIndex]];
//   },
//   orderPasta: function(ing1,ing2,ing3){
//     console.log(`Here is your food with ${ing1} ${ing2} ${ing3} eat up.`);
//   }
// };

// 🐱‍🏍Let's build a simple poll app!

// A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

// Here are your tasks:

// 1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
//   1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
//         What is your favourite programming language?
//         0: JavaScript
//         1: Python
//         2: Rust
//         3: C++
//         (Write option number)
  
//   1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
// 2. Call this method whenever the user clicks the "Answer poll" button.
// 3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
// 4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

// HINT: Use many of the tools you learned about in this and the last section 😉

// BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

// BONUS TEST DATA 1: [5, 2, 3]
// BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

// GOOD LUCK 😀



// const poll = {
//   question: 'What is your favourite programming language?',
//   options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
//   // This generates [0, 0, 0, 0]. More in the next section 😃
//   answers: new Array(4).fill(0),
   
// };
 
  


//✨Call and Apply method

// const lufthansa ={
//   airline:'Lufthansa',
//   aitaCode:'LH',
//   booking:[],
//   Planes:300 ,
//   book(flightNum,name){
//     console.log(
//       `${name} booked seat on ${this.airline}flight ${this.aitaCode}${flightNum}`
//     );
//     this.booking.push({flight:`${flightNum}${this.aitaCode} ${name}`});
//   },
// };

// lufthansa.book(239,`Duncan Leite`);
// lufthansa.book(876,`Marga Leite`);
// console.log(lufthansa);

// const eurowings = {
//   airline:`Eurowings`,
//   aitaCode:`EW`,
//   booking:[],
// };

// const book = lufthansa.book;
//✨ // Call Method 
// book.call(eurowings,23,`Zoey Leite`);
// console.log(eurowings)
// book.call(lufthansa,303,` Quinton Leite`)

//✨ //Apply Method
// const flightData = [505,'Crista Leite'];
// book.apply(lufthansa,flightData);
// console.log(lufthansa);

// book.call(eurowings,...flightData);
// console.log(eurowings);

//✨ //Bind method

// const bookEW = book.bind(eurowings);

// bookEW(10, 'Lee-Andra Leite');
// console.log(eurowings);

// const book23 = book.bind (eurowings,23);

// book23(`Giovani Trippodi`)
// console.log(eurowings)



//✨with event listeners 

// lufthansa.planes = 300;
// lufthansa.buyPlane = Function(){
//   console.log(this);
  
//   this.planes++;
//   console.log(this.planes)
// };
// document.querySelector('.buy').addEventListener('click',lufthansa.buyPlane.bind(lufthansa));

//✨Partial application
// const addTax = (rate, value) => value+value * rate;
// console.log(addTax(0.1,200));

// const addVAT = addTax.bind(null,0.23);

// console.log(addVAT(100));
// console.log(addVAT(23));
//🐱‍👤
// const taxMan = rate => value => value+value *rate;
// console.log(taxMan(0.1)(200));

// const VatMan = taxMan(0.23);
// console.log(VatMan(100));
// console.log(VatMan(200));

//✨Function Returning functions//Closure

// const greet =function(greeting){
//   return function(name){
//     console.log(`${greeting} to ${name} and`);
//   }
// }

// const greetarrow = (greeting) => {
//   return (name)=>{
//     console.log(`${greeting} ${name}`)
//   }
// }
// const arrowgreet = greeting => name => console.log(`${greeting} ${name}`);//one line arrow function

// arrowgreet(`Arrow`)(`one line`);

// greetarrow(`it`)(`works!`)
// const greeterHey = greet(`Hey`)
// greeterHey(`Duncan`);
// greeterHey(`Marga`);

// greet(`Hello`)(`Duncan`);


///////////////////////////////////
//✨Functions // call back functions
// const oneWord = function(str){
//   return str.replace(/ /g, '').tolowercase();
// } 

// const upperFirstWord = function(str){
//   const[first, ...others] = str.split(' ');
//   return [first.toUpperCase(),...others].join(' ');
// };

// const transformer = function(str, fn){
//   console.log(`Original string:${str}`);
//   console.log(`transformed string: ${fn(str)}`);

//   console.log(`tranceformed by:${fn.name}`)
// }

// transformer('Java script is the best',upperFirstWord);



//////////////////////////////////////////////
//✨Strings PART 2 
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

  
//   for(const line of flights.split('+')){
//    const first = line.toLowerCase().replace(/;/g,' ').replace(/_/g,' ').trim();

//    console.log(first)
//  }
  
  


/////////////////////////////////////////////////
//✨Strings PART 2 
/*const airline = `TAP Air Portugal`
console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

//real world fix
const passenger = 'DuNCan';
const passengerLower = passenger.toLowerCase();
const passengerCorrect = passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

// use input mail comparing emails.
const email = 'duncan@yahoo.com'
const loginEmail = '   DunCaN@YAHoo.com \n';
// const lowerEmail = loginEmail.toLowerCase();
// const trimmed = lowerEmail.trim();

const fixedEmail = loginEmail.toLowerCase().trim();
console.log(fixedEmail);

//replacing 
const priceGB = '288,97%';
const priceUS = priceGB.replace('%', '$').replace(',','.')
console.log(priceUS)

const announcement = 'All passenger come to door 23. Boarding door 23.';
const fixedAnnoucement = announcement.replace(/door/g, 'gate');
console.log(fixedAnnoucement);

//Booleans
const plane = 'Air A320neo'
console.log(plane.includes('A320'));
console.log(plane.includes('boeing'));
console.log(plane.startsWith('Air' ));

if(plane.startsWith('Air')&&plane.endsWith('neo')){
  console.log('Part of thr new Airbus line')
};

//Practice

const checkBaggage = function(items){
  const baggage = items.toLowerCase();// first step to get everyting and compare from the one standard.
  if(baggage.includes('knife') || baggage.includes('gun')){
    console.log("You cant board the plane")
  }else {
    console.log('safe journey')
  }
};

checkBaggage('I have A Laptop And a pocket Knife.');
checkBaggage('Socks and camerA');
checkBaggage('Got same snakes and a gun for protection');
*/

/*
///////////////////////////////////
//✨Strings PART1 

const airline = `TAP Air Portugal`
const plane = `A320`

console.log(plane[0])
console.log(plane[1])
console.log(plane[2])
console.log(`b373`[0])
console.log(airline.length)
console.log(`b737`.length)

console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));// lasst R in srting
console.log(airline.indexOf('Portugal'))//word search 

console.log(airline.slice(4));//split string
console.log(airline.slice(4,7));//split string last -begining 7-4 in this case

console.log(airline.slice(0, airline.indexOf(' ')))//lookin at the first space index  
console.log(airline.slice(airline.lastIndexOf(' ') + 1))//looking at the last space in the string, +1 is to remive space.

console.log(airline.slice(-2));
console.log(airline.slice(1,-1));

const checkMiddleSeat = function(seat){
const s = seat.slice(-1);
if (s === 'B' || s === 'E'){
  console.log('You have the midde;😢')
} else{
  console.log('Lucky window seat😁')
}
};

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');
*/

//////////////////////////////////////////////////////
// ✨const question = new Map([
//   ['question','What is the best programming language in the world?'],
//   [1, 'c'],
//   [2, 'java'],
//   [3,'Java Script'],
//   ['correct', 3],
//   [true,'Correct'],
//   [false,'Incorrect'],
// ]);
// console.log(question);

// //convert Object to map
// const hoursMap =new Map(Object.entries(openingHours));
// console.log(hoursMap);


// //quiz App
// console.log(question.get('question'))
// for (const [key, value] of question){
//   if (typeof key === 'number')console.log(`Answer ${key}:${value}`)
// };

// const answer = Number(prompt(`your answer`));
// console.log(answer)

// answer === 3 ?console.log(question.get(true)): console.log(question.get(false));
// //convert map to array
// console.log([...question]);
// console.log([question.entries()]);

  
//////////////////////////////////////////////////////////
// //✨Maps

// const rest = new Map();
// rest.set('name', 'Duncan Leite');
// rest.set(1, 'windhoek,  namibia');
// rest.set(2, 'CPT, South africa');

// rest
// .set('categories',['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
// .set('open', 11)
// .set('close',23)
// .set(true, 'We are open')
// .set(false, 'We are open');

// console.log(rest.get('open'))
// console.log(rest.get(true))
// console.log(rest.get('name'))
// console.log(rest.get(2))

// const time = 21;
// console.log(rest.get(time > rest.get('open') && time < rest.get('closed')));

// console.log(rest.has('categories'))
// rest.delete(1);
// console.log(rest.size);
// rest.set([1,2],'test');
// console.log(rest);


/////////////////////////////////////
//✨Sets

// const orderSet = new Set(['pasta','pizza', 'pizza', 'pasta','pasta','risotto']);
// console.log(orderSet)
// console.log(orderSet.size)
// console.log(orderSet.has('pizza'))
// console.log(orderSet.has('bread'))
// orderSet.add('toast')
// orderSet.delete('pasta')
// console.log(orderSet) 


/////////////////////////////////
//✨Looping Ojects
//Property NAMES

// const properties = Object.keys(openingHours);
// console.log(properties);

// let openStr = `We are ${properties.length} days a week-`;
// for(const day of properties){
//   openStr += `${day},`;
  
// }
// console.log(openStr);

// //✨Property VALUES
// const values  = Object.values(openingHours);
// console.log(values);

// //✨Entire Object
// const entries = Object.entries(openingHours);
// console.log(entries);

// for (const [key, {open, close}]of entries){
//   console.log(`On ${key} we are open at ${open} and close on ${close}.`);
// }



////////////////////////////////////////////////////////

//✨OPtinal Chaining
// if (restaurant.openingHours && restaurant.openingHours.mon)
//   console.log(restaurant.openingHours.mon.open);
  //console.log(restaurant.openingHours.mon.open)

  //with Optional Chaining
 // if (restaurant.openingHours.mon?.open)
  // console.log(restaurant.openingHours?.mon?.open) 
 
  //❗ Example
  // const days = ['mon','thu','wed','thu','fri','sat','sun'];
  // for(const day of days){
  //   const open = restaurant.openingHours[day]?.open ?? 'closed'; // ||or closed used ?? because of the 0 value in the object.
  //   console.log(`On ${day} we are ${open}`)
  // };

  //methods
  // console.log(restaurant.order?.(0,1) ?? 'Does not exist');  // ? will check if it exsits.
  // console.log(restaurant.ordertest?.(0,1) ?? 'Does not exist');

//Arrays


///////////////////////////////////
//Looping Arrays:The for of loop
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// for(const item of menu) console.log(item);

// for(const [item, element] of menu.entries()){
//   console.log(`${item + 1}:${element}`);
// };



///////////////////////////////////////////////////////////
//✨
// const rest1 = {
//   name:`Giovani's`,
//   numGuests:0,
// };

// const rest2 = {
//   name:`Leite 's`,
//   owner:`Duncan`,
// };


// OR Assignment Operater
// rest1.numGuests = rest1.numGuests||10;
// rest2.numGuests = rest2.numGuests||10;
// rest1.numGuests ||=10;
// rest2.numGuests ||=10;
// console.log(rest1.numGuests, rest2.numGuests);

//nullish assigment
// rest1.numGuests ??=10;
// rest2.numGuests ??=10;

// rest2.owner && rest2.owner && ``

// console.log(rest1.numGuests, rest2.numGuests);

////////////////////////////////
// restaurant.numGuests = 0;
// const guest = restaurant.numGuests ||10;
// console.log(guest);

// const guestCorrect = restaurant.numGuests ?? 10;
// console.log(guestCorrect);

//const {rname, openingHours, categories} = restaurant;
//console.log(rname, openingHours, categories);

// const {rname: restaurantName,
//        openingHours: hours,
//        categories: tags,
//         } = restaurant;
//         console.log(restaurant, hours, tags);
 
// const{menu = [], starterMenu: starters = []}  = restaurant;
//console.log(menu, starters);

//✨
// use any data type, sort circuiting
// console.log(3 || `Duncan`);
// console.log(``||`duncan`);
// console.log(true||0);
// console.log(undefined||null);

// console.log(`----OR----`)
// //restaurant.numGuests = 23;
// const guest1 =  restaurant.numGuests ? restaurant.numGuests:10;
// console.log(guest1);

// const guest2 = restaurant.numGuests ||10;
// console.log(guest2);

// console.log(`----AND----`);
// console.log(0&&`duncan`);
// console.log(`hello`&&23&&null&&`duncan`);



//////////////////////////////////////////////////////
//✨ mutate variables
// let a = 111;
// let b = 999;
// const obj = {a:23, b:7, c:14};
// ({a, b} = obj);
// console.log(a,b);

//✨ nested hours\
//const {fri: {open:o, close:c}} = openingHours

// const arr =[ 7,8,9];
// const extra = [1,2,3,...arr];
// console.log(extra)
// console.log(...extra)
// const newMenu = [...restaurant.mainMenu, `braai vleis`];
// console.log(newMenu);

//✨join 2 or more arrays

// const menuAll = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(...menuAll);

//✨ iterable:
// const ingredients = [
//   prompt(`Let's make pasta what is ingredient 1?`), 
//   prompt(`and the second incrdient`), 
//   prompt(`last one pls.`)];

//   restaurant.orderPasta(...ingredients)

// 1) Destructuring
  //✨//rest parameters
  
  // const [x,y,...rest] = [1,2,3,4,5];
  // console.log(x, y, rest);

  // const[pizza, , risotto,...otherfood] = [
  //   ...restaurant.mainMenu, 
  //   ...restaurant.starterMenu];

  // console.log(pizza,risotto,otherfood);

  // //✨Objects
  // const {sat, ...weekdays} = restaurant.openingHours;
  // console.log(weekdays);

 // 2)Function 
  //✨

  // const add = function(){};


  
  



// const [starter, main] = restaurant.order(2, 0);
// console.log(starter ,main)

// const nested =[2,4];
// // const [i, ,j] = nested;
// // console.log(i,j);
// // const [i, ,[j,k]] = nested;
// // console.log(i,j,k)
// // console.log(i);
// // console.log(k);

// // defualt values
// const[p=1, q=1, r=1] = nested;
// console.log(p,q,r);


