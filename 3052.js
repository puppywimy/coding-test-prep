const fs = require("fs");
const rawInput = fs.readFileSync("input").toString().trim(); // fs.readFileSync(0, "utf-8").trim()

const set = new Set(
  rawInput.split("\n").map((numberString) => numberString % 42)
);

console.log(set.size);
