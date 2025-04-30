const fs = require("fs");
const rawInput = fs.readFileSync("input").toString().trim(); // fs.readFileSync(0, "utf-8").trim()

const tasks = rawInput
  .split("\n")
  .map((row) => row.split(" "))
  .slice(1);

console.log(
  tasks
    .map(([numberString, string]) =>
      [...string]
        .map((character) =>
          new Array(Number(numberString)).fill(character).join("")
        )
        .join("")
    )
    .join("\n")
);
