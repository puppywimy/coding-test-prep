const fs = require("fs");
const rawInput = fs.readFileSync("input").toString().trim(); // fs.readFileSync(0, "utf-8").trim()

const numbers = rawInput.split("\n").slice(1).map(Number);
const table = [0, 1];
const routeTable = [
  [1, 0],
  [0, 1],
];
for (let i = 2; i <= Math.max(...numbers); i++) {
  table[i] = table[i - 1] + table[i - 2];
  routeTable[i] = [
    routeTable[i - 1][0] + routeTable[i - 2][0],
    routeTable[i - 1][1] + routeTable[i - 2][1],
  ];
}
const output = [];
numbers.forEach((number) => {
  output.push(routeTable[number].join(" "));
});

console.log(output.join("\n"));
