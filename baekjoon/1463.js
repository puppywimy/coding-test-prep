const fs = require("fs");
const rawInput = fs.readFileSync("input").toString().trim(); // fs.readFileSync(0, "utf-8").trim()
const input = rawInput;

const N = input;

const table = [null, 0];

for (let i = 2; i <= N; i++) {
  const possibleCases = [table[i - 1] + 1];
  if (i % 3 === 0) possibleCases.push(table[i / 3] + 1);
  if (i % 2 === 0) possibleCases.push(table[i / 2] + 1);
  table[i] = Math.min(...possibleCases);
}

console.log(table[N]);
