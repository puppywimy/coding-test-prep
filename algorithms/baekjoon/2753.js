const fs = require("fs");
const rawInput = fs.readFileSync("input").toString().trim(); // "/dev/stdin"
const input = rawInput;

const year = input;

if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) console.log(1);
else console.log(0);
