const fs = require("fs");
const rawInput = fs.readFileSync("input").toString().trim(); // fs.readFileSync(0, "utf-8").trim()

const current = rawInput.split(" ");
const ideal = [1, 1, 2, 2, 2, 8];
const difference = current.map((_, i, origin) => ideal[i] - origin[i]);

console.log(difference.join(" "));
