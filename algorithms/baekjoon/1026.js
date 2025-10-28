const fs = require("fs");
const rawInput = fs.readFileSync("input").toString().trim(); // fs.readFileSync(0, "utf-8").trim()

const input = rawInput.split("\n");
const N = Number(input[0]);
const [A, B] = input.slice(1).map((row) => row.split(" ").map(Number));
A.sort((a, b) => a - b);
B.sort((a, b) => b - a);
let S = 0;
for (let i = 0; i < N; i++) {
  S += A[i] * B[i];
}

console.log(S);
