//  14 Marz 2022

"use-strict";

// test data 1
const temp1 = [17, 21, 23];

// test data 2
const temp2 = [12, 5, -5, 0, 4];

// const printForecast = (arr) => {
//   for (let i = 0; i < arr.length; i++) {
//     // const printResults = `... ${arr[i]}°C in ${i + 1} days`
//     // return printResults;
//     console.log(`... ${arr[i]}°C in ${i + 1} days`);
//   }
// };

// printForecast(temp1)
// printForecast(temp2)

// solutions 2
const printForecast = (arr) => {
  let str = "... ";

  for (let i = 0; i < arr.length; i++) {
    str += `${arr[i]}°C in ${i + 1} days ... `;
  }

  console.log(str);
};

printForecast(temp2)