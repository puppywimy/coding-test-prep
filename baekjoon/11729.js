const fs = require("fs");
const rawInput = fs.readFileSync("input").toString().trim(); // fs.readFileSync(0, "utf-8").trim();

function solution() {
  const N = Number(rawInput);

  function recursive(n, source, destination) {
    if (n === 1) return `\n${source} ${destination}`;
    const tempIndex = [1, 2, 3].filter(
      (index) => index !== source && index !== destination
    )[0];
    let output = "";
    output += recursive(n - 1, source, tempIndex);
    output += `\n${source} ${destination}`;
    output += recursive(n - 1, tempIndex, destination);
    return output;
  }

  const count = 2 ** N - 1;
  console.log(`${count}${recursive(N, 1, 3)}`);
}

solution();
