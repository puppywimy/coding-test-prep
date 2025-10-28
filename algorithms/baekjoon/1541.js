const fs = require("fs");
const rawInput = fs.readFileSync("input").toString().trim(); // fs.readFileSync(0, "utf-8").trim()

const expressions = rawInput.split("-");
const firstNumber = expressions[0]
  .split("+")
  .reduce((acc, cur) => acc + Number(cur), 0);
const minusNumbers = expressions
  .splice(1)
  .map((expression) =>
    expression.split("+").reduce((acc, cur) => acc + Number(cur), 0)
  );

console.log(minusNumbers.reduce((acc, cur) => acc - cur, firstNumber));
