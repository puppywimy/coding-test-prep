const fs = require("fs");
const rawInput = fs.readFileSync("input").toString().trim(); // fs.readFileSync(0, "utf-8").trim()

const input = rawInput
  .split("\n")
  .slice(1)
  .map((row) => row.split(" ").map(Number));
const numbers = input[0];
const tasks = input.slice(1);
const table = [0, numbers[0]];
for (let i = 2; i <= numbers.length; i++) {
  table[i] = table[i - 1] + numbers[i - 1];
}

console.log(tasks.map(([i, j]) => table[j] - table[i - 1]).join("\n"));
