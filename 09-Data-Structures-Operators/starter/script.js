'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  rname: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  
  order: function(starterIndex, mainIndex){
    return [this.starterMenu[starterIndex],this.mainMenu[mainIndex]];
  },
  orderPasta: function(ing1,ing2,ing3){
    console.log(`Here is your food with ${ing1} ${ing2} ${ing3} eat up.`);
  }
};

const {rname, openingHours, categories} = restaurant;
//console.log(rname, openingHours, categories);

const {rname: restaurantName,
       openingHours: hours,
       categories: tags,
        } = restaurant;
        //console.log(restaurant, hours, tags);
 
const{menu = [], starterMenu: starters = []}  = restaurant;
//console.log(menu, starters);

//✨ mutate variables
let a = 111;
let b = 999;
const obj = {a:23, b:7, c:14};
({a, b} = obj);
console.log(a,b);

//✨ nested hours\
const {fri: {open:o, close:c}} = openingHours

const arr =[ 7,8,9];
const extra = [1,2,3,...arr];
console.log(extra)
console.log(...extra)
const newMenu = [...restaurant.mainMenu, `braai vleis`];
console.log(newMenu);

//✨join 2 or more arrays

const menuAll = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(...menuAll);

//✨ iterable:
// const ingredients = [
//   prompt(`Let's make pasta what is ingredient 1?`), 
//   prompt(`and the second incrdient`), 
//   prompt(`last one pls.`)];

//   restaurant.orderPasta(...ingredients)

  //✨//rest parameters
  
  const [x,y,...rest] = [1,2,3,4,5]
  console.log(x,y,rest)

  


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
