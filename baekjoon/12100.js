const fs = require("fs");
const rawInput = fs.readFileSync("input").toString().trim(); // fs.readFileSync(0, "utf-8").trim();

function solution() {
  const maxRotationCount = 5;
  const [[N], ...map] = rawInput
    .split("\n")
    .map((row) => row.split(" ").map(Number));
  let max = 0;

  function rotate(map) {
    const tempMap = map.map((row) => row.map((element) => element));
    for (let i = 0; i < N; i++) {
      for (let j = 0; j < N; j++) {
        map[N - 1 - j][i] = tempMap[i][j];
      }
    }
  }

  function getSquashedRow(row) {
    let lastIndex = 0;
    const result = row.map(() => 0);
    for (let i = 0; i < N; i++) {
      if (row[i] === 0) continue;
      if (result[lastIndex] === 0) {
        result[lastIndex] = row[i];
      } else {
        if (result[lastIndex] === row[i]) {
          result[lastIndex++] += row[i];
        } else {
          result[++lastIndex] = row[i];
        }
      }
    }
    return result;
  }

  function recursive(rotationCount, map) {
    if (rotationCount === maxRotationCount) {
      for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
          if (map[i][j] > max) max = map[i][j];
        }
      }
      return;
    }

    for (let i = 0; i < 4; i++) {
      rotate(map);
      const newMap = map.map((row) => row.map((element) => element));
      for (let j = 0; j < N; j++) newMap[j] = getSquashedRow(newMap[j]);
      recursive(rotationCount + 1, newMap);
    }
  }

  recursive(0, map);
  console.log(max);
}

solution();
