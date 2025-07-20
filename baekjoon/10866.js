const fs = require("fs");
const rawInput = fs.readFileSync("input").toString().trim(); // fs.readFileSync(0, "utf-8").trim();

function solution() {
  const maxSize = 10000;

  const deque = {
    data: new Array(maxSize).fill(null),
    head: Math.floor(maxSize / 2),
    tail: Math.floor(maxSize / 2),
    size() {
      return this.tail - this.head;
    },
    empty() {
      return this.size() ? 0 : 1;
    },
    push_front(X) {
      this.data[--this.head] = X;
    },
    push_back(X) {
      this.data[this.tail++] = X;
    },
    pop_front() {
      return this.empty() ? -1 : this.data[this.head++];
    },
    pop_back() {
      return this.empty() ? -1 : this.data[--this.tail];
    },
    front() {
      return this.empty() ? -1 : this.data[this.head];
    },
    back() {
      return this.empty() ? -1 : this.data[this.tail - 1];
    },
  };

  output = [];
  const tasks = rawInput.split("\n").slice(1);
  for (const task of tasks) {
    const [command, ...rawParams] = task.split(" ");
    const params = rawParams.map(Number);
    const result = deque[command](...params);
    if (result !== undefined) output.push(result);
  }
  console.log(output.join("\n"));
}

solution();
