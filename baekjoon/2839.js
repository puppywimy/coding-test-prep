const fs = require("fs");
const rawInput = fs.readFileSync("input").toString().trim(); // fs.readFileSync(0, "utf-8").trim()

const N = Number(rawInput);
const table = [null, -1, -1, 1, -1, 1];
for (let i = 6; i <= N; i++) {
  const candidates = [table[i - 3], table[i - 5]].filter(
    (element) => element > 0
  );
  table[i] = candidates.length ? Math.min(...candidates) + 1 : -1;
}

console.log(table[N]);
