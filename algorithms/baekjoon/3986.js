const fs = require("fs");
const rawInput = fs.readFileSync("input").toString().trim(); // fs.readFileSync(0, "utf-8").trim();

function solution() {
  const data = new Array(100000).fill(null);
  let top = 0;

  let count = 0;
  for (const word of rawInput.split("\n").slice(1)) {
    top = 0; // reset the stack
    for (const character of word.split("")) {
      if (character === "A") {
        if (top && data[top - 1] === "A") {
          top--;
        } else {
          data[top++] = character;
        }
      } else if (character === "B") {
        if (top && data[top - 1] === "B") {
          top--;
        } else {
          data[top++] = character;
        }
      }
    }
    if (!top) count++;
  }

  console.log(count);
}

solution();
