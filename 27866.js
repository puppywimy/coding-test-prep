const fs = require("fs");
const rawInput = fs.readFileSync("input").toString().trim(); // fs.readFileSync(0, "utf-8").trim()

const input = rawInput.split("\n");
const word = input[0];
const index = Number(input[1]) - 1;

console.log(word.charAt(index));
