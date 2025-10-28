const fs = require("fs");
const rawInput = fs.readFileSync("input").toString().trim(); // fs.readFileSync(0, "utf-8").trim();

function solution() {
  const stackArray = [];
  let stackTopIndex = 0;

  function push(X) {
    stackArray[stackTopIndex++] = X;
  }

  function pop() {
    if (stackTopIndex === 0) return -1;
    return stackArray[--stackTopIndex];
  }

  function size() {
    return stackTopIndex;
  }

  function empty() {
    return stackTopIndex === 0 ? 1 : 0;
  }

  function top() {
    if (stackTopIndex === 0) return -1;
    return stackArray[stackTopIndex - 1];
  }

  const tasks = rawInput.split("\n").slice(1);
  const output = [];
  for (const task of tasks) {
    const [command, ...params] = task.split(" ");
    switch (command) {
      case "push":
        for (const param of params) {
          push(param);
        }
        break;
      case "pop":
        output.push(pop());
        break;
      case "size":
        output.push(size());
        break;
      case "empty":
        output.push(empty());
        break;
      case "top":
        output.push(top());
        break;
    }
  }
  console.log(output.join("\n"));
}

solution();
