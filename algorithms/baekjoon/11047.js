const fs = require("fs");
const rawInput = fs.readFileSync("input").toString().trim(); // fs.readFileSync(0, "utf-8").trim()

const rows = rawInput.split("\n");
const K = Number(rows[0].split(" ")[1]);
const coinTypes = rows
  .slice(1)
  .map(Number)
  .filter((coinType) => coinType <= K);
coinTypes.reverse();
let rest = K;
let coinCount = 0;
coinTypes.forEach((coinType) => {
  coinCount += Math.floor(rest / coinType);
  rest %= coinType;
});

console.log(coinCount);
