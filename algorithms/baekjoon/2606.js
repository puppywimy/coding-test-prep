const fs = require("fs");
const rawInput = fs.readFileSync("input").toString().trim(); // fs.readFileSync(0, "utf-8").trim();

function solution() {
  const [[computerCount], [edgeCount], ...edges] = rawInput
    .split("\n")
    .map((row) => row.split(" ").map(Number));
  const connectionData = Array.from({ length: computerCount + 1 }).map(
    () => []
  );
  for (let i = 0; i < edgeCount; i++) {
    const [index1, index2] = edges[i];
    connectionData[index1].push(index2);
    connectionData[index2].push(index1);
  }
  const queue = [1];
  const visited = Array.from({ length: computerCount + 1 }).map(() => false);
  let count = 0;
  visited[queue[0]] = true;
  while (queue.length) {
    const currentIndex = queue.shift();
    for (let i = 0; i < connectionData[currentIndex].length; i++) {
      const newIndex = connectionData[currentIndex][i];
      if (visited[newIndex]) continue;
      count++;
      queue.push(newIndex);
      visited[newIndex] = true;
    }
  }
  console.log(count);
}

solution();
