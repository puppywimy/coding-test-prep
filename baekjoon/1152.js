const fs = require("fs");
const rawInput = fs.readFileSync("input").toString().trim(); // fs.readFileSync(0, "utf-8").trim()

// ""의 경우 " " separator를 포함하지 않으므로 원본만 담고 있는 배열 [""]가 반환됨.
console.log(rawInput === "" ? 0 : rawInput.split(" ").length);
