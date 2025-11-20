const fs = require("fs");
const rawInput = fs.readFileSync("input").toString().trim(); // fs.readFileSync(0, "utf-8").trim();

function solution() {
  class Stack {
    constructor() {
      this.array = [];
      this.top = -1;
    }

    push(x) {
      this.array[++this.top] = x;
    }

    pop() {
      return this.array[this.top--];
    }

    getTop() {
      if (this.top === -1) return null;
      return this.array[this.top];
    }
  }

  const [[N], numbers] = rawInput
    .split("\n")
    .map((row) => row.split(" ").map(Number));
  const oknsus = [];
  const stack = new Stack();
  stack.push([0, numbers[0]]);
  for (let i = 1; i < N; i++) {
    while (stack.getTop() && numbers[i] > stack.getTop()[1]) {
      oknsus[stack.pop()[0]] = numbers[i];
    }
    stack.push([i, numbers[i]]);
  }
  while (stack.getTop()) {
    oknsus[stack.pop()[0]] = -1;
  }
  console.log(oknsus.join(" "));
}

solution();
