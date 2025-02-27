const fs = require("fs");
const rawInput = fs.readFileSync("input").toString().trim(); // "/dev/stdin"
const input = rawInput.split("\n");

const number1 = Number(input[0]);
const number2 = Number(input[1]);

`${number2}`
  .split("")
  .reverse()
  .forEach((value) => {
    console.log(number1 * Number(value));
  });

console.log(number1 * number2);
