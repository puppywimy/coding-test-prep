const fs = require("fs");
const rawInput = fs.readFileSync("input").toString().trim(); // fs.readFileSync(0, "utf-8").trim();

function solution() {
  const [N, K] = rawInput.split(" ").map(Number);

  const queueArray = new Array(N).fill().map((_, i) => i + 1);
  let front = 0;
  let back = N;

  function push(X) {
    back %= N;
    queueArray[back++] = X;
  }

  function pop() {
    front %= N;
    return queueArray[front++];
  }

  const output = [];
  while (front !== back) {
    for (let i = 0; i < K - 1; i++) {
      push(pop());
    }
    output.push(pop());
  }
  console.log(`<${output.join(", ")}>`);
}

solution();
