const fs = require("fs");
const rawInput = fs.readFileSync("input").toString().trim(); // fs.readFileSync(0, "utf-8").trim()
const input = rawInput;

const n = Number(input);

console.log((n * (n + 1)) / 2);
