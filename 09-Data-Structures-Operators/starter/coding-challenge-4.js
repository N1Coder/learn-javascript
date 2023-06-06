// 16 Juni 2022

"use-strict"

document.body.append(document.createElement("textarea"))
document.body.append(document.createElement("button"))

const btn = document.querySelector("button")
const inputField = document.querySelector("textarea")
inputField.value = `underscore_case
 first_name
Some_Variable
  calculate_AGE
delayed_departure`

btn.addEventListener("click", () => {
  const storeVal = inputField.value.split(/\n/g)
  for (const [index, item] of storeVal.entries()) {
    // ================================
    // store each letter in letters arr and split any underscore symbol
    // add .toLowerCase() method
    const letters = item.toLowerCase().trim().split(/_/g)
    // ================================

    // ================================
    // each item from letters arr will converted into lowercase string
    // const lowerCaseLetter = letters[0].toLowerCase()
    // const lowerCaseLetter1 = letters[1].toLowerCase()

    // refactor using destructure
    const [firstLetter, secondLetter] = letters
    // ================================

    // ================================
    // capitalized second item from arr (secondLetter)
    const capitalizedLetter =
      secondLetter[0].toUpperCase() + secondLetter.slice(1)
    // ================================

    // ================================
    // Print to the console the results
    const camelOutput = firstLetter + capitalizedLetter
    console.log(`${camelOutput.padEnd(25, " ")} ${"✅".repeat(index + 1)}`)
    // ================================
  }
})
