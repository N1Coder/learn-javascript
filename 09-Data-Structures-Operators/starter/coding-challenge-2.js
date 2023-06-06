// 19 Mai 2022
"use-strict"

const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
}

// loop game.scored array
// mein
// for (let i = 0; i < game?.scored.length; i++) {
//   const player = game?.scored[i]
//   const scoredGoal = `Goal ${i + 1}: ${player}`
//   console.log(scoredGoal)
// }

// use entries() for shorter code
// revisi
for (const [i, player] of game?.scored.entries()) {
  console.log(`Goal ${i + 1}: ${player}`)
}

// loop to calculate average odd
let average = 0
// for (const odd in game.odds) {
//   average += game.odds[odd] / 3
// }

// using Object.values() to store them in an array
const odds = Object.values(game.odds)
for (const odd of odds) {
  average += odd / odds.length
}
console.log(average)

// print 3 odds to the console
for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === `x` ? `draw` : `victory ${game[team]}`

  console.log(`Odds of ${teamStr} ${odd}`)
}

// console.log(`Odd of victory ${game.team1}: ${team1}
// Odd of draw: ${draw}
// Odd of victory ${game.team2}: ${team2}`)

// create scorers object that contain name players that scored as property, and the goals as value in game object

const scorers = {}
for (let player of game.scored) {
  scorers[player]++ || (scorers[player] = 1)
}

// for (const player of game.scored) {
//   scorers[player] ? scorers[player]++ : (scorers[player] = 1);
// }

console.log(scorers)

// NOTE!!
// convert array into object
const testArr = ["Senin", "Selasa", "Rabu", "Kamis"]
const testObj = {}
for (let day of testArr) {
  testObj[day] = day
}

console.log(testObj)
