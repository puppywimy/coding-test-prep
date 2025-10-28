const fs = require("fs");
const rawInput = fs.readFileSync("input").toString().trim(); // fs.readFileSync(0, "utf-8").trim()

const input = rawInput.split("\n").map((row) => row.split(" ").map(Number));
const basket = new Array(input[0][0]).fill().map((_, i) => i + 1);
const tasks = input.slice(1, input.length);

tasks.forEach(([i, j]) => {
  const targetRange = basket.slice(i - 1, j);
  targetRange.reverse();
  basket.splice(i - 1, j - i + 1, ...targetRange);
});

console.log(basket.join(" "));
