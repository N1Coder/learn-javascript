// 10 Mai 2022

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
const players1Subtitute = ["Thiago", "Coutinho", "Perisic"]

// membuat masing masing variabel dari array players
const [players1, players2] = game.players
console.log(players2)

// memberi nama pada setiap variabel sebagai gk dan fieldPlayers dari variabel players1, players2
const [gk, ...fieldPlayers] = players1
const [gk2, ...fieldPlayers2] = players2
console.log(fieldPlayers)

// membuat array yang isinya total pemain dari kedua team
const allPlayers = [...players1, ...players2]
console.log(allPlayers)

// players1 memakai 3 pemain cadangan, yaitu Thiago, Coutinho, Perisic
// membuat array players1Final dari array sebelumnya + pemain cadangan yang digunakan
const players1Final = [...players1, ...players1Subtitute]
console.log(players1Final)

// mengganti property objek game.odds setiap odd diganti dengan team1, draw, team2
// const {team1, x: draw, team2} = game.odds
// or
const {
  odds: { team1, x: draw, team2 },
} = game
console.log(draw)

// function untuk menghitung jumlah data yang sama pada sebuah input !important buat nanti~
// const printGoals = (...players) => {
//   const { scored } = game

//   for (let i = 0; i < players.length; i++) {
//     // console.log(players[i]);
//     let goal = 0

//     for (let j = 0; j < scored.length; j++) {
//       // console.log(scored[j])

//       if (players[i] === scored[j]) {
//         goal += 1
//       }
//     }

//     console.log(
//       `${players[i]} ${goal > 0 ? `mencetak ${goal}` : `tidak mencetak`} gol`
//     )
//   }
// }

// actual goal function
const printGoals = (...playersThatScored) => {
  console.log(`${playersThatScored.length} gol dicetak`)
}

printGoals("Lewandowski", "Davies", "Muller", "Kimmich")

// team dengan odd paling kecil akan menang
// print ke console team mana yang akan menang tanpa if else dan ternary
const teamWinner = `${
  (team1 < team2 && game.team1) || game.team2
} jadi pemenangnya`
// const teamWinner = `${
//   team1 < team2
//     ? `${game.team1} jadi pemenangnya`
//     : `${game.team2} jadi pemenangnya`
// }`
console.log(teamWinner)
