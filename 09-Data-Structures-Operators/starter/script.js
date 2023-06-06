"use strict"

const weekdays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"]

const openingHours = {
  // using computed property name in object
  // use [] brackets
  [weekdays[0]]: {
    open: 12,
    close: 24,
  },
  [weekdays[2]]: {
    open: 12,
    close: 22,
  },
  [weekdays[3]]: {
    open: 11, // comment this property to get default values of 9
    close: 23,
  },
  [weekdays[4]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
}

console.log(openingHours)

// Data needed for first part of the section
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  // ES6 ehanched object literals
  openingHours,

  // ES6 enhanched method literals
  order(starterIndex, mainIndex) {
    return [
      this.starterMenu[starterIndex] ?? `Makanan tidak ada dalam menu`,
      this.mainMenu[mainIndex] ?? `Makanan tidak ada dalam menu`,
    ]
  },

  // destructuring object in argument function, important
  orderDelivery({
    starterIndex = 2,
    mainIndex = 0,
    time = `12:00`,
    address = `Anon Street`,
  }) {
    console.log(
      `Order received ${this.starterMenu[starterIndex]}, and ${this.mainMenu[mainIndex]} at ${time} on ${address}`
    )
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`)
  },

  // old ways without enhanched object literals
  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient)
    console.log(otherIngredients)
  },
}

/*
// karena sudah memakai object maka tidak perlu mengurutkan argument functionnya
restaurant.orderDelivery({
  time: "10:30",
  address: "Main Street",
  starterIndex: 1,
  mainIndex: 2,
});

restaurant.orderDelivery({
  time: "11:10",
  address: "Han nari Street",
});

// 27 April 2022
// destructuring object
// using old method to get property value
const nameRestoran = restaurant.name;
const categoriesRestoran = restaurant.categories;
console.log(nameRestoran);

const { name, mainMenu, openingHours } = restaurant;
const [ makanan1, , makanan2 ] = mainMenu;
console.log(makanan2);
console.log(name, mainMenu);
// destructure dengan menggunakan custom variable dengan mereferensikan property object dengan nama variable yang kita inginkan
const {
  name: namaRestoran,
  mainMenu: menuUtama,
  openingHours: waktuBuka,
} = restaurant;
console.log(namaRestoran, menuUtama);

// default values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// mutating variables
// using parenthesis
let a = 11;
let b = 10;
const numObj = { a: 12, b: 8, c: 21 };

({ a, b } = numObj);
console.log(a, b);

// nested objects
// name must same from the properties
const {
  fri: { open: buka = 9, close: tutup },
} = openingHours;
console.log(buka, tutup);
*/

/*
// 27 April 2022
// destructuring array
// using old method
const num = [1, 2, 3];
const a = num[0];
const b = num[1];
const c = num[2];

console.log(c);

const moderato = `${a >= 0 ? true : false}`;
console.log(moderato);

// using destructuring
const [numA, numB, numC] = num;
console.log(numA);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// menukar value pada variable
// temporary variable
const temp = main;
main = secondary;

// // assign to secondary
secondary = temp;
console.log(main, secondary);

// menggunakan destructuring
[main, secondary] = [secondary, main];
console.log(main, secondary);

// return 2 values from function
const [starter, mainFood] = restaurant.order(1, 2);
console.log(`${starter} and ${mainFood}`);

// nested array
// destructuring inside destructuring
const nested = ["Nico", "Keith", ["Jake", "John"]];
const [name, , [name3, name4]] = nested;
console.log(name3);

// default values
// set a default values to a index that don't exist
const [x, y, z = `index not found`] = [10, 11]
console.log(x, y, z);
*/

/*
// Promise
// promise berisi 2 param, resolve dan reject 
// resolve akan dijalankan jika prosesnya berhasil dengan menggunakan .then
// sedangkan reject akan dijalankan jika promisenya ada masalah seperti error dengan .catch
// concept useful for API
const tryPromise = () => {
  return new Promise((resolve, reject) => {
    const workFinished = false
    const worker = "Nico"

    if (workFinished) {
      resolve(`${worker} telah menyelesaikan pekerjaannya`)
    } else {
      reject(`${worker} belum menyelesaikan pekerjaannya`)
    }
  })
}

const isWorkDone = tryPromise()

isWorkDone
  .then(e => console.log(e))
  .catch(err => console.log(err))
*/

/*
// 28 April 2022
// spread operator

const arr = [1, 2, 3, 4, 5]
const [...spreadArr] = arr

const badArr = [arr[0], arr[1], arr[2], arr[3], arr[4], 6, 7, 8]
const goodArr = [...spreadArr, 6, 7, 8]

console.log(badArr)
console.log(goodArr)
console.log(...spreadArr)

const newMenu = [...restaurant.mainMenu, "Nasi Goreng"]
console.log(newMenu)

// copy array
const mainMenuCopy = [...restaurant.mainMenu]
console.log(mainMenuCopy)

// join 2 or more arrays
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu]
console.log(menu)

// iterables: arrays, strings, maps, sets, NOT objects
const name = "Nico"
const letters = [...name, "", ..."Arifin"]

console.log(letters)

// source from restaurant object
// real world example
// const ingredients = [
//   prompt(`Let\'s make a pasta, add first ingredients?`),
//   prompt(`Add second ingredients`),
//   prompt(`Add last ingredients`),
// ]

// restaurant.orderPasta(...ingredients)

// spread operator with objects
const newRestaurant = {
  ...restaurant,
  owner: "Nico Arifin",
}

console.log(newRestaurant)

// copy restaurant object
const restaurantCopy = { ...restaurant }
restaurantCopy.name = "Velas"
console.log(restaurantCopy)
*/

/*
// 4 Mai 2022
// REST Pattern
// perbedaan REST dan SPREAD
// jika REST digunakan untuk mengompress berbagai value untuk dijadikan sebuah array
// SPREAD untuk mengunpack isi array menjadi value masing masing

// 1) Destructuring
// SPREAD, because on right side of =
const arr = [1, 2, ...[3, 4]]
console.log(arr)

// REST, because on left side of =
const [a, b, ...othersNum] = [1, 2, 3, 4, 5]
console.log(a, b, othersNum)

const [pizza, , risotto, ...othersFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
]

console.log(pizza, risotto, othersFood)

// with objects
const { sat: sabtu, ...weekdays } = restaurant.openingHours
console.log(weekdays)

// 2) Functions
// rest in function arguments
const add = (...numbers) => {
  let sum = 0
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i]
  }
  return sum
}

console.log(add(2, 3))
console.log(add(5, 3, 7, 2))
console.log(add(8, 2, 5, 3, 2, 1, 4))

const x = [3, 5, 7]
// spread in arguments
console.log(add(...x))

restaurant.orderPizza("pepperoni", "mozarella", "mushroom", "sausage")
restaurant.orderPizza("pepperoni")
*/

/*
// 9 Mai 2022
// Short circuiting
// using truthy and falsy value concept
// OR
// if the value is truthy then Javascript will immediately return that value or the last value if all of them are falsy
console.log(1 || "Foo")
console.log(true || 0)
console.log(undefined || null)

// restaurant.numGuests = 11
const guests1 = restaurant.numGuests ? restaurant.numGuests : 5
console.log(guests1)

const guests2 = restaurant.numGuests || 10
console.log(guests2)

// console.log(restaurant)

// AND
// if false it will return the value if true it will move into next value
console.log("" && "Nico")
console.log("Anya" && false && "Nico")

if (restaurant.orderPizza) {
  restaurant.orderPizza("Spinach", "Bolognaise")
}

// using short circuiting
restaurant.orderPizza && restaurant.orderPizza("Spinach", "Bolognaise")
*/

/*
// 10 Mai 2022
// nullish coalescing operator
// using nullish concept instead falsy
// nullish: null and undefined
// if the value is nullish then the next value is returned

// restaurant.numGuests = null
// const guests = restaurant.numGuests || 10
// console.log(guests)

// const guestCorrect = restaurant.numGuests ?? 10
// console.log(guestCorrect)

// logical assignment operator
const person = {
  name: "Nico Arifin",
  age: 0,
}

const person2 = {
  // name: "Anya",
  favFood: "Fried Rice",
}

// short circuiting
// person.age = person.age || 16
// person2.age = person2.age || 16

// OR logical assignment
// assign value if its currently falsy
person.age ||= 16
person2.age ||= 16

// nullish coalescing assignment
// assign value if its currently nullish
person.age ??= 16
person2.age ??= 16

// AND logical assignment
// assign the value if its currently truthy
person.name &&= "Anon"
person2.name &&= "Anon"

console.log(person, person2)
*/

/*
// 11 Mai 2022
// object literals (ada di baris paling atas)
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu]

const person = {
  name: `Nico Arifin`,
  age: 17,
  student: true,
}

console.log(menu)

// for-of loop akan loop sebuah array satu persatu dari current element
for (const item of menu) {
  console.log(item)
}

// jika ingin mendapatkan index elemen menggunakan method .entries()
// using destructuring instead arr[0], arr[1] etc
for (const [i, item] of menu.entries()) {
  console.log(`${i + 1}: ${item}`)
}

// for-in digunakan pada object
// person[prop] mengambil nilai dari property
for (const prop in person) {
  console.log(`${prop}: ${person[prop]}`)
}
*/

/*
// 12 Mai 2022
// if (restaurant.openingHours && restaurant.openingHours.senin)
//   console.log(restaurant.openingHours.senin.open)

// optional chaining ( ? )
// digunakan untuk mengecek apakah sebuah property ada atau nullish (undefined / null)
// jika hasilnya undefined / null maka akan langsung mengembalikan nilai undefined
console.log(restaurant.openingHours.wed?.open)

// console.log(restaurant.openingHours.mon.open)

// example
// penggunaan optional chaining di kombinasikan bersama nullish coalescing operator
const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"]

// contoh pengambilan data
for (const day of days) {
  console.log(day)
  const open = restaurant.openingHours[day]?.open
  console.log(`On ${day} we open at ${open ?? "closed"}`)
}

// penggunaan optional chaining pada method
console.log(restaurant.order?.(0, 2) ?? "Method tidak ada")

// penggunaan pada array
const users = [{ name: "Jake", email: "myemail@email.id" }]
// const users = []

console.log(users[0]?.name ?? "name property doesn't exist")
*/

/*
// 18 Mai 2022
// looping objects

// property names
const props = Object.keys(openingHours)
console.log(props)
let openStr = `we are open in ${props.length} ${
  props.length > 1 ? "days" : "day"
}: `

for (const day of Object.keys(openingHours)) {
  openStr += `${day}, `
}
console.log(openStr)

// property values
const value = Object.values(openingHours)
console.log(value)

// entire object
// loop the object
const entries = Object.entries(openingHours)
console.log(entries)

// using destructuring but first see the value from entries
// [key, {value}]
for (const [key, { open, close }] of entries) {
  console.log(`on ${key} we open at ${open} and close at ${close}`)
}
*/

/* words Js
class Add {
  constructor(...words) {
    this.words = words
  }
  //your code goes here
  print() {
    let text = ""
    for (let i = 0; i < this.words.length; i++) {
      let words = this.words[i]
      const word = `$${words}`
      text += word
    }
    console.log(`${text}$`)
  }
}

var x = new Add("hehe", "hoho", "haha", "hihi", "huhu")
var y = new Add("this", "is", "awesome")
var z = new Add(
  "lorem",
  "ipsum",
  "dolor",
  "sit",
  "amet",
  "consectetur",
  "adipiscing",
  "elit"
)
x.print()
y.print()
z.print()
*/

/*
// 23 Mai 2022
// Set
// data structures that never have duplicates value
// Set method
// .size, .add(val), .clear(), .delete(val), .has(val)

const ordersSet = new Set([
  "Nasi Goreng",
  "Nasi Kuning",
  "Nasi Kuning",
  "Indomie",
  "Nasi Goreng",
])
const names = new Set("Nico")

console.log(names)
console.log(ordersSet)
console.log(ordersSet.add("Lumpia"))

const deleteEl = el => {
  return ordersSet.delete?.(el)
    ? "Item berhasil dihapus"
    : "Item tidak ada dalam menu"
}

console.log(deleteEl("Nasi Kuning"))
console.log(ordersSet.size)

// loop set
for (const order of ordersSet) console.log(order)

// usecase for set
// menghitung jumlah posisi dalam suatu instansi pekerjaan
const staff = [
  "HRD",
  "Supervisor",
  "Worker",
  "Cleaning Staff",
  "Worker",
  "Designer",
  "Developer",
  "Developer",
]
console.log(staff)

// const setStaff = [...new Set(staff)]
// console.log(setStaff.length)

// OR

const setStaff = new Set(staff)
console.log(setStaff.size)

// menghitung jumlah karakter dalam sebuah kata
console.log(new Set("muhamadnicoarifin").size)

// map
// map method
// .set(key, val) .has(key) .get(key) .delete(key) .size .clear()

// usecase with object and array key
// boolean and number can be used as a key
const oneTwo = [1, 3]
// const selectHeading = document.querySelector("h1")

const siswa = new Map()
siswa
  .set("nama", "Nico Arifin")
  .set("umur", 17)
  .set(true, "Nico punya KTP")
  .set(false, "Nico tidak punya KTP")
  .set(oneTwo, "One two")
// .set(selectHeading, "Heading")

const umurMin = 17
const punyaKTP = siswa.get(siswa.get("umur") >= umurMin)
console.log(punyaKTP)
console.log(siswa)
console.log(siswa.has("nama"))
console.log(siswa.get(oneTwo))
*/

/*
// 24 Mai 2022
// Map iterations
const question = new Map([
  ["question", "What is 1 + 1"],
  [1, "Your mom"],
  [2, "2"],
  [3, "Trias"],
  ["correct", 2],
  [true, "Correct!"],
  [false, "Nope, try again"]
])

console.log(question)

// convert object to map
const openingHoursMap = new Map(Object.entries(openingHours))
console.log(openingHoursMap)

// loop a map
for (const [key, val] of question) {
  if (typeof key === "number") console.log(`Answer ${key} is ${val}`)
}

// simple quiz app
console.log(question.get("question"))

// const userAnswer = Number(prompt(`${question.get("question")}
// Your answer`))
// console.log(userAnswer)

// console.log(question.get(question.get("correct") === userAnswer))

// convert map to array
const mapToArray = [...question]
const keyMapToArray = [...question.keys()]
const valMapToArray = [...question.values()]
console.log(mapToArray)

const objInArr = [{
  name: "Antaz",
  className: "Pocket",
}]

console.log(objInArr)
*/

/*
// 4 Juni 2022
// working with strings
// indexOf, search for word or char and return the index if the char found, if not then return -1
// lastIndexOf, same like indexOf but search from last char and return the first match of the value

const plane = "Batik Air"
const codePlane = "A320"

console.log(codePlane[0])
console.log(codePlane[1])
console.log(codePlane[2])
console.log(codePlane[3])

console.log(plane.indexOf("i"))
console.log(plane.lastIndexOf("i"))
console.log(plane.indexOf("Batik"))

// slice method
// 2 params
// slice(startIndex, endIndex)
// if the index is minus then it starts from last char
console.log(plane.length)
console.log(plane.slice(6))
console.log(plane.slice(0, -4))
console.log(plane.slice(0, 6))

console.log(plane.slice(0, plane.indexOf(" ")))
console.log(plane.slice(plane.lastIndexOf(" ") + 1))
console.log(plane.lastIndexOf(" ") + 1)

// search for mid seat in an airplane
const checkMidSeat = seat => {
  // B and E are mid seats
  const s = seat.slice(-1)
  const checkMid =
    s === "B" || s === "E" ? "Kursi bagian tengah" : "Bukan kursi bagian tengah"
  return checkMid
}

// usecase for slice and indexof method
// slice, if you want slice string from specific index and return the value of that slicing
// indexof, if you want to find specific char at specific index

console.log(checkMidSeat(`${11}D`))
console.log(checkMidSeat(`${11}E`))

// addition why is this work with strings
// because Javascript will convert the string into an object
// like this new String("Your string here")
// and then the result is object with a string inside and you can use all of these methods
*/

// 13 Juni 2022
// string methods

const plane = "Batik Air"
const codePlane = "A320"

console.log(plane.toLowerCase())
console.log(plane.toUpperCase())

// usecase for fixing capitalization name
const name = "niCo"
const nameLowerCase = name.toLowerCase()
const nameCapitalized = nameLowerCase[0].toUpperCase() + nameLowerCase.slice(1)
console.log(nameCapitalized)

// make function to received user input
const capitalizedName = inputName => {
  // /\w\S*/g means taking all chars with no whitespaces with match 0 or more value
  // /^\w/ taking every first letter from selected then uppercase the letter
  return inputName.replace(/\w\S*/g, letter =>
    letter.replace(/^\w/, firstLetter => firstLetter.toUpperCase())
  )
}
console.log(capitalizedName("muhamad nico arifin"))
console.log(capitalizedName("kafka ramadityo"))
console.log(capitalizedName("galih saputra"))

// comparing emails
const email = "nicoarifin@email.com"
const loginEmail = "  NicoArifin@Email.Com   \n"

const normalizedEmail = loginEmail.toLowerCase().trim()
console.log(normalizedEmail, email === normalizedEmail)

// replace currency
const priceGB = "100,5€"
const priceUS = priceGB.replace("€", "$").replace(",", ".")
console.log(priceUS)

// fixed typo
const announcement = "All passengers come to boarding door 11, boarding door 11"
// console.log(announcement.replace("door", "gate"))

// use replaceAll method
console.log(announcement.replaceAll("door", "gate"))

// use regex
console.log(announcement.replace(/door/g, "gate"))

// // method that returns boolean
// // startsWith, endsWith, includes
// const planeCode = "A320batik"
// console.log(planeCode.includes("A320"))
// console.log(planeCode.includes("Boeing"))
// console.log(planeCode.startsWith("Airbus"))

// practice with those methods
// checking passenger baggage items if there's a knife or gun
const checkBaggage = items => {
  const baggageItems = items.toLowerCase().replace(/\s/g, "")
  if (baggageItems.includes("pisau") || baggageItems.includes("senjataapi")) {
    return `Penumpang tidak diperbolehkan untuk menaiki pesawat`
  } else return `Penumpang boleh menaiki pesawat`
}

console.log(checkBaggage("Saya membawa Pakaian, Pisau, dan Bahan Makanan"))
console.log(checkBaggage("snack, laptop, handphone, charger"))
console.log(
  checkBaggage("BAWA PAKAIAN, HP, TABLET, SENJATA API UNTUK PERLINDUNGAN DIRI")
)

/*
// 14 Juni 2022
// split and join method
// split takes 2 arguments, first one is separator, second is limit for index
// join method is for joining every element in an array, and give them separator
// join take 1 argument, separator
const trySplit = "ini+adalah+kalimat+contoh"
const name = "Muhamad Nico Arifin"
const [firstName, , lastName] = name.split(" ")

console.log(firstName, lastName)
console.log(trySplit.split("+").join(" "))

const newName = ["Mr.", firstName, lastName.toUpperCase()].join(" ")

console.log(newName)

// make a function to capitalize every name in passengers array
const passengers = [
  "muhamad nico arifin",
  "kafka ramadityo",
  "galih saputra",
  "jake brown",
  "anya",
]
const capitalizeName = name => {
  const names = name.split(" ")
  const namesCapitalizedArr = []
  for (const nameItem of names) {
    const capitalizedName = nameItem[0].toUpperCase() + nameItem.slice(1)
    namesCapitalizedArr.push(capitalizedName)
  }

  return namesCapitalizedArr.join(" ")
}

for (const passenger of passengers) {
  console.log(capitalizeName(passenger))
}

// padding a string
// add some chars til resulting the target length from the string
// it will return new string, so the original not modified
const message = "Go to gate 11!"
console.log(message.padStart(message.length + 1, "-"))

const markText = inputText => {
  const markedText = inputText
    .padStart(inputText.length + 1, "-")
    .padEnd(inputText.length + 2, "-")

  return markedText
}

console.log(message.length, markText(message))

// masking phone number using padding
// mein experiment
const maskPhoneNumber = (num = "081244565292", phoneCode = "+62") => {
  const prefix = phoneCode + " "
  const numToStr = num + ""
  numToStr.replace("0", "")
  const last2Digits = numToStr.slice(-3)

  return prefix + last2Digits.padStart(numToStr.length, "*")
}

console.log(maskPhoneNumber(81349545788))
*/

/*
// 15 Juni 2022
// Repeat method
const message2 = "Bad Weather. All Departures Delayed "
console.log(message2.repeat(3))

// make a function
const planeInLine = n => {
  return `There are ${n} ${n > 1 ? "planes" : "plane"} in line ${"✈️".repeat(
    n
  )}`
}

console.log(planeInLine(1))
console.log(planeInLine(3))
console.log(planeInLine(2))

// important notes
// you can check more string methods on mdn docs
// those are just important method
*/

// 17 Juni 2022
// Data needed for a later exercise
const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30"

const fetchFlights = (flightsData = flights) => {
  const arrFlights = flightsData.split(/\+/g)

  for (const flight of arrFlights) {
    // ============================
    // Destructure The Data
    const splitData = flight.split(/;/g)
    const [flightStatusData, fromAirportData, toAirportData, timeFlightData] =
      splitData
    // ============================

    // ============================
    // Flight Status Message
    const flightStatus = flightStatusData.replace(/_/g, " ")
    const delayedFlightStatus = flightStatus.toLowerCase().indexOf("delayed")
    const outputFlightStatus =
      delayedFlightStatus === 1
        ? flightStatus.padStart(flightStatus.length + 1, "🔴")
        : flightStatus.padStart(flightStatus.length + 1, "✈️")
    // ============================

    // ============================
    // Uppercase The Airport Code
    const fromAirportCode = fromAirportData.toUpperCase().replace(/\d/g, "")
    const toAirportCode = toAirportData.toUpperCase().replace(/\d/g, "")
    // ============================

    // ============================
    // Time Flight Message
    const timeFlight = timeFlightData.replace(/:/, "h")
    // ============================

    const outputMsg =
      `${outputFlightStatus} from ${fromAirportCode} to ${toAirportCode} (${timeFlight})`.padStart(
        45
      )
    console.log(outputMsg)

    // console.log(flightStatus, fromAirportCode, toAirportCode, timeFlight)
    // console.log(splitData)
    // console.log(flightStatus)
    // console.log(toAirportData.toUpperCase().replace(/\d/g, ""))
  }
}

fetchFlights()
