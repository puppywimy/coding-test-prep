const fs = require("fs");
const rawInput = fs.readFileSync("input").toString().trim(); // fs.readFileSync(0, "utf-8").trim();

const numbers = rawInput.split("\n")[1].split(" ").map(Number);
const prefixSumTable = [numbers[0]];
for (let i = 1; i < numbers.length; i++) {
  prefixSumTable[i] = prefixSumTable[i - 1] + numbers[i];
}
let minPrefixSum = 0;
let max = prefixSumTable[0];
for (let i = 0; i < numbers.length; i++) {
  const candidate = prefixSumTable[i] - minPrefixSum;
  if (candidate > max) max = candidate;
  if (prefixSumTable[i] < minPrefixSum) {
    minPrefixSum = prefixSumTable[i];
  }
}

console.log(max);
