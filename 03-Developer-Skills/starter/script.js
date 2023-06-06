// Remember, we're gonna use strict mode in all scripts now!
"use strict";

/*
const num = 17;
// if (x === 17) console.log(x);

const nilai = [
  5, 5, 8, 10, 6, 6, 8
];

const average = (arr) => {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total / arr.length;

}

console.log(Math.trunc(average(nilai)));

// problem solve 1
// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

// what if the argument is more than 1 array
// 1. How to merge 2 arrays

const temperatures = [
  3, -2, -6, "error", 9, 13, 17, 15, 14, 9, 5
]
const temperaturesSec = [
  1, -1, -4, "error", 9, 3, 19, 15, 14, 11, 7
]

// 1) Understanding the problem
// - What is temp amplitude? Answer: difference between highest and lowest temp
// - How to compute max and min temperatures?
// - What's a sensor error? And what to do?

// 2) Breaking up into sub-problems
// - How to ignore errors?
// - Find max value in temp array
// - Find min value in temp array
// - Subtract min from max (amplitude) and return it

// the max variable will assume that the first value in an array will be the highest value
// and we start an iteration that check every value if that higher than the max value
// if true then the max value will be assign with the new value
const calcTempAmplitude = (temp1, temp2) => {

  const temps = temp1.concat(temp2)
  console.table(temps);

  let max = temps[0]
  let min = temps[0]

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];

    if (typeof curTemp === "string") continue;
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  
  console.log(max, min);
  return max - min;
}

console.log(calcTempAmplitude(temperatures, temperaturesSec));
*/

// 11 Marz 2022
// debugging bugs

// const convertToKelvin = () => {
//   const suhu = {
//     type: "temp",
//     unit: "celcius",

//     // Memperbaiki bug
//     // value: Number(prompt("Convert Celcius To Kelvin, Insert The Celcius Value Here")),

//     // default fallback value
//     value: 10
//   }

//   console.table(suhu)
//   const suhuKelvin = `Suhunya ${suhu.value + 273} Kelvin`
//   return suhuKelvin
// }

// // Mencari bug
// console.log(convertToKelvin());

// array of temp
// const temperatures = [
//   3, -2, -6, "error", 9, 13, 17, 15, 14, 9, 5
// ]

// const temperaturesSec = [
//   1, -1, -4, "error", 9, 3, 19, 15, 14, 11, 7
// ]

// calc amplitude temp
const calcTempAmplitudeBug = (temp1, temp2) => {
  const temps = temp1.concat(temp2);
  // console.table(temps);

  let max = 0;
  let min = 0;

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];

    if (typeof curTemp === "string", undefined) continue;
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }

  console.log(max, min);
  return max - min;
};

// ngecek bug
const tryBug = calcTempAmplitudeBug([2, 3, -1], [8, 7, 6]);
console.log(tryBug);

// console.log(calcTempAmplitudeBug(temperatures, temperaturesSec));
