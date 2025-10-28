const fs = require("fs");
const rawInput = fs.readFileSync("input").toString().trim(); // fs.readFileSync(0, "utf-8").trim()

const word = rawInput.toUpperCase();
const characterCountMap = new Map();
[...word].forEach((character) => {
  characterCountMap.set(character, (characterCountMap.get(character) ?? 0) + 1);
});
const characterCounts = Array.from(characterCountMap);
characterCounts.sort((a, b) => b[1] - a[1]);

console.log(
  characterCounts[0][1] === characterCounts[1]?.[1]
    ? "?"
    : characterCounts[0][0]
);
