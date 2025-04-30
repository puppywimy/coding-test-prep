const fs = require("fs");
const rawInput = fs.readFileSync("input").toString().trim(); // fs.readFileSync(0, "utf-8").trim()
const input = rawInput.split("\n").map((row) => row.split(" ").map(Number));

const testCases = input.slice(1, input.length);
const output = testCases.reduce((acc, [a, b]) => acc + (a + b) + "\n", "");

console.log(output);
