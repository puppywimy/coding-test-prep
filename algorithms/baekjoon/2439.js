const fs = require("fs");
const rawInput = fs.readFileSync("input").toString().trim(); // fs.readFileSync(0, "utf-8").trim()
const input = rawInput;

const N = Number(input);

const output = Array(N)
  .fill()
  .map(
    (_, i) =>
      Array(N - (i + 1))
        .fill(" ")
        .join("") +
      Array(i + 1)
        .fill("*")
        .join("")
  )
  .join("\n");

console.log(output);
