const fs = require("fs");
const rawInput = fs.readFileSync("input").toString().trim(); // fs.readFileSync(0, "utf-8").trim()

const croatianAlphabets = ["dz=", "c=", "c-", "d-", "lj", "nj", "s=", "z="];
let translatedWord = rawInput;

croatianAlphabets.forEach((alphabet, i) => {
  translatedWord = translatedWord.replaceAll(alphabet, i);
});

console.log(translatedWord.length);
