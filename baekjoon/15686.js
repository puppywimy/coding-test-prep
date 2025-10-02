const fs = require("fs");
const rawInput = fs.readFileSync("input").toString().trim(); // fs.readFileSync(0, "utf-8").trim();

function solution() {
  const [[N, M], ...map] = rawInput
    .split("\n")
    .map((row) => row.split(" ").map(Number));
  const houses = [];
  const chickenJoints = [];
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (map[i][j] === 1) houses.push([i, j]);
      if (map[i][j] === 2) chickenJoints.push([i, j]);
    }
  }
  const isUsed = chickenJoints.map(() => false);
  let min = 9800;

  function recursive(startIndex, endIndex) {
    if (endIndex > chickenJoints.length) {
      let total = 0;
      for (let i = 0; i < houses.length; i++) {
        let chickenDistance = 98;
        for (let j = 0; j < chickenJoints.length; j++) {
          if (!isUsed[j]) continue;
          const distance =
            Math.abs(houses[i][0] - chickenJoints[j][0]) +
            Math.abs(houses[i][1] - chickenJoints[j][1]);
          if (distance < chickenDistance) chickenDistance = distance;
        }
        total += chickenDistance;
      }
      if (total < min) min = total;
      return;
    }

    for (let i = startIndex; i < endIndex; i++) {
      isUsed[i] = true;
      recursive(i + 1, endIndex + 1);
      isUsed[i] = false;
    }
  }

  recursive(0, chickenJoints.length - (M - 1));
  console.log(min);
}

solution();
