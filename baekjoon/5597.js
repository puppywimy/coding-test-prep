const fs = require("fs");
const rawInput = fs.readFileSync("input").toString().trim(); // fs.readFileSync(0, "utf-8").trim()

const submissions = new Set(rawInput.split("\n").map(Number));
const nonSubmissions = [];

for (let i = 1; i <= 30; i++) {
  if (!submissions.has(i)) nonSubmissions.push(i);
}

console.log(nonSubmissions.join("\n"));
