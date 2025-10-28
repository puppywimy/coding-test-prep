const fs = require("fs");
const rawInput = fs.readFileSync("input").toString().trim(); // fs.readFileSync(0, "utf-8").trim()

const numbers = rawInput.split("\n").map(Number);

let index = 0;
let maxNumber = numbers[index];

for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > maxNumber) {
    index = i;
    maxNumber = numbers[i];
  }
}

console.log(`${maxNumber}\n${index + 1}`);
