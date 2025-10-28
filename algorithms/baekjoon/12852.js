const fs = require("fs");
const rawInput = fs.readFileSync("input").toString().trim(); // fs.readFileSync(0, "utf-8").trim()

const N = Number(rawInput);
const table = [null, 0];
const routeTable = [null, null];
for (let i = 2; i <= N; i++) {
  const candidateIndices = [i - 1];
  if (i % 2 === 0) candidateIndices.push(i / 2);
  if (i % 3 === 0) candidateIndices.push(i / 3);
  candidateIndices.sort((a, b) => table[a] - table[b]);
  table[i] = table[candidateIndices[0]] + 1;
  routeTable[i] = candidateIndices[0];
}
let output = `${table[N]}\n`;
const route = [];
let index = N;
while (index) {
  route.push(index);
  index = routeTable[index];
}
output += route.join(" ");

console.log(output);
