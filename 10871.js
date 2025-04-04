const fs = require("fs");
const rawInput = fs.readFileSync("input").toString().trim(); // fs.readFileSync(0, "utf-8").trim()
const input = rawInput.split("\n").map((row) => row.split(" ").map(Number));

const X = input[0][1];
const A = input[1];

console.log(A.filter((a) => a < X).join(" "));
