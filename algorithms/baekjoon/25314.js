const fs = require("fs");
const rawInput = fs.readFileSync("input").toString().trim(); // fs.readFileSync(0, "utf-8").trim()
const input = Number(rawInput);

const output =
  Array(Math.ceil(input / 4))
    .fill("long ")
    .join("") + "int";

console.log(output);
