const fs = require("fs");
const rawInput = fs.readFileSync("input").toString().trim(); // "/dev/stdin"
const input = rawInput;

console.log(Number(input) - 543);
