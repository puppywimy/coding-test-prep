const fs = require("fs");
const rawInput = fs.readFileSync("input").toString().trim(); // fs.readFileSync(0, "utf-8").trim()
const input = rawInput.split(" ");

const dice1 = input[0];
const dice2 = input[1];
const dice3 = input[2];

if (dice1 === dice2 && dice2 === dice3) {
  console.log(10000 + dice1 * 1000);
} else if (dice1 === dice2 || dice1 === dice3) {
  console.log(1000 + dice1 * 100);
} else if (dice2 === dice3) {
  console.log(1000 + dice2 * 100);
} else {
  console.log(Math.max(dice1, dice2, dice3) * 100);
}
