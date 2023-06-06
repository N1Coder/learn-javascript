"use-strict"

console.log("Hello")

const gameEvents = new Map([
  [17, "⚽️ GOAL"],
  [36, "🔁 Substitution"],
  [47, "⚽️ GOAL"],
  [61, "🔁 Substitution"],
  [64, "🔶 Yellow card"],
  [69, "🔴 Red card"],
  [70, "🔁 Substitution"],
  [72, "🔁 Substitution"],
  [76, "⚽️ GOAL"],
  [80, "⚽️ GOAL"],
  [92, "🔶 Yellow card"],
])

// make new array that have no duplicates from gameEvents value
// mein
const events = new Set([...gameEvents.values()])

// solution
const solutionEvents = [...new Set(gameEvents.values())]

console.log(events)
console.log(solutionEvents)

// remove event at 64
gameEvents.delete(64)

// print to the console average minute that an event happened
const eventCount = gameEvents.size
const totalTime = [...gameEvents.keys()].pop()

// bonus
const averageMinute = totalTime / eventCount
console.log(
  `An event happened, on average every ${averageMinute} ${
    averageMinute > 1 ? "minutes" : "minute"
  }`
)

// loop the events and print like this
// [FIRST HALF] 17: ⚽️ GOAL
for (const [minute, event] of gameEvents) {
  const trimGame = minute <= 45 ? `[FIRST HALF]` : `[SECOND HALF]`
  console.log(`${trimGame} ${minute}: ${event}`)
}
