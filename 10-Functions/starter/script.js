"use strict"

/*
// 20 Juni 2022
// default params
const bookingArr = []

const createBooking = (
  flightNum,
  numPassengers = 1,
  price = 399 * numPassengers
) => {
  // ES5
  // numPassengers ||= 1
  // if (flightNum === "AA124") {
  //   price ||= 499
  // } else if (flightNum === "AA123") {
  //   price ||= 399
  // } else if (flightNum === "AA122") {
  //   price ||= 299
  // } else {
  //   console.log("There is no booking available")
  // }

  const booking = {
    flightNum,
    numPassengers,
    price,
  }

  bookingArr.push(booking)
  return booking
}

createBooking("AA122", 3, 499)
createBooking("AA122", 5)
createBooking("AA124", 2)
createBooking("AA124", 4)

// skipping param, set the second param to undefined then it will set default value
createBooking("AA124", undefined, 299)
console.log(bookingArr)
*/

/*
// 21 Juni 2022
// How passing arguments works
// value vs reference
const flight = "AA124"
const nico = {
  name: "Nico Arifin",
  age: 17,
  ticketId: 129545677,
}

const checkIn = (flightNum, passenger) => {
  flightNum = "AA123"
  passenger.name = `Mr. ${passenger.name}`

  if (passenger.ticketId === 129545677) {
    alert("Check In")
  } else {
    alert("Wrong Ticket Number")
  }
}

// checkIn(flight, nico)
// console.log(flight)
// console.log(nico)

// function can manipulating properties in object
// example that this can be a bug
const newTicketId = person => {
  person.ticketId = Math.trunc(Math.random() * 1000000 + 1)
}

newTicketId(nico)
checkIn(flight, nico)
*/

/*
// 22 Juni 2022
// function accepting callbacks function
// callbacks function is function that is called when the higher order function is called
const oneWord = str => {
  return str.replace(/ /g, "").toLowerCase()
}

const upperFirstWord = str => {
  const [firstWord, ...restOfWords] = str.split(" ")
  console.log([firstWord.toUpperCase(), ...restOfWords].join(" "))
  return [firstWord.toUpperCase(), ...restOfWords].join(" ")
}

// high order function
const transformer = (str, fun) => {
  console.log(`Original strings: ${str}`)
  console.log(`Transformed strings: ${fun(str)}`)
  console.log(`Transformed by: ${fun.name}`)
}

// Javascript callbacks
transformer("css is the best", upperFirstWord)
transformer("css is the best", oneWord)

const popStar = () => {
  console.log("Yeayy 🌟")
}
// document.body.addEventListener("click", popStar)

const nameArr = ["Jake", "Nico", "Will"]
nameArr.forEach((item, i, a) => {
  console.log(item)
})
*/

/*
// 14 Juli 2022
// function return other function
// closures

const greet = greetMsg => {
  return name => {
    console.log(`${greetMsg} ${name}`)
  }
}

// store into variable and then call the variable
const greetPerson = greet("Hello")
greetPerson("Nico")
greetPerson("Matt")

// call the function immediately
greet("Selamat Pagi")("Nico")

// challenge, rewrite above function into arrow function
const greetArrow = greetMsg => name => console.log(`${greetMsg} ${name}`)

greetArrow("Guten morgen")("Anya")
*/

/*
// 15 Juli 2022
// call and apply methods

const garuda = {
  airline: "Garuda Indonesia",
  iataCode: "GA",
  bookings: [],
  book(flightNum, namePassenger) {
    console.log(
      `${namePassenger} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`,
      this
    )
    this.bookings.push({
      flight: `${this.iataCode}${flightNum}`,
      name: namePassenger,
    })
  },
}

garuda.book(110, "Nico Arifin")
garuda.book(250, "Kyle")
console.log(garuda.bookings)

const citilink = {
  airline: "Citilink Air",
  iataCode: "QG",
  bookings: [],
}

const bookFun = garuda.book

// DOESN'T WORK
// bookFun(125, "Jake Willson")

// call method
// call method digunakan untuk menginherit sebuah method dari object lain yang berisi this keyword agar langsung menunjuk pada object lain tanpa harus menulis ulang method tersebut pada object lain
bookFun.call(citilink, 125, "Jake Willson")
bookFun.call(garuda, 110, "Anya")

console.log(citilink, garuda)

// apply method
// apply method mirip dengan call, namun mengambil sebuah array sebagai argument
// apply method tidak banyak digunakan dengan adanya spread syntax
const flightPassenger = [125, "William"]
bookFun.apply(citilink, flightPassenger)

// same as apply ^
bookFun.call(citilink, ...flightPassenger)
console.log(citilink)

// 16 Juli 2022
// bind method
// bind method mengclone function lalu disimpan dalam sebuah variabel dan function tersebut dapat dipanggil nanti
// perbedaan dengan call, call langsung memanggil function tersebut saat itu juga

const bookCitilink = bookFun.bind(citilink)
bookCitilink(222, "Watterson")

// selain menambahkan object yang akan dibind, argument selanjutnya dapat berupa nilai yang akan langsung dipass ke param pertama dalam function yang dibind
// bookFun.bind(citilink, 120) berarti kita hanya perlu menambahkan param kedua yaitu nama penumpangnya
// NOTE: (LIHAT VARIABLE bookFun!!)
const bookCitilink120 = bookFun.bind(citilink, 120)
bookCitilink120("Foo")
bookCitilink120("Bar")
bookCitilink120("John")
console.log(citilink)

// contoh lain dari bind
// const printErr = console.error
// const beep = {
//   name: "foo"
// }
// const error = printErr.bind(beep)

// error("Cooler Error 😎")

// 19 Juli 2022
// with event listeners
citilink.planes = 300
citilink.buyPlane = function () {
  console.log(this)

  this.planes++
  console.log(this.planes)
}

const buyPlaneBtn = document.querySelector(".buy")
const planeCount = document.querySelector(".plane")
const buyPlaneCitilink = citilink.buyPlane.bind(citilink)

// jika tanpa menggunakan bind maka yang terjadi adalah this keyword akan merefer terhadap object diatasnya yaitu element button
buyPlaneBtn.addEventListener("click", buyPlaneCitilink)

planeCount.textContent = citilink.planes

// 21 Juli 2022
// other usecase for bind
// partial application
// digunakan untuk membuat function spesifik dari origin function yang ada
const addTax = (rate, val) => val + val * rate

console.log(addTax(0.1, 300))

// menambahkan nilai preset jadi tidak perlu pass argument yang sama secara berulang
// nilai this digantikan oleh null
const addVAT = addTax.bind(null, 0.5) // same as
// const addVAT = val => val + val * 0.5

console.log(addVAT(50))

// challenge
// membuat contoh function yang sama diatas tanpa menggunakan bind method
const addVAT2 = val => rate => val + val * (rate ?? 0.5)
const addRate = addVAT2(50)
console.log(addRate(null))
*/

/*
// 15 Agustus 2022
// IIFE (Immediately Invoked Function Expression)
// function yang hanya digunakan sekali

const runOnce = () => {
  console.log(`This will never run again`)
}

runOnce()
;(function () {
  console.log(`This will never run again`)
})()
;(() => console.log(`This will also never run again`))()

// closure
// closure mengingat variabel parentnya dan melanjutkan kondisi dari variabel jika variabel tersebut dimanipulasi
// kita bisa mengecek closure dengan menggunakan console.dir (hanya berlaku di Chrome!!!)
const secureBooking = () => {
  let passengerCount = 0

  return () => {
    passengerCount++
    console.log(
      `${passengerCount} passengers ${passengerCount > 2 ? "Wow" : ""}`
    )
  }
}

console.log(secureBooking)
const booker = secureBooking()

booker() // 1 passengers
booker() // 2 passengers
booker() // 3 passengers Wow
booker() // 4 passengers Wow
console.dir(booker)
*/

/*
// 27 November 2022
const upperFirstWord = string => {
  const [firstWord, ...rest] = string.split(" ")
  return [firstWord.toUpperCase(), ...rest].join(" ")
}

const transformer = (string, fun) => {
  console.log(`Original string: ${string}`)
  console.log(`Result: ${fun(string)}`)
  console.log(`Transformed by ${fun.name} function`)
}

// higher order function example
// upperFirstWord is the callback function
transformer("nico arifin", upperFirstWord)
*/

/*
// 16 Dezember 2022
// arguments variable hanya bisa diakses pada function dengan keyword function, sedangkan arrow function tidak bisa dan akan memberikan exception atau error

// function myConcat(separator) {
//   console.log(arguments)
//   const args = Array.prototype.slice.call(arguments, 1)
//   return args.join(separator)
// }

const myConcat = function (separator) {
  console.log(arguments)
  const args = Array.prototype.slice.call(arguments, 1)
  return args.join(separator)
}

// returns "red, orange, blue"
console.log(myConcat(", ", "red", "orange", "blue"))

// returns "elephant; giraffe; lion; cheetah"
console.log(myConcat("; ", "elephant", "giraffe", "lion", "cheetah"))

// returns "sage. basil. oregano. pepper. parsley"
console.log(myConcat(" <= \n", "sage", "basil", "oregano", "pepper", "parsley"))
*/

// 17 Dezember 2022
// another examples of closure

// example #1
let f

const gFun = () => {
  let numA = 20

  f = () => {
    console.log(numA * 2)
  }
}

const hFun = () => {
  let numB = 25

  f = () => {
    console.log(numB * 4)
  }
}

gFun()
f()

// Reassign f variable
hFun()
f()

// example #2
const boardPassengers = (passengerNums, times) => {
  const perGroups = passengerNums / 3

  setTimeout(() => {
    console.log(
      `Kami informasikan ${passengerNums} penumpang untuk segera naik`
    )
    console.log(
      `Penumpang telah dibagi kedalam 3 grup masing-masing berjumlah ${perGroups} penumpang`
    )
  }, times * 1000)

  console.log(`Penumpang akan menaiki pesawat dalam ${times} detik`)
}

boardPassengers(90, 4)
