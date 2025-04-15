const fs = require("fs");
const rawInput = fs.readFileSync("input").toString().trim(); // fs.readFileSync(0, "utf-8").trim()

const numbers = rawInput
  .split("\n")
  .map((row) => row.split(" ").map(Number))[1];
const sortedNumbers = numbers.sort((a, b) => a - b);

console.log(sortedNumbers[0], sortedNumbers[sortedNumbers.length - 1]);
