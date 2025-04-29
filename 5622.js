const fs = require("fs");
const rawInput = fs.readFileSync("input").toString().trim(); // fs.readFileSync(0, "utf-8").trim()

// const alphabetMap = new Map();
// ["ABC", "DEF", "GHI", "JKL", "MNO", "PQRS", "TUV", "WXYZ"].forEach(
//   ([...alphabets], i) => {
//     alphabets.forEach((alphabet) => alphabetMap.set(alphabet, i + 3));
//   }
// );
// console.log(Object.fromEntries(alphabetMap));
const alphabetMap = {
  A: 3,
  B: 3,
  C: 3,
  D: 4,
  E: 4,
  F: 4,
  G: 5,
  H: 5,
  I: 5,
  J: 6,
  K: 6,
  L: 6,
  M: 7,
  N: 7,
  O: 7,
  P: 8,
  Q: 8,
  R: 8,
  S: 8,
  T: 9,
  U: 9,
  V: 9,
  W: 10,
  X: 10,
  Y: 10,
  Z: 10,
};

console.log([...rawInput].reduce((acc, cur) => acc + alphabetMap[cur], 0));
