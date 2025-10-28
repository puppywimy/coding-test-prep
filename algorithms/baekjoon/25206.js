const fs = require("fs");
const rawInput = fs.readFileSync("input").toString().trim(); // fs.readFileSync(0, "utf-8").trim()

const gradesMap = {
  "A+": 4.5,
  A0: 4.0,
  "B+": 3.5,
  B0: 3.0,
  "C+": 2.5,
  C0: 2.0,
  "D+": 1.5,
  D0: 1.0,
  F: 0.0,
};
const reports = rawInput.split("\n").map((row) => row.split(" "));
const totalCredits = reports.reduce(
  (acc, cur) => acc + (cur[2] === "P" ? 0 : Number(cur[1])),
  0
);
const totalGrades = reports.reduce(
  (acc, cur) => acc + (cur[2] === "P" ? 0 : gradesMap[cur[2]] * cur[1]),
  0
);

console.log(totalGrades / totalCredits);
