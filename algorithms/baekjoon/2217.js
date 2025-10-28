const fs = require("fs");
const rawInput = fs.readFileSync("input").toString().trim(); // fs.readFileSync(0, "utf-8").trim()

const ropes = rawInput.split("\n").slice(1).map(Number);
ropes.sort((a, b) => a - b);
let max = 0;
ropes.forEach((rope, i, { length }) => {
  const temp = rope * (length - i);
  if (max > temp) return;
  max = temp;
});

console.log(max);
