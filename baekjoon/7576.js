const fs = require("fs");
const rawInput = fs.readFileSync("input").toString().trim(); // fs.readFileSync(0, "utf-8").trim()

const input = rawInput.split("\n").map((row) => row.split(" ").map(Number));
const [M, N] = input[0];
const tomatoStorage = input.slice(1);
const queue = [];
let queueCursor = 0; // queue.shift()를 사용할 경우 시간 초과
for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (tomatoStorage[i][j] !== 1) continue;
    queue.push([i, j]);
  }
}
const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];
while (queue[queueCursor]) {
  const [x, y] = queue[queueCursor++];
  for (let i = 0; i < 4; i++) {
    const newX = x + dx[i];
    const newY = y + dy[i];
    const isVisitable =
      (tomatoStorage[newX] && tomatoStorage[newX][newY]) === 0; // undefined or distance
    if (!isVisitable) continue;
    tomatoStorage[newX][newY] = tomatoStorage[x][y] + 1;
    queue.push([newX, newY]);
  }
}
let isEveryTomatoRipened = true;
let max = 1;
for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (tomatoStorage[i][j] === 0) {
      isEveryTomatoRipened = false;
    } else if (tomatoStorage[i][j] > max) {
      max = tomatoStorage[i][j];
    }
  }
}

console.log(isEveryTomatoRipened ? max - 1 : -1);
