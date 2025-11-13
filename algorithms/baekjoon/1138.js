const fs = require("fs");
const rawInput = fs.readFileSync("input").toString().trim(); // fs.readFileSync(0, "utf-8").trim();

function solution() {
  const counts = rawInput.split("\n")[1].split(" ").map(Number);
  const line = Array.from({ length: counts.length }).fill(null);
  for (let i = 0; i < counts.length; i++) {
    const targetCount = counts[i];
    const currentHeight = i + 1;

    let count = 0;
    for (let j = 0; j < line.length; j++) {
      if (line[j] === null && count++ === targetCount) line[j] = currentHeight;
    }
  }
  console.log(line.join(" "));
}

solution();
