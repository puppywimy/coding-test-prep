const fs = require("fs");
const rawInput = fs.readFileSync("input").toString().trim(); // fs.readFileSync(0, "utf-8").trim();

function solution() {
  const [, numbers, operatorCounts] = rawInput
    .split("\n")
    .map((row) => row.split(" ").map(Number));
  const operators = [];
  for (let i = 0; i < operatorCounts.length; i++) {
    for (let j = 0; j < operatorCounts[i]; j++) operators.push(i);
  }
  const isUsed = operators.map(() => false);

  let max = -1000000000;
  let min = 1000000000;

  function recursive(index, total) {
    if (index === numbers.length) {
      if (total > max) max = total;
      if (total < min) min = total;
      return;
    }

    for (let i = 0; i < operators.length; i++) {
      if (!isUsed[i]) {
        isUsed[i] = true;
        switch (operators[i]) {
          case 0:
            recursive(index + 1, total + numbers[index]);
            break;
          case 1:
            recursive(index + 1, total - numbers[index]);
            break;
          case 2:
            recursive(index + 1, total * numbers[index]);
            break;
          case 3:
            recursive(
              index + 1,
              total < 0 && numbers[index] > 0
                ? -Math.floor(-total / numbers[index])
                : Math.floor(total / numbers[index])
            );
            break;
        }
        isUsed[i] = false;
      }
    }
  }

  recursive(1, numbers[0]);
  console.log(`${max}\n${min}`);
}

solution();
