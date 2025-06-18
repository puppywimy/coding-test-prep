const fs = require("fs");
const rawInput = fs.readFileSync("input").toString().trim(); // fs.readFileSync(0, "utf-8").trim();

const numberStrings = rawInput.split("\n").slice(1);
const counts = {};
numberStrings.forEach((numberString) => {
  if (counts[numberString] === undefined) counts[numberString] = 0;
  counts[numberString]++;
});
const entries = Object.entries(counts);
entries.sort((a, b) =>
  a[1] === b[1] ? (BigInt(a[0]) > BigInt(b[0]) ? 1 : -1) : b[1] - a[1]
);

console.log(entries[0][0]);
