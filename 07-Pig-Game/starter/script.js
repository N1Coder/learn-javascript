"use strict";

// declare variable to select elements
let scorePlayer1 = document.getElementById("score--0");
let scorePlayer2 = document.getElementById("score--1");
let currentScorePlayer1 = document.getElementById("current--0");
let currentScorePlayer2 = document.getElementById("current--1");
const newGameBtn = document.querySelector(".btn--new");
const rollBtn = document.querySelector(".btn--roll");
const holdBtn = document.querySelector(".btn--hold");
const diceImg = document.querySelector(".dice");

// selecting player element
const player_0 = document.querySelector(".player--0");
const player_1 = document.querySelector(".player--1");

// function handler
const changePlayer = () => {
  sumScore = 0;
  document.getElementById(`current--${activePlayer}`).textContent = sumScore;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player_0.classList.toggle("player--active");
  player_1.classList.toggle("player--active");
};

// starting condition
scorePlayer1.textContent = 0;
scorePlayer2.textContent = 0;

// rolling dice functionality
// add scores
let scores = [0, 0];
let sumScore = 0;
let activePlayer = 0;
let playing = true;

// 6, 7, 8, 11 April 2022
// rollBtn event
rollBtn.addEventListener("click", () => {
  if (playing) {
    // 1. membuat angka random
    let randomNum = Math.floor(Math.random() * 6 + 1);

    // 2. menunjukkan nilai dadu kepada player
    diceImg.classList.remove("none");
    diceImg.src = `dice-${randomNum}.png`;

    // 3. mengecek apakah player mendapat angka 1
    if (randomNum === 1) {
      // angka 1 (jika true maka nilai akan hilang dan mengganti giliran player 2)
      // reset score from active player
      // switching between player 1 and player 2
      changePlayer();
    } else {
      // menambahkan nilai pada currentScore player
      sumScore += randomNum;
      document.getElementById(`current--${activePlayer}`).textContent =
        sumScore;
    }
  }
});

// 11 April 2022
// add hold button functionality
// store and hold the score
holdBtn.addEventListener("click", () => {
  if (playing) {
    // 1. menambahkan nilai skor sementara menjadi skor player
    scores[activePlayer] += sumScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    // 2. mengecek jika nilai skor player >= 100, jika true maka player tersebut menang
    if (scores[activePlayer] >= 50) {
      // finish the game
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.toggle("player--winner");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("player--active");
      diceImg.classList.add("none");
      alert(`Player ${activePlayer + 1} wins the game 🥳🥳`)
    } else {
      // 3. mengganti giliran player setelah hold skor
      changePlayer();
    }
  }
});

// add new game button functionality
newGameBtn.addEventListener("click", () => {
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove("player--winner");
  activePlayer = 0;

  playing = true;
  if (playing) {
    // reset back to default styles from winner
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.add("player--active");

    // hide dice img again
    diceImg.classList.add("none");

    // reset score from both players
    sumScore = 0;
    scores = [0, 0];
    scorePlayer1.textContent = 0;
    scorePlayer2.textContent = 0;
    currentScorePlayer1.textContent = 0;
    currentScorePlayer2.textContent = 0;

    // location.reload();
  }
});
