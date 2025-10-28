const fs = require("fs");
const rawInput = fs.readFileSync("input").toString().trim(); // fs.readFileSync(0, "utf-8").trim();

const numbers = rawInput.split("\n").slice(1).map(Number);
const counts = new Array(2000001).fill(0); // -1000000 ~ 1000000 정수
numbers.forEach((number) => counts[number + 1000000]++);
const sortedNumbers = [];
counts.forEach((count, i) => {
  if (!count) return;
  for (let j = 0; j < count; j++) {
    sortedNumbers.push(i - 1000000);
  }
});

console.log(sortedNumbers.join("\n"));
