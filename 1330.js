const fs = require("fs");
const rawInput = fs.readFileSync("input").toString().trim(); // "/dev/stdin"
const input = rawInput.split(" ");

const A = Number(input[0]);
const B = Number(input[1]);

if (A > B) console.log(">");
else if (A < B) console.log("<");
else console.log("==");
