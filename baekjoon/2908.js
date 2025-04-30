const fs = require("fs");
const rawInput = fs.readFileSync("input").toString().trim(); // fs.readFileSync(0, "utf-8").trim()

const [A, B] = rawInput
  .split(" ")
  .map((numberString) => Number([...numberString].reverse().join("")));

console.log(Math.max(A, B));
