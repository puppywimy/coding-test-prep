const fs = require("fs");
const rawInput = fs.readFileSync("input").toString().trim(); // fs.readFileSync(0, "utf-8").trim()
const input = rawInput.split("\n").map((row) => row.split(" "));

const H = input[0][0];
const M = input[0][1];
const time = input[1][0];

const currentTime = new Date(2001, 0, 1, H, M).getTime();
const endTime = new Date(currentTime + time * 60 * 1000);

console.log(endTime.getHours(), endTime.getMinutes());
