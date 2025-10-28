const fs = require("fs");
const rawInput = fs.readFileSync("input").toString().trim(); // fs.readFileSync(0, "utf-8").trim()
const input = rawInput
  .split("\n")
  .filter((_, i) => i !== 0)
  .map(Number);

const table = [null, 1, 2, 4];

// n 값마다 계산하는 것이 아닌, 미리 테이블 값을 구해놓는 것이 효율적
for (let i = 4; i <= 11; i++) {
  table[i] = table[i - 1] + table[i - 2] + table[i - 3];
}

console.log(input.map((n) => table[n]).join("\n"));
