const fs = require("fs");
const rawInput = fs.readFileSync("input").toString().trim(); // fs.readFileSync(0, "utf-8").trim();

function solution() {
  const [[N, M, G, R], ...grid] = rawInput
    .split("\n")
    .map((row) => row.split(" ").map(Number));

  let max = 0;

  // function getGridLog(grid) {
  //   return grid.map((row) => row.join(" ")).join("\n");
  // }

  function recursive([numberOfG, numberOfR], grid) {
    // Base Condition
    if (numberOfG + numberOfR === 0) {
      let flowerCount = 0;

      // BFS
      const gGrid = grid.map((row) =>
        row.map((element) => (element ? 0 : "X"))
      );
      const rGrid = grid.map((row) =>
        row.map((element) => (element ? 0 : "X"))
      );
      let gPreviousQueue = [];
      let gQueue = [];
      let gNextQueue = [];
      let rPreviousQueue = [];
      let rQueue = [];
      let rNextQueue = [];
      for (let i = 0; i < N; i++) {
        for (let j = 0; j < M; j++) {
          if (grid[i][j] === "G") {
            gQueue.push([i, j]);
            gGrid[i][j] = 1;
          }
          if (grid[i][j] === "R") {
            rQueue.push([i, j]);
            rGrid[i][j] = 1;
          }
        }
      }
      const dx = [-1, 1, 0, 0];
      const dy = [0, 0, -1, 1];
      for (let distance = 2; distance < N + M; distance++) {
        gPreviousQueue = gQueue;
        rPreviousQueue = rQueue;
        while (gQueue.length) {
          const [x, y] = gQueue.shift();
          for (let i = 0; i < 4; i++) {
            const [newX, newY] = [x + dx[i], y + dy[i]];
            if (!(0 <= newX && newX < N && 0 <= newY && newY < M)) continue;
            if (gGrid[newX][newY] !== 0) continue;
            if (rGrid[newX][newY] !== 0) continue;
            gNextQueue.push([newX, newY]);
            gGrid[newX][newY] = distance;
          }
        }
        while (rQueue.length) {
          const [x, y] = rQueue.shift();
          for (let i = 0; i < 4; i++) {
            const [newX, newY] = [x + dx[i], y + dy[i]];
            if (!(0 <= newX && newX < N && 0 <= newY && newY < M)) continue;
            if (rGrid[newX][newY] !== 0) continue;
            if (gGrid[newX][newY] !== distance && gGrid[newX][newY] !== 0)
              continue; // 주의
            rNextQueue.push([newX, newY]);
            rGrid[newX][newY] = distance;
          }
        }
        let flowerExist = false;
        for (let i = 0; i < N; i++) {
          for (let j = 0; j < M; j++) {
            if (gGrid[i][j] * rGrid[i][j] > 0 && gGrid[i][j] === rGrid[i][j]) {
              gGrid[i][j] = "F";
              rGrid[i][j] = "F";
              flowerCount++;
              flowerExist = true;
            }
          }
        }
        if (flowerExist) {
          gQueue = gPreviousQueue;
          rQueue = rPreviousQueue;
        } else {
          gQueue = gNextQueue;
          rQueue = rNextQueue;
        }
        gNextQueue = [];
        rNextQueue = [];
      }

      if (flowerCount > max) max = flowerCount;
      return;
    }

    const newGrid = grid.map((row) => row.slice());

    for (let i = 0; i < N; i++) {
      for (let j = 0; j < M; j++) {
        if (newGrid[i][j] === 2) {
          if (numberOfG > 0) {
            newGrid[i][j] = "G";
            recursive([numberOfG - 1, numberOfR], newGrid);
          }
          if (numberOfR > 0) {
            newGrid[i][j] = "R";
            recursive([numberOfG, numberOfR - 1], newGrid);
          }
          newGrid[i][j] = "X";
        }
      }
    }
  }

  recursive([G, R], grid);
  console.log(max);
}

solution();
