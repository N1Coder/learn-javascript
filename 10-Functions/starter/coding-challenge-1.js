"use strict"

const poll = {
  question: "What is your favourite programming language?",
  options: ["1: JavaScript", "2: Python", "3: Rust", "4: C++"],
  // This generates [0, 0, 0, 0]. More in the next section 😃
  // answers = poll results
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    // prompt a question
    const answer = Number(
      prompt(
        `${this.question}\n${this.options.join("\n")}\n(Write option number)`
      )
    )
    console.log(answer)

    // register answer and increment the array of answers
    if (typeof answer === "number" && answer < this.answers.length) {
      answer === 0
        ? alert("Anda membatalkan pilihan")
        : alert("Jawaban anda sudah terpilih!")

      this.answers[answer - 1]++
    } else {
      alert(`Tolong pilih opsi yang ada`)
    }

    this.displayAnswer()
    this.displayAnswer("string")
  },
  displayAnswer(type = "array") {
    if (type === "array") {
      console.log(this.answers)
    } else if (type === "string") {
      console.log(`Poll results are ${this.answers.join(", ")}`)
    }
  },
}

const answerPollBtn = document.querySelector(".poll")

answerPollBtn.addEventListener("click", poll.registerNewAnswer.bind(poll))

// display answers from given array
// [5, 1, 2, 3]
poll.displayAnswer.call({ answers: [5, 1, 2, 3] })
poll.displayAnswer.call({ answers: [5, 1, 2, 3] }, "string")
