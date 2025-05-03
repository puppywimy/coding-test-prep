const fs = require("fs");
const rawInput = fs.readFileSync("input").toString().trim(); // fs.readFileSync(0, "utf-8").trim()

const numbers = rawInput.split("\n").slice(1).map(Number);
const table = [0, 1];
for (let i = 2; i <= Math.max(...numbers); i++) {
  table[i] = table[i - 1] + table[i - 2];
}
const output = numbers.map((number) =>
  number === 0 ? "1 0" : `${table[number - 1]} ${table[number]}`
);

console.log(output.join("\n"));
