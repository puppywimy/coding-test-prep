const fs = require("fs");
const rawInput = fs.readFileSync("input").toString().trim(); // fs.readFileSync(0, "utf-8").trim()
const input = rawInput.split(" ");

const H = input[0];
const M = input[1];

const time = new Date(2001, 0, 1, H, M).getTime();
const newTime = new Date(time - 45 * 60 * 1000);

console.log(newTime.getHours(), newTime.getMinutes());
