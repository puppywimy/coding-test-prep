const fs = require("fs");
const rawInput = fs.readFileSync("input").toString().trim(); // fs.readFileSync(0, "utf-8").trim();

function dfs(nodeCount, startNode, connections) {
  const footprints = [];
  const visited = new Array(nodeCount + 1).fill(false);
  const stack = [startNode];
  while (stack.length) {
    const currentNode = stack.pop();
    if (visited[currentNode]) continue;
    footprints.push(currentNode);
    visited[currentNode] = true;
    const destinations = [];
    for (let i = connections[currentNode].length - 1; i >= 0; i--) {
      if (connections[currentNode][i] !== -1)
        destinations.push(connections[currentNode][i]);
    }
    destinations.forEach((destination) => {
      if (visited[destination]) return;
      stack.push(destination);
    });
  }
  return footprints;
}

function bfs(nodeCount, startNode, connections) {
  const footprints = [startNode];
  const visited = new Array(nodeCount + 1).fill(false);
  visited[startNode] = true;
  const queue = [startNode];
  while (queue.length) {
    const currentNode = queue.shift();
    const destinations = connections[currentNode].filter(
      (destination) => destination !== -1
    );
    destinations.forEach((destination) => {
      if (visited[destination]) return;
      footprints.push(destination);
      visited[destination] = true;
      queue.push(destination);
    });
  }
  return footprints;
}

const input = rawInput.split("\n").map((row) => row.split(" ").map(Number));
const [N, M, V] = input[0];
const edges = input.slice(1);
const connections = new Array(N + 1)
  .fill()
  .map(() => new Array(N + 1).fill(-1));
edges.forEach(([i, j]) => {
  connections[i][j] = j;
  connections[j][i] = i;
});

console.log(
  `${dfs(N, V, connections).join(" ")}\n${bfs(N, V, connections).join(" ")}`
);
