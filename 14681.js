const fs = require("fs");
const rawInput = fs.readFileSync("input").trim(); // 0, "utf-8"
const input = rawInput.split("\n");

const x = Number(input[0]);
const y = Number(input[1]);

if (x > 0) {
  if (y > 0) {
    console.log(1);
  } else {
    console.log(4);
  }
} else {
  if (y > 0) {
    console.log(2);
  } else {
    console.log(3);
  }
}
