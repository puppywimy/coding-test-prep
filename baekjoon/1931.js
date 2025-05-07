const fs = require("fs");
const rawInput = fs.readFileSync("input").toString().trim(); // fs.readFileSync(0, "utf-8").trim()

const schedules = rawInput
  .split("\n")
  .slice(1)
  .map((row) => row.split(" ").map(Number));
// 시작과 끝이 같은 회의의 존재 때문에 끝나는 시간이 같다면 시작하는 시간이 빠른 순으로
schedules.sort((a, b) => (a[1] === b[1] ? a[0] - b[0] : a[1] - b[1]));
let endTime = 0;
let count = 0;
schedules.forEach((schedule) => {
  if (schedule[0] < endTime) return;
  endTime = schedule[1];
  count++;
});

console.log(count);
