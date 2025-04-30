const fs = require("fs");
const rawInput = fs.readFileSync("input").toString().trim(); // fs.readFileSync(0, "utf-8").trim()

const number = Number(rawInput);
const outputArray = [];

for (let i = 1; i <= number - 1; i++) {
  const blanks = new Array(number - i).fill(" ");
  const stars = new Array(2 * i - 1).fill("*");
  outputArray.push([...blanks, ...stars].join(""));
}

outputArray.push(new Array(2 * number - 1).fill("*").join(""));

for (let i = 1; i <= number - 1; i++) {
  const blanks = new Array(i).fill(" ");
  const stars = new Array(2 * (number - i) - 1).fill("*");
  outputArray.push([...blanks, ...stars].join(""));
}

console.log(outputArray.join("\n"));
