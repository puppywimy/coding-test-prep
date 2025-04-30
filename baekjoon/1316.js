const fs = require("fs");
const rawInput = fs.readFileSync("input").toString().trim(); // fs.readFileSync(0, "utf-8").trim()

const words = rawInput.split("\n").slice(1);
const groupWords = words.filter((word) => {
  const groupNames = [...word].filter(
    (_, i, origin) => origin[i] !== origin[i + 1]
  );
  groupNames.sort();
  return groupNames.every((_, i, origin) => origin[i] !== origin[i + 1]);
});

console.log(groupWords.length);
