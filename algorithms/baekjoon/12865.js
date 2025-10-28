const fs = require("fs");
const rawInput = fs.readFileSync("input").toString().trim(); // fs.readFileSync(0, "utf-8").trim()

const input = rawInput.split("\n").map((row) => row.split(" ").map(Number));
const maxWeightOfBag = input[0][1];
const items = input.slice(1);
const d1 = new Array(maxWeightOfBag + 1)
  .fill()
  .map((_, maxWeight) => (maxWeight < items[0][0] ? 0 : items[0][1]));
const table = [d1];
for (let i = 1; i < items.length; i++) {
  const dI = new Array(maxWeightOfBag + 1)
    .fill()
    .map((_, maxWeight) =>
      Math.max(
        table[i - 1][maxWeight],
        maxWeight < items[i][0]
          ? 0
          : table[i - 1][maxWeight - items[i][0]] + items[i][1]
      )
    );
  table[i] = dI;
}

console.log(table[items.length - 1][maxWeightOfBag]);
