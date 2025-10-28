const fs = require("fs");
const rawInput = fs.readFileSync("input").toString().trim(); // fs.readFileSync(0, "utf-8").trim()

const houses = rawInput
  .split("\n")
  .slice(1)
  .map((row) => row.split(" ").map(Number));
const table = [null, houses[0]];
for (let i = 2; i <= houses.length; i++) {
  table[i] = [
    Math.min(table[i - 1][1], table[i - 1][2]) + houses[i - 1][0],
    Math.min(table[i - 1][0], table[i - 1][2]) + houses[i - 1][1],
    Math.min(table[i - 1][0], table[i - 1][1]) + houses[i - 1][2],
  ];
}

console.log(Math.min(...table[houses.length]));
