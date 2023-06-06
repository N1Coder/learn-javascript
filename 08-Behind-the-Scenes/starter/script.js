"use strict"

// Scoping in Javascript
// 21 April 2022

// // calcAge scope
// const calcAge = birthYear => {
//   // age local variable
//   const age = 2022 - birthYear
//   console.log(`${firstName}`)

//   // inner child function scope
//   const printAge = () => {
//     const output = `Kamu berumur ${age} tahun, dan lahir pada tahun ${birthYear}`
//     console.log(output)

//     // block scoped statement
//     if (birthYear >= 1995 && birthYear <= 2010) {
//       const firstName = "Anya"
//       var genZ = true
//       const str = `You're a gen Z, ${firstName}`
//       console.log(str)

//       const sum = (a, b) => {
//         return a + b
//       }
//     }
//     console.log(genZ)
//   }
//   printAge()

//   return age
// }

// const firstName = "Nico"
// const lastName = "Arifin"
// calcAge(2005)
// console.log(calcAge(2005))

// Hoisting
// hoisting adalah sebuah cara bagi Javascript untuk menjalankan function sebelum function tersebut dideclare
// hoisting with function declaration
// console.log(penjumlahan(5, 10))
// // console.log(pengurangan(5, 10))
// // console.log(perkalian(5, 10))

// function penjumlahan(a, b) {
//   return a + b
// }

// const pengurangan = function (a, b) {
//   return a - b
// }

// const perkalian = (a, b) => {
//   return a * b
// }

// hoisting with variable declaration
// console.log(randomNum)
// console.log(umur)
// console.log(nama)

// var randomNum = 11
// // ABOVE IS TEMPORAL DEAD ZONE THAT CANNOT BE ACCESSED
// let umur = 17
// const nama = "Nico Arifin"

// // example of why you shouldn't use var

// console.log(numberOfProducts);
// if (!numberOfProducts) deleteAllItems()

// var numberOfProducts = 15

// function deleteAllItems() {
//   console.log("All products have been deleted");
// }

/*
// 22 April 2022
// this keyword
console.log(this)

const calcAge = function (birthYear) {
  console.log(2022 - birthYear)
}

calcAge(2005)

const calcAgeArrow = birthYear => {
  console.log(2022 - birthYear)
  console.log(this)
}

// calcAgeArrow(2005)

const jake = {
  name: "Jake Brown",
  birthYear: 2006,
  age: function () {
    console.log(this)
    console.log(2022 - this.birthYear)
  },
}
jake.age()

const nico = {
  birthYear: 2002,
}

const arr = [
  1, 2, 3, 4
]

const pushNumber = (arr, value) => {
  return [...arr, value]
}

console.log(arr);
console.log(pushNumber(arr, 5));

// just regular function call
// const calcFunction = jake.age
// calcFunction()

// methods borrowing
// this keyword akan selalu point kepada object yang memakai methodnya
nico.age = jake.age
nico.age()
*/

/*
// 25 April 2022
const jake = {
  name: "Jake Brown",
  birthYear: 2005,
  age: function () {
    console.log(this)
    console.log(2022 - this.birthYear)

    // // old version to access this
    // const self = this; // self or that
    // const isGenZ = function() {
    //   console.log(self.birthYear >= 2000 && self.birthYear <= 2010);
    //   // console.log(this.year >= 2000 && this.year <= 2010);
    // }

    // new version to access this using arrow function
    const isGenZ = () => {
      console.log(this.birthYear >= 2000 && this.birthYear <= 2010);
    }
    isGenZ()
  },
  // this refer to window global object
  greet: function() {
    console.log(`Hello ${this.name}`)
  },
}

jake.age()

// arguments keyword
// can only be accessed in regular function (not arrow)
const addExpression = function(a, b) {
  console.log(arguments);
  return a + b
}

addExpression(2, 5)
*/

// 26 April 2022
// primitive and references types
let age = 30
let oldAge = age
age = 31
console.log(age)
console.log(oldAge)

const nico = {
  name: "Nico",
  age: 17,
}

const jake = nico
jake.age = 16
console.log(jake)
console.log(nico)

// primitive types
let lastName = "Brown"
let oldLastName = lastName
lastName = "Arifin"

console.log(lastName, oldLastName) // Arifin Brown

// reference types
const anya = {
  firstName: "Anya",
  lastName: "Brown",
  age: 18,
}

const changedNameAnya = anya
changedNameAnya.lastName = "Arifin"

console.log(anya.lastName, changedNameAnya.lastName) // Arifin Arifin

// duplicate the objects
const anya2 = {
  firstName: "Anya",
  lastName: "Brown",
  age: 18,
  friends: [
    "Jake", "Nico"
  ]
}

const duplicatedAnya = Object.assign({}, anya2)
duplicatedAnya.lastName = "Mika"
duplicatedAnya.friends.push("Willson")

// Must use deep clone (later~~)
console.log(anya2, duplicatedAnya);
