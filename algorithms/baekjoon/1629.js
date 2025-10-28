const fs = require("fs");
const rawInput = fs.readFileSync("input").toString().trim(); // fs.readFileSync(0, "utf-8").trim();

function solution() {
  const [A, B, C] = rawInput.split(" ").map(BigInt);

  function recursive(index) {
    if (index === 1) return A % C;
    const temp = recursive(Math.floor(index / 2));
    if (index % 2 === 0) return (temp * temp) % C;
    return (((temp * temp) % C) * A) % C;
  }

  console.log(Number(recursive(Number(B))));
}

solution();
