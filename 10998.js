const fs = require("fs");
const rawInput = fs.readFileSync("input").toString().trim(); // "/dev/stdin"
const input = rawInput.split(" ");

console.log(Number(input[0]) * Number(input[1]));
