const fs = require("fs");
const rawInput = fs.readFileSync("input").toString().trim(); // fs.readFileSync(0, "utf-8").trim()

const stairs = rawInput
  .split("\n")
  .map((score, i) => (i === 0 ? 0 : Number(score)));
const stairsCount = stairs.length - 1;

const table = [null, stairs[1], stairs[2], stairs[3]];

for (let i = 4; i < stairsCount; i++) {
  table[i] = Math.min(table[i - 2], table[i - 3]) + stairs[i];
}

let total = stairs.reduce((acc, cur) => acc + cur, 0);
if (stairsCount > 2) {
  total -= Math.min(table[stairsCount - 1], table[stairsCount - 2]);
}
console.log(total);
