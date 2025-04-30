const fs = require("fs");
const rawInput = fs.readFileSync("input").toString().trim(); // fs.readFileSync(0, "utf-8").trim()
const input = rawInput.split("\n").map((row) => row.split(" ").map(Number));

const array = input[1];
const target = input[2][0];

console.log(array.reduce((acc, cur) => (cur === target ? acc + 1 : acc), 0));
