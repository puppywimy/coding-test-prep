const fs = require("fs");
const rawInput = fs.readFileSync("input").toString().trim(); // fs.readFileSync(0, "utf-8").trim();

function solution() {
  const [[N, S], numbers] = rawInput
    .split("\n")
    .map((row) => row.split(" ").map(Number));
  let cursor1 = 0;
  let cursor2 = 1;
  let total = numbers[cursor1];
  let min = 100000;
  while (cursor2 <= N) {
    if (total < S) {
      total += numbers[cursor2++];
      continue;
    }
    let length = cursor2 - cursor1;
    if (length < min) min = length;
    total -= numbers[cursor1++];
  }
  console.log(min === 100000 ? 0 : min);
}

solution();
