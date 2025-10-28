const fs = require("fs");
const rawInput = fs.readFileSync("input").toString().trim(); // fs.readFileSync(0, "utf-8").trim();

function solution() {
  const [N, r, c] = rawInput.split(" ").map(Number);

  function recursive(n, x, y) {
    // Base Condition
    if (n == 0) return 0;

    // Recursive
    const half = 2 ** (n - 1);
    if (x < half && y < half) {
      return recursive(n - 1, x, y);
    }
    if (x >= half && y < half) {
      return half * half + recursive(n - 1, x - half, y);
    }
    if (x < half && y >= half) {
      return half * half * 2 + recursive(n - 1, x, y - half);
    }
    if (x >= half && y >= half) {
      return half * half * 3 + recursive(n - 1, x - half, y - half);
    }
  }

  console.log(recursive(N, c, r));
}

solution();
