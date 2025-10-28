const fs = require("fs");
const rawInput = fs.readFileSync("input").toString().trim(); // fs.readFileSync(0, "utf-8").trim();

function solution() {
  // 주의: N도 split('')를 해버리면 두 자릿수 입력에서 오류 발생
  const rows = rawInput.split("\n");
  const N = Number(rows[0]);
  const map = rows.slice(1).map((row) => row.split("").map(Number));

  const queue = [];
  const newMap = Array.from({ length: N }).map(() =>
    Array.from({ length: N }).map(() => 0)
  );
  const dx = [0, 0, -1, 1];
  const dy = [-1, 1, 0, 0];
  const counts = [null];
  let groupIndex = 1;
  for (let j = 0; j < N; j++) {
    for (let i = 0; i < N; i++) {
      if (map[j][i] === 0 || newMap[j][i] !== 0) continue;
      queue.push([j, i]);
      newMap[j][i] = groupIndex;
      counts[groupIndex] = 1;
      while (queue.length) {
        const [y, x] = queue.shift();
        for (let k = 0; k < 4; k++) {
          const [newX, newY] = [x + dx[k], y + dy[k]];
          if (
            !(0 <= newX && newX < N && 0 <= newY && newY < N) ||
            map[newY][newX] === 0 ||
            newMap[newY][newX] !== 0
          )
            continue;
          queue.push([newY, newX]);
          newMap[newY][newX] = groupIndex;
          counts[groupIndex]++;
        }
      }
      groupIndex++;
    }
  }
  const groupCount = groupIndex - 1;
  const sortedCounts = counts.slice(1);
  sortedCounts.sort((a, b) => a - b);
  console.log(groupCount ? `${groupCount}\n${sortedCounts.join("\n")}` : "0");
}

solution();
