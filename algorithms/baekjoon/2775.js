const fs = require("fs");
const rawInput = fs.readFileSync("input").toString().trim(); // fs.readFileSync(0, "utf-8").trim()

const MAX_OF_K = 14;
const MAX_OF_N = 14;

const testCases = rawInput
  .split("\n")
  .slice(1)
  .map((_, i, origin) => (i % 2 === 0 ? [origin[i], origin[i + 1]] : null))
  .filter((element) => element);
const table = [new Array(MAX_OF_N + 1).fill().map((_, i) => i)];
for (let i = 1; i <= MAX_OF_K; i++) {
  table[i] = [0, 1];
  for (let j = 2; j <= MAX_OF_N; j++) {
    table[i][j] = table[i][j - 1] + table[i - 1][j];
  }
}
const output = testCases.map(([k, n]) => table[k][n]).join("\n");

console.log(output);
