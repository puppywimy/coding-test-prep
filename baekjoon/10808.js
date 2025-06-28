const fs = require("fs");
const rawInput = fs.readFileSync("input").toString().trim(); // fs.readFileSync(0, "utf-8").trim();

const characters = rawInput.split("");
const alphabetCounts = new Array(26).fill(0);
characters.forEach((character) => {
  alphabetCounts[character.charCodeAt(0) - 97]++;
});

console.log(alphabetCounts.join(" "));
