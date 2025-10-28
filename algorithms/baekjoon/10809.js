const fs = require("fs");
const rawInput = fs.readFileSync("input").toString().trim(); // fs.readFileSync(0, "utf-8").trim()

const word = rawInput;

// const alpabets = [...String.fromCharCode(
//   ...Array(26)
//     .fill()
//     .map((_, i) => i + 97)
// )];

const alpabets = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

const answer = alpabets.map((alpabet) => word.indexOf(alpabet)).join(" ");

console.log(answer);
