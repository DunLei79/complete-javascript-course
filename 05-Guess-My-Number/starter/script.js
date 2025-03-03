'use strict';

// document.querySelector(`.message`);
// console.log(document.querySelector(`.message`).textContent);
const x = function () {
  console.log(23);
};
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;


document.querySelector(`.check`).addEventListener(`click`, function () {
  const guess = Number(document.querySelector(`.guess`).value);

  console.log(guess, typeof guess);

  //when there is no input
  if (!guess) {
    document.querySelector(`.message`).textContent = `⛔No Number`;
    document.querySelector(`.number`).textContent = secretNumber;
    //when player wins
  } else if (guess === secretNumber) {
    document.querySelector(`.message`).textContent = `Correct Number!🎉`;
    document.querySelector(`.number`).textContent = secretNumber;
    document.querySelector(`body`).style.backgroundColor = `#60b347`;
    document.querySelector(`.number`).style.width = `30rem`;

    if(score > highscore){
      highscore = score;
      document.querySelector(`.highscore`).textContent = highscore;
    }
// when guess is wrong 
  } else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector(`.message`).textContent = guess > secretNumber ? `Too high try again.`: `Too low try again.`;
      score--;
      document.querySelector(`.score`).textContent = score;
    } else {
      document.querySelector(`.message`).textContent = `You lost the game.🥺`;
    }
  }
  //  else if (guess > secretNumber) {

  //   //too hight
  //   if (score > 1) {
  //     document.querySelector(`.message`).textContent = `Too high try again.`;
  //     score--;
  //     document.querySelector(`.score`).textContent = score;
  //   } else {
  //     document.querySelector(`.message`).textContent = `You lost the game.🥺`;
  //   }
  // } else if (guess < secretNumber) {

  //   //too low
  //   if (score > 1) {
  //     document.querySelector(`.message`).textContent = `Too low try again.`;
  //     score--;
  //     document.querySelector(`.score`).textContent = score;
  //   } else {
  //     document.querySelector(`.message`).textContent = `You lost the game.🥺`;
  //   }
  // }
});

document.querySelector(`.again`).addEventListener(`click`, function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector(`.message`).textContent = `Start guessing...`
  document.querySelector(`.score`).textContent = score
  document.querySelector(`.number`).textContent = `?`
  document.querySelector(`.guess`).value = ``
  document.querySelector(`body`).style.backgroundColor = ` #222`;
  document.querySelector(`.number`).style.width = `15rem` 
});

// document.querySelector(`.message`).textContent = `Correct Number!`;
// document.querySelector(`.message`);
// console.log(document.querySelector(`.message`).textContent);

// document.querySelector(`.number`).textContent = 13;
// document.querySelector(`.score`).textContent = 10;
// document.querySelector(`.guess`).value = 23;
