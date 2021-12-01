const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
      [
        'Neuer',
        'Pavard',
        'Martinez',
        'Alaba',
        'Davies',
        'Kimmich',
        'Goretzka',
        'Coman',
        'Muller',
        'Gnarby',
        'Lewandowski',
      ],
      [
        'Burki',
        'Schulz',
        'Hummels',
        'Akanji',
        'Hakimi',
        'Weigl',
        'Witsel',
        'Hazard',
        'Brandt',
        'Sancho',
        'Gotze',
      ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
      team1: 1.33,
      x: 3.25,
      team2: 6.5,
    },
      printerGoals: function(...numbers){
        
    },

  };

/*const [players1, players2] = game.players;
console.log(players1,players2);
  
const [gk,...fieldPlayers] = players1;
  console.log(gk, fieldPlayers);
 
const allPlayers = [...players1, ...players2];
    console.log(allPlayers);

const  players1Final = [...players1,`Thiago`, `Coutinho`, `Perisic`];
    console.log(players1Final); 
  
const {odds:{team1:team1, x:draw, team2:team2}} = game;
    console.log(draw);


//6
    const printerGoals = function(...players){
        console.log(`${players.length} goals scored.`)
    };
    printerGoals('Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels')
    printerGoals('Lewandowski', 'Gnarby')
    printerGoals(...game.scored);

//7.
 team1 < team2 && console.log(`team1 winning`)
*/

 //🐱‍👤Challenge 2

//1.
// const player = [...game.scored];
// for(const item of player)console.log(item);

// for (const [item, element] of player.entries()){
//   console.log(`Goal ${item +1} scorde by ${element}.`)
// };

//2.Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)

// const keyz = Object.keys(game.odds)
// console.log(keyz);

// const gOdds = Object.values(game.odds);// refactoring 
// let average = 0;
// for( const odd of gOdds)
// average += odd;
// average /= gOdds.length // average / 3 
// console.log(average);
// const ent = Object.entries(game.odds)

// for( const [oddName,oddNum] of ent) console.log(oddNum)
// let str = `odds are ${oddNum}` 

// 3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
//       Odd of victory Bayern Munich: 1.33
//       Odd of draw: 3.25
//       Odd of victory Borrussia Dortmund: 6.5
// Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉
// for(const [team,odd] of Object.entries(game.odds)){

//   console.log(`${odd} ${team}`)
// }

//🐱‍👤 Challenge 3
/* 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL
*/

const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

// //1.
// const events = [...new Set(gameEvents.values())]
// console.log(events)

  
// //2.
// gameEvents.delete(64);
// console.log(gameEvents)

// //3.
// const calAvr = 90 / gameEvents.size 
// console.log(gameEvents.size)
// console.log(calAvr)

// //4.
// for(const [key, value] of gameEvents){
//   const half = key <= 45? 'First':'Second'
//   console.log(`[${half} half] ${key}:${value}`)
//   //key < 45 ? console.log(`[First half]${key}:${value}`):console.log(`[Second half]${key}:${value}`)
// }; 

//🐱‍👤 Coding Challenge #4

/* 
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!

GOOD LUCK 😀
*/

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  const rows = text.split('\n');

  for (const [i, row] of rows.entries()) {
    const [first, second] = row.toLowerCase().trim().split('_');

    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    console.log(`${output.padEnd(20)}${'✅'.repeat(i + 1)}`);
  }
});