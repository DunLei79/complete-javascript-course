'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const weekdays = ['mon','thu','wed','thu','fri','sat','sun'];
const openingHours =  {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]:{
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  rname: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours,
  

  
  
  order(starterIndex, mainIndex){
    return [this.starterMenu[starterIndex],this.mainMenu[mainIndex]];
  },
  orderPasta: function(ing1,ing2,ing3){
    console.log(`Here is your food with ${ing1} ${ing2} ${ing3} eat up.`);
  }
};

//✨Looping Ojects

for(const day of Object.keys(openingHours)){
  console.log(day);
}

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

  // //methods
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
