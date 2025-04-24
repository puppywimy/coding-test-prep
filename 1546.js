const fs = require("fs");
const rawInput = fs.readFileSync("input").toString().trim(); // fs.readFileSync(0, "utf-8").trim()

const scores = rawInput.split("\n")[1].split(" ").map(Number);
const max = Math.max(...scores);
const newAverage =
  scores.reduce((acc, cur) => acc + (cur / max) * 100, 0) / scores.length;

console.log(newAverage);
