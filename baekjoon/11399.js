const fs = require("fs");
const rawInput = fs.readFileSync("input").toString().trim(); // fs.readFileSync(0, "utf-8").trim()

const times = rawInput.split("\n")[1].split(" ").map(Number);
times.sort((a, b) => a - b);
const output = times.reduce(
  (acc, _, i, origin) => acc + origin[i] * (origin.length - i),
  0
);

console.log(output);
