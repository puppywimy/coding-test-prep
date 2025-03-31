const fs = require("fs");
const rawInput = fs.readFileSync("input").toString().trim(); // fs.readFileSync(0, "utf-8").trim()
const input = rawInput.split("\n").map((row) => row.split(" ").map(Number));

const targetTotal = input[0][0];
const testCases = input.slice(2, input.length);

const total = testCases.reduce((acc, [a, b]) => acc + a * b, 0);

console.log(targetTotal === total ? "Yes" : "No");
