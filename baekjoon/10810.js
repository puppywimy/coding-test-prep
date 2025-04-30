const fs = require("fs");
const rawInput = fs.readFileSync("input").toString().trim(); // fs.readFileSync(0, "utf-8").trim()

const input = rawInput.split("\n").map((row) => row.split(" ").map(Number));

const baskets = new Array(input[0][0]).fill(0);
const tasks = input.slice(1, input.length);
tasks.forEach(([i, j, k]) => {
  for (let index = i - 1; index < j; index++) baskets[index] = k;
});

console.log(baskets.join(" "));
