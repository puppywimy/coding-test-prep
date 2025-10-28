const fs = require("fs");
const rawInput = fs.readFileSync("input").toString().trim(); // fs.readFileSync(0, "utf-8").trim()

const input = rawInput.split("\n").map((row) => row.split(" ").map(Number));
const baskets = new Array(input[0][0]).fill().map((_, i) => i + 1);
const tasks = input.slice(1, input.length);

tasks.forEach(([i, j]) => {
  if (i === j) return;
  [baskets[i - 1], baskets[j - 1]] = [baskets[j - 1], baskets[i - 1]];
});

console.log(baskets.join(" "));
