"use strict"

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
}

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
}

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
}

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
}

const accounts = [account1, account2, account3, account4]

// Elements
const labelWelcome = document.querySelector(".welcome")
const labelDate = document.querySelector(".date")
const labelBalance = document.querySelector(".balance__value")
const labelSumIn = document.querySelector(".summary__value--in")
const labelSumOut = document.querySelector(".summary__value--out")
const labelSumInterest = document.querySelector(".summary__value--interest")
const labelTimer = document.querySelector(".timer")

const containerApp = document.querySelector(".app")
const containerMovements = document.querySelector(".movements")

const btnLogin = document.querySelector(".login__btn")
const btnTransfer = document.querySelector(".form__btn--transfer")
const btnLoan = document.querySelector(".form__btn--loan")
const btnClose = document.querySelector(".form__btn--close")
const btnSort = document.querySelector(".btn--sort")

const inputLoginUsername = document.querySelector(".login__input--user")
const inputLoginPin = document.querySelector(".login__input--pin")
const inputTransferTo = document.querySelector(".form__input--to")
const inputTransferAmount = document.querySelector(".form__input--amount")
const inputLoanAmount = document.querySelector(".form__input--loan-amount")
const inputCloseUsername = document.querySelector(".form__input--user")
const inputClosePin = document.querySelector(".form__input--pin")

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ["USD", "United States dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pound sterling"],
  ["IDR", "Indonesian Rupiah"],
])

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300]

const displayMovements = (userAcc, sorted = false) => {
  // empty the container when update the movement data
  containerMovements.innerHTML = ""

  const userAccMoveData = sorted
    ? userAcc?.movements.slice().sort((a, b) => a - b)
    : userAcc?.movements

  const showDepositOrWithdraw = move => (move > 0 ? "deposit" : "withdrawal")

  userAccMoveData.forEach((move, i) => {
    const listHTML = `
    <div class="movements__row">
      <div class="movements__type movements__type--${showDepositOrWithdraw(
        move
      )}">${i + 1} ${showDepositOrWithdraw(move)}</div>
      <div class="movements__value">${move}€</div>
    </div>
    `

    containerMovements.insertAdjacentHTML("afterbegin", listHTML)
  })
}

// 14 Januar 2023
// display user total balance
const displayUserBalance = userAcc => {
  const userAccMoveData = userAcc?.movements

  userAcc.totalBalance = userAccMoveData.reduce((acc, mov) => {
    return acc + mov
  }, 0)

  labelBalance.textContent = `${userAcc.totalBalance}€`
}

// creating username for each account

const createUsername = userAccData => {
  userAccData.forEach(userAcc => {
    userAcc.username = userAcc.owner
      .toUpperCase()
      .split(" ")
      .map(name => name[0])
      .join("")
  })
}

createUsername(accounts)

// 16 Januar 2023
const calcSummary = userAcc => {
  const userAccMoveData = userAcc?.movements
  const userAccInterest = userAcc?.interestRate

  const income = userAccMoveData
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0)

  const outcome = userAccMoveData
    .filter(mov => mov < 0)
    .map(mov => Math.abs(mov))
    .reduce((acc, mov) => acc + mov, 0)

  // the interest from this bank is 1.5% each new deposit
  const interest = userAccMoveData
    .filter(mov => mov > 0)
    .map(mov => mov * (userAccInterest / 100))
    .filter(inter => inter > 1)
    .reduce((acc, inter) => acc + inter, 0)

  labelSumIn.textContent = `${income}€`
  labelSumOut.textContent = `${outcome}€`
  labelSumInterest.textContent = `${interest}€`
}

// update UI
const updateUI = acc => {
  // display movements data
  displayMovements(acc)

  // display balance data
  displayUserBalance(acc)

  // display summary data
  calcSummary(acc)
}

// 17 Januar 2023
// add login feature

let currentAccount

btnLogin.addEventListener("click", e => {
  e.preventDefault()

  currentAccount = accounts.find(
    acc => acc?.username === inputLoginUsername.value.toUpperCase()
  )

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // display message and show the container
    labelWelcome.textContent = `Selamat datang, ${
      currentAccount?.owner.split(" ")[0]
    }`
    containerApp.style.opacity = 1

    // update UI
    updateUI(currentAccount)

    inputLoginUsername.value = inputLoginPin.value = ""
    inputLoginPin.blur()
  } else {
    console.log("Data tidak valid")
  }
})

// 19 Januar 2023
// add transfer feature and add updateUI function
btnTransfer.addEventListener("click", e => {
  e.preventDefault()

  // get input data
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value.toUpperCase()
  )
  const transferAmount = Number(inputTransferAmount.value)

  // input validation
  const inputCheck =
    transferAmount > 0 &&
    receiverAcc?.username &&
    currentAccount?.totalBalance >= transferAmount &&
    receiverAcc?.username !== currentAccount?.username

  console.log(currentAccount)
  console.log(receiverAcc, transferAmount)

  if (inputCheck) {
    currentAccount.movements.push(-transferAmount)
    receiverAcc.movements.push(transferAmount)

    updateUI(currentAccount)

    console.log(
      `Transfer berhasil kepada ${receiverAcc.username} sebesar: ${transferAmount}`
    )
  } else {
    console.log("Transfer gagal")
  }

  inputTransferTo.value = inputTransferAmount.value = ""
})

// 20 Januar 2023
// loan feature
btnLoan.addEventListener("click", e => {
  e.preventDefault()

  const inputLoan = Number(inputLoanAmount.value)
  const inputCheck =
    inputLoan > 0 &&
    currentAccount.movements.some(mov => mov >= inputLoan * 0.1)

  if (inputCheck) {
    console.log("loan berhasil")

    currentAccount.movements.push(inputLoan)
    updateUI(currentAccount)
  } else {
    console.log("permintaan ditolak")
  }

  inputLoanAmount.value = ""
})

// deleting account
btnClose.addEventListener("click", e => {
  e.preventDefault()

  const inputUsername = inputCloseUsername.value.toUpperCase()
  const inputUserPin = Number(inputClosePin.value)

  const inputCheck =
    inputUsername === currentAccount.username &&
    inputUserPin === currentAccount.pin

  const indexAcc = accounts.findIndex(
    acc => acc.username === currentAccount.username
  )

  if (inputCheck) {
    console.log("akun berhasil dihapus")

    accounts.splice(indexAcc, 1)

    containerApp.style.opacity = 0
    labelWelcome.textContent = "Log in to get started"
  } else {
    console.log("akun gagal dihapus")
  }

  inputCloseUsername.value = inputClosePin.value = ""
})

// 21 Januar 2023
let sorted = false

btnSort.addEventListener("click", e => {
  e.preventDefault()

  displayMovements(currentAccount, !sorted)
  sorted = !sorted
})

/////////////////////////////////////////////////

/*
// 4 Januar 2023
// Arrays method
// Slice
// Slice method membuat duplikat dari sebuah array lalu memodifikasinya
// arr.slice(mulai, berhenti)
const arr = [1, 2, 3, 4, 5]

console.log(arr.slice(2))
console.log(arr)

// Splice
// Splice method sama seperti slice namun langsung mengubah isi dari array tanpa membuat duplikat
// arr.splice(mulai, jumlah elemen yang dihilangkan)
console.log(arr.splice(0, 1))
console.log(arr)

// Reverse
// sesuai namanya Reverse method membalikkan urutan dari sebuah array (langsung mengubah array itu sendiri tanpa membuat duplikat)
// arr.reverse()
const normalArr = ["nasi goreng", "makan", "saya"]
const reversedArr = normalArr.reverse()
console.log(reversedArr)
console.log(normalArr)

// Concat
// Concat method digunakan untuk menggabungkan 2 array atau lebih, membuat duplikat dari array dan mengembalikan array baru
// arrSatu.concat(arrDua, arrTiga, ...dst)
const firstArr = ["Amogus", "Suss"]
const secondArr = ["Hawtt", "Dayumm"]
const concatArr = firstArr.concat(secondArr)
console.log(concatArr)
console.log(firstArr, secondArr)

// Join
// Join method digunakan untuk menggabungkan seluruh item didalam sebuah array dan mengembalikan sebuah string
// arr.join(), hasilnya akan dipisah oleh koma
// arr.join(""), hasilnya akan jadi satu kata
// arr.join(" + "), hasilnya akan dipisah oleh tanda tambah dan spasi
const listArr = ["Nasi", "Telur", "Kecap", "Bubuk kaldu", "Sayuran"]
console.log(listArr.join(" + "))
console.log(listArr)
*/

/*
// 8 Januar 2023
// At
// at method digunakan untuk mencari item pada index tertentu dalam array

const arr = [221, 21, 52, 61, 66]

// mencari item pertama
const normalWay = arr[0]
console.log(normalWay)

const atWay = arr.at(0)
console.log(atWay)

// mencari item terakhir
const normalLastItem = arr[arr.length - 1]
console.log(normalLastItem)

const atLastItem = arr.at(-1)
console.log(atLastItem)

// Foreach
// forEach method digunakan untuk loop sebuah array dan memanggil callback function pada setiap itemnya
// NOTE: forEach method tidak bisa menggunakan break dan continue
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300]
const printMsg = msg => {
  console.log(msg)
}

// for of
for (const [i, money] of movements.entries()) {
  money > 0
    ? printMsg(`Transaksi ke-${i + 1}: Deposit sebesar $${money}`)
    : printMsg(`Transaksi ke-${i + 1}: Penarikan sebesar $${Math.abs(money)}`)
}

printMsg("==========FOREACH==========")
// forEach
movements.forEach((money, i) => {
  money > 0
    ? printMsg(`Transaksi ke-${i + 1}: Deposit sebesar $${money}`)
    : printMsg(`Transaksi ke-${i + 1}: Penarikan sebesar $${Math.abs(money)}`)
})
*/

/*
// 13 Januar 2023
// Map method
// map method mengloop sebuah array dan membuat array baru dari hasil loop tersebut (kurang lebih sama seperti forEach)

const usdToIdr = 16500

// using map
const movementsIdr = movements.map(money => money * usdToIdr)

console.log("original", movements)
console.log("map", movementsIdr)

// using for of
const movementsIdrFor = []

for (const money of movements) movementsIdrFor.push(money * usdToIdr)

console.log("for of", movementsIdrFor)

// another example using map
const movementsDesc = movements.map((money, i) => {
  return `Transaksi ke-${i + 1}, ${
    money > 0 ? "deposit" : "penarikan"
  } sebesar €${Math.abs(money)}`
})

console.log(movementsDesc)
*/

/*
// 14 Januar 2023
// Filter method

console.log(movements)

// using filter
const depositData = movements.filter(mov => mov > 0)
const withdrawalData = movements.filter(mov => mov < 0)
console.log(depositData)
console.log(withdrawalData)

// using for of
// const depositArr = []
// for (const mov of movements) if (mov > 0) depositArr.push(mov)
// console.log("Using for of", depositArr)

// Reduce method
// acc = accumulator = snowball that going bigger every time a value added
// jika tidak menggunakan initial value maka element pertama pada array akan digunakan
// const totalBalance = movements.reduce((acc, cur, i) => {
//   console.log(`Iteration ${i + 1}: ${acc}`)
//   return acc + cur
// }, 0)

const totalBalance = movements.reduce((acc, cur) => acc + cur)

console.log(totalBalance)

// using for of
// let totalBalance2 = 0
// for (const mov of movements) totalBalance2 += mov
// console.log(totalBalance2)

// contoh lain mencari nilai maksimum
const maxMov = movements.reduce((acc, mov) => {
  console.log(acc, mov)
  if (acc > mov) return acc
  else return mov
})

console.log(maxMov)
*/

/*
// 16 Januar 2023
// chaining methods

const euToIdr = 16400
const totalDepositIdr = movements
  .filter(move => move > 0)
  .map(move => move * euToIdr)
  .reduce((acc, mov) => acc + mov, 0)

console.log(totalDepositIdr)
*/

/*
// 17 Januar 2023
// Find method

const money = movements.find(move => move < 0)

console.log(movements)
console.log(money)

// mencari informasi akun
// const account = accounts.find(acc => acc.owner === "Jessica Davis")
// console.log(accounts)
// console.log(account)

// using for of
for (const accountFor of accounts)
  if (accountFor?.owner === "Jessica Davis") console.log(accountFor)

*/

/*
// 20 Januar 2023
// Some dan Every method

console.log(movements)

// includes hanya bekerja untuk 1 nilai yang sama
const includesArr = movements.includes(-130)
console.log(includesArr)

// some bekerja untuk mencari nilai yang sama dan perkondisian
// some mengembalikan nilai true jika ada salah satu elemen yang memenuhi kondisi
const someArr = movements.some(el => el > 0)
console.log(someArr)

// every sama seperti some, namun mengembalikan nilai true jika semua elemen memenuhi kondisi
const everyArr = account4.movements.every(mov => mov > 0)
console.log(everyArr)

// menggunakan callback terpisah
const checkDeposit = mov => mov > 0

const arr1 = movements.some(checkDeposit)
const arr2 = movements.every(checkDeposit)
const arr3 = movements.filter(checkDeposit)

console.log(arr1, arr2, arr3)
*/

/*
// 21 Januar 2023
// Flat dan Flatmap method

const arrFlat = [[1, 2, 3], 4, 5, 6, [7, 8, 9]]
console.log(arrFlat.flat())

const arrFlatDeep = [[1, [2, 3]], 4, 5, [6, 7]]
console.log(arrFlatDeep.flat(2))

// calculate overall balance from all users account
// using map and flat
const moveArr = accounts
  .map(move => move.movements)
  .flat()
  .reduce((acc, mov) => acc + mov, 0)
console.log(moveArr)

// using flatMap
// flatMap sama seperti menggunakan method map dan flat, namun menjadi 1 method
const moveArr2 = accounts
  .flatMap(move => move.movements)
  .reduce((acc, mov) => acc + mov, 0)
console.log(moveArr2)

// Sort method
// secara default sort mengurutkan sesuai karakter pada format UTF-16
const nameArr = ["Hansen", "Oci", "Nico", "Ehbabi"]
console.log(nameArr)

const nameArrSorted = nameArr.sort()
console.log(nameArrSorted)

// sorting number
// menggunakan callback function
// jika nilai callback function return < 0 || return == 0, maka hasilnya akan A, B (posisi akan tetap)
// jika nilai callback function return > 0, maka hasilnya akan B, A (menukar element array)
console.log(movements)

// const ascendMovements = movements.sort((a, b) => {
//   console.log(a, b)

//   if (a < b) return -1

//   if (a > b) return 1

//   return 0
// })

// const descendMovements = movements.sort((a, b) => {
//   console.log(a, b)

//   if (a < b) return 1

//   if (a > b) return -1

//   return 0
// })

// simpler version
const ascendMovements = movements.sort((a, b) => a - b)
console.log(ascendMovements)

const descendMovements = movements.sort((a, b) => b - a)
console.log(descendMovements)

// sorting object
const items = [
  { name: "Edward", value: 21 },
  { name: "Sharpe", value: 37 },
  { name: "And", value: 45 },
  { name: "The", value: -12 },
  { name: "Magnetic", value: 13 },
  { name: "Zeros", value: 37 },
]

// sort by value
items.sort((a, b) => a.value - b.value)

// sort by name
items.sort((a, b) => {
  const nameA = a.name.toUpperCase() // ignore upper and lowercase
  const nameB = b.name.toUpperCase() // ignore upper and lowercase
  // console.log(nameA, nameB)
  // console.log(nameA < nameB)

  if (nameA < nameB) {
    return -1
  }
  if (nameA > nameB) {
    return 1
  }

  // names must be equal
  return 0
})

console.log(items)
*/

/*
// 23 Januar 2023
// Fill method
// fill mengisi element pada array yang kosong atau mengganti element pada array

const arr = [1, 2, 3, 4, 5, 6]

// constructor array jika hanya 1 argument yang dimasukkan maka akan membuat array kosong dengan length sesuai argument yang dimasukkan
const emptyArr = new Array(6)

console.log(emptyArr)

// param list (kurang lebih sama kayak slice)
// el, startIndex, endIndex
emptyArr.fill(1, 2, 4)

arr.fill("replaced", 3, 5)

console.log(emptyArr)
console.log(arr)

// Array.from() method
// membuat sebuah array baru dari set, map, string, nodelist (cth: querySelectorAll) atau array kosong yang bisa kita sesuaikan sendiri
const x = Array.from({ length: 6 }, (_, i) => i + 1)
console.log(x)

const diceRolls = Array.from({ length: 100 }, () =>
  Math.floor(Math.random() * 6 + 1)
)

// even dice roll
console.log(diceRolls.filter(val => val % 2 === 0))

// odd dice roll
console.log(diceRolls.filter(val => val % 2 !== 0))

// Array.from pada nodelist
// menghitung jumlah balance dengan data dari UI
labelBalance.addEventListener("click", () => {
  const movementsFromUI = document.querySelectorAll(".movements__value")
  const arrMovements = Array.from(movementsFromUI, el =>
    Number(el.textContent.replace("€", ""))
  ).reduce((acc, mov) => acc + mov, 0)

  console.log(movementsFromUI, arrMovements)
})
*/

// 26 Januar 2023
const bankDepositSum = accounts
  .flatMap(acc => acc.movements)
  .filter(mov => mov > 0)
  .reduce((acc, mov) => acc + mov)

console.log(bankDepositSum)

// advanced use case of reduce method
// menghitung jumlah deposit yang sama atau lebih dari 1000$

// menggunakan filter
// const bankDeposit1000 = accounts.flatMap((acc) => acc.movements).filter((mov) => mov >= 1000).length

// menggunakan reduce
const bankDeposit1000 = accounts
  .flatMap(acc => acc.movements)
  .reduce((data, mov) => (mov >= 1000 ? ++data : data), 0)

// prefix increment, langsung mengembalikan nilai yang sudah diincrement berbeda dengan increment biasa yang mengembalikan nilai awal

console.log(bankDeposit1000)

// mengembalikan nilai object dengan reduce

const sums = accounts
  .flatMap(acc => acc.movements)
  .reduce(
    (sums, cur) => {
      // cur > 0 ? (sum.totalDeposit += cur) : (sum.totalWithdraw += cur)

      // mengambil property object dengan square bracket dan string
      sums[cur > 0 ? "totalDeposit" : "totalWithdraw"] += cur

      return sums
    },
    { totalDeposit: 0, totalWithdraw: 0 }
  )

console.log(sums)

// mengembalikan nilai array dengan reduce
const listAllMovements = accounts
  .flatMap(acc => acc.movements)
  .reduce(
    (data, cur) => {
      cur > 0 ? data[0].push(cur) : data[1].push(cur)

      data[0].sort((a, b) => a - b)
      data[1].sort((a, b) => b - a)

      return data
    },
    [[], []]
  )

console.log(listAllMovements)
// membuat function title case
// contohnya: This Is a Nice Title

const convertTitle = word => {
  const exceptionWords = ["a", "and", "an"]
  const capitalizeString = str => str[0].toUpperCase() + str.slice(1)

  const titleCapitalize = word
    .toLowerCase()
    .split(" ")
    .map(word =>
      exceptionWords.includes(word) ? word : capitalizeString(word)
    )
    .join(" ")

  return capitalizeString(titleCapitalize)
}

console.log(convertTitle("this IS A nice title"))
console.log(convertTitle("nico wants an apple"))
console.log(convertTitle("wolf AND shEEP"))
console.log(convertTitle("an unravel journey"))

const arr = [29, 1, 819, 550, 2000]

const largestNum = arr => arr.reduce((acc, cur) => (acc > cur ? acc : cur))

console.log(largestNum(arr))

const bankDeposit1000Advanced = accounts
  .flatMap(acc => acc.movements)
  .reduce(
    (data, mov) => {
      if (mov >= 1000) {
        data.dataDeposit.push(mov)
        data.countDeposit++
      }

      return data
    },
    { dataDeposit: [], countDeposit: 0 }
  )

console.log(bankDeposit1000Advanced)
