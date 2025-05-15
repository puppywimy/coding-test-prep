const fs = require("fs");
const rawInput = fs.readFileSync("input").toString().trim(); // fs.readFileSync(0, "utf-8").trim()

const sequence = rawInput.split("\n")[1].split(" ").map(Number);
const table = [];
for (let i = 0; i < sequence.length; i++) {
  const candidateIndices = [];
  for (let j = 0; j < i; j++) {
    if (sequence[j] < sequence[i]) {
      candidateIndices.push(j);
    }
  }
  const lengths = candidateIndices.map((index) => table[index]);
  table[i] = lengths.length ? Math.max(...lengths) + 1 : 1;
}

console.log(Math.max(...table));
