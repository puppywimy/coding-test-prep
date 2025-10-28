const fs = require("fs");
const rawInput = fs.readFileSync("input").toString().trim(); // fs.readFileSync(0, "utf-8").trim()

const n = rawInput;
const table = [null, 1, 2];
for (let i = 3; i <= n; i++) {
  table[i] = (table[i - 1] + table[i - 2]) % 10007;
}

console.log(table[n]);
