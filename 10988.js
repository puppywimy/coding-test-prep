const fs = require("fs");
const rawInput = fs.readFileSync("input").toString().trim(); // fs.readFileSync(0, "utf-8").trim()

const word = rawInput;

console.log(
  [...word].every((_, i, origin) => origin[i] === origin[origin.length - 1 - i])
    ? 1
    : 0
);
