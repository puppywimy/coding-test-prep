const fs = require("fs");
const rawInput = fs.readFileSync("input").toString().trim(); // fs.readFileSync(0, "utf-8").trim();

function solution() {
  const [T, ...changes] = rawInput.split("\n").map(Number);
  for (let i = 0; i < T; i++) {
    let change = changes[i];
    const coins = [];

    const quarter = Math.floor(change / 25);
    coins.push(quarter);
    if (quarter > 0) change %= 25;

    const dime = Math.floor(change / 10);
    coins.push(dime);
    if (dime > 0) change %= 10;

    const nickel = Math.floor(change / 5);
    coins.push(nickel);
    if (nickel > 0) change %= 5;

    const penny = Math.floor(change / 1);
    coins.push(penny);
    if (penny > 0) change %= 1;

    console.log(coins.join(" "));
  }
}

solution();
