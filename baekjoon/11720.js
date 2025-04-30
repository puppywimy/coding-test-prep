const fs = require("fs");
const rawInput = fs.readFileSync("input").toString().trim(); // fs.readFileSync(0, "utf-8").trim()

const numbers = [...rawInput.split("\n")[1]];
const total = numbers.reduce((acc, cur) => acc + Number(cur), 0);

console.log(total);
