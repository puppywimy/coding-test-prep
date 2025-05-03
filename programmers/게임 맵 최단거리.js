function solution(maps) {
  const n = maps.length;
  const m = maps[0].length;

  const visited = new Array(n).fill().map(() => new Array(m).fill(0));
  visited[0][0] = 1;
  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];
  const queue = [[0, 0]];
  while (queue.length) {
    const [x, y] = queue.shift();
    for (let i = 0; i < 4; i++) {
      const [targetX, targetY] = [x + dx[i], y + dy[i]];
      const condition =
        0 <= targetX &&
        targetX < n &&
        maps[targetX][targetY] === 1 &&
        visited[targetX][targetY] === 0;
      if (condition) {
        visited[targetX][targetY] = visited[x][y] + 1;
        queue.push([targetX, targetY]);
      }
    }
  }

  return visited[n - 1][m - 1] || -1;
}
