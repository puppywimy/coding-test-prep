const fs = require("fs");
const rawInput = fs.readFileSync("input").toString().trim(); // fs.readFileSync(0, "utf-8").trim()

const input = rawInput.split("\n");
const [N, M] = input[0].split(" ").map(Number);
const maze = input.slice(1).map((row) => row.split("").map(Number));
const distances = new Array(N).fill().map(() => new Array(M).fill(-1));
distances[0][0] = 1; // 시작 위치도 센다.
const queue = [[0, 0]];
const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];
while (queue.length) {
  const [x, y] = queue.shift();
  for (let i = 0; i < 4; i++) {
    const newX = x + dx[i];
    const newY = y + dy[i];
    const isVisitable =
      (distances[newX] && distances[newX][newY]) === -1 && // undefined or distance
      maze[newX][newY] === 1;
    if (!isVisitable) continue;
    distances[newX][newY] = distances[x][y] + 1;
    queue.push([newX, newY]);
  }
}

console.log(distances[N - 1][M - 1]);
