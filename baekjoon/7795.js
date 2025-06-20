const fs = require("fs");
const rawInput = fs.readFileSync("input").toString().trim(); // fs.readFileSync(0, "utf-8").trim();

const testCasesInput = rawInput
  .split("\n")
  .slice(1)
  .map((row) => row.split(" ").map(Number));

const output = [];
for (let i = 0; i < testCasesInput.length; i += 3) {
  const sizesOfA = testCasesInput[i + 1];
  const sizesOfB = testCasesInput[i + 2];
  sizesOfA.sort((a, b) => b - a);
  sizesOfB.sort((a, b) => b - a);
  const total = sizesOfA
    .map((sizeOfA) => {
      let index = 0;
      while (index < sizesOfB.length) {
        if (sizeOfA > sizesOfB[index]) break;
        index++;
      }
      return sizesOfB.length - index;
    })
    .reduce((acc, cur) => acc + cur, 0);
  output.push(total);
}

console.log(output.join("\n"));
