"use strict";

/*
// 14, 15, 16, 17 Marz 2022
// select element from DOM using querySelector
console.log(document.querySelector(".message").textContent);

document.querySelector(".message").textContent = "🎉 Correct Number";

console.log(document.querySelector(".message").textContent);

// text content for manipulating the text inside a element like p tag
document.querySelector(".number").textContent = 10;
document.querySelector(".score").textContent = 20;

// value for the html element that using value like input
const val = document.querySelector(".guess").value = 15;
console.log(val);


// add interaction using addEventListener method
// didalam addEventListener terdapat event handler dengan param 1 sebagai event yang mau dijalankan
// lalu setelah param 1 dilanjutkan dengan function untuk memberi perintah
const checkBtn = document.querySelector(".check");

// add event listener to an input
checkBtn.addEventListener("click", () => {
  // selecting input and take the value
  const inputNum = Number(document.querySelector(".guess").value);
  const outputNum = document.querySelector(".number");
  const message = document.querySelector(".message");

  // add simple game logic when false input from user
  if (!inputNum) {
    message.textContent = "🤔 Please enter a number";
  } else {
    message.textContent = "🎉 Correct Number";
  }

  outputNum.textContent = inputNum;
  console.log(inputNum);
});
*/

/*
// !important
// closure example
function outerFunction(outerValue) {
  return function innerFunction(innerValue) {
    console.log(`${outerValue} adalah value dari outerFunction`);
    console.log(`${innerValue} adalah value dari innerFunction`);
  }
}

// call the outer function then reassign callFunction variable with innerFunction
const callFunction = outerFunction("outer");
callFunction("inner")
*/

// 17, 24 Marz 2022
// define the secret number
// define the score and decreased it every wrong guesses
// you can assign value from Js to an html element
const scoreOutput = document.querySelector(".score");
const highScoreOutput = document.querySelector(".highscore");
const outputNum = document.querySelector(".number");
const message = document.querySelector(".message");
const checkBtn = document.querySelector(".check");
const displayMsg = (inputMessage) => {
  message.textContent = inputMessage;
};
const submitGuessedNumber = () => {
  const inputGuessNum = Number(document.querySelector(".guess").value);
  // add  logic when false input from user
  if (!inputGuessNum) {
    // message.textContent = "🤔 Please enter a number";

    // using function to display message
    displayMsg("🤔 Please enter a number");
  }

  // when user guess a right number
  else if (inputGuessNum === secretNumber) {
    // display the number after user succeed to guess the number
    outputNum.textContent = secretNumber;

    // output the message if user guess the correct number
    // message.textContent = "🎉 Correct Number";
    displayMsg("🎉 Correct Number");

    // add some css style
    document.body.style.background = "limegreen";
    outputNum.style.width = "30rem";

    // implement highscore logic and outputing the highscore
    if (score > highScore) {
      highScore = score;
      highScoreOutput.textContent = highScore;
    }
  }

  // refactor the code
  else if (inputGuessNum !== secretNumber) {
    if (score > 1) {
      // old
      // message.textContent =
      //   inputGuessNum > secretNumber
      //     ? "Number is too big"
      //     : "Number is too small";

      // after refactor
      displayMsg(
        inputGuessNum > secretNumber
          ? "Number is too big"
          : "Number is too small"
      );
      score--;
      scoreOutput.textContent = score;
    } else {
      // message.textContent = "You are lost the game";
      displayMsg("You're lost the game");
      scoreOutput.textContent = 0;
    }
  }
};

// selecting input and take the value
let score = 20;
let highScore = 0;
let secretNumber = Math.round(Math.random() * 20);

// set functionality to the game
// add event listener to an input
checkBtn.addEventListener("click", submitGuessedNumber);

// add functionality for again button
const againBtn = document.querySelector(".again");

// restore the initial/default condition to the game
againBtn.addEventListener("click", () => {
  // reset the input num box
  document.querySelector(".guess").value = "";

  // set new random number
  secretNumber = Math.round(Math.random() * 20);

  // reset the score to 20
  score = 20;
  scoreOutput.textContent = score;

  // reset the state of output number
  outputNum.textContent = "?";

  // reset the state of the message
  // message.textContent = "Start guessing...";
  displayMsg("Start guessing...");

  // reset the body bg and the output number box width
  document.body.style.background = "#222";
  outputNum.style.width = "15rem";

  // location.reload();
});

// add enter key functionality to submit guessed number
const submitScore = (e) => {
  if (e.key === "Enter") {
    submitGuessedNumber();
  }
};

document.addEventListener("keydown", submitScore);
