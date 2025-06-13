const fs = require("fs");
const rawInput = fs.readFileSync("input").toString().trim(); // fs.readFileSync(0, "utf-8").trim();

const triangle = rawInput
  .split("\n")
  .slice(1)
  .map((row) => row.split(" ").map(Number));

// n = 1일 때는 for문이 동작하지 않으나 triangle[0][0]을 반환하는 것은 똑같음.
for (let i = triangle.length - 2; i >= 0; i--) {
  for (let j = 0; j < triangle[i].length; j++) {
    triangle[i][j] += Math.max(triangle[i + 1][j], triangle[i + 1][j + 1]);
  }
}

console.log(triangle[0][0]);
