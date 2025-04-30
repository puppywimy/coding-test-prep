const fs = require("fs");
const rawInput = fs.readFileSync("input").toString().trim(); // fs.readFileSync(0, "utf-8").trim()

console.log(
  rawInput
    .split("\n")
    .slice(1)
    .map((string) => `${string.charAt(0)}${string.charAt(string.length - 1)}`)
    .join("\n")
);
