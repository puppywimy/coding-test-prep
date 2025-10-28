const fs = require("fs");
const rawInput = fs.readFileSync("input").toString().trim(); // fs.readFileSync(0, "utf-8").trim()

const [[n, m], ...paper] = rawInput
  .split("\n")
  .map((row) => row.split(" ").map(Number));
let areas = [];
const visited = new Array(n).fill().map(() => new Array(m).fill(false));
const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];
for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (visited[i][j] || paper[i][j] === 0) continue;
    visited[i][j] = true;
    let area = 1;
    const queue = [[i, j]];
    while (queue.length) {
      const [x, y] = queue.shift();
      for (let k = 0; k < 4; k++) {
        const newX = x + dx[k];
        const newY = y + dy[k];
        const isVisited = (visited[newX] && visited[newX][newY]) !== false; // true or undefined
        if (isVisited) continue;
        visited[newX][newY] = true;
        if (paper[newX][newY] === 0) continue;
        area++;
        queue.push([newX, newY]);
      }
    }
    areas.push(area);
  }
}

console.log(`${areas.length}\n${areas.length ? Math.max(...areas) : 0}`);
