const fs = require("fs");
const rawInput = fs.readFileSync("input").toString().trim(); // fs.readFileSync(0, "utf-8").trim();

function solution() {
  const [[N, M], ...map] = rawInput.split("\n").map((row) => row.split(" "));
  const cctvs = [];
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (map[i][j] === "0" || map[i][j] === "6") continue;
      cctvs.push({
        type: map[i][j],
        position: [i, j],
      });
    }
  }
  let min = N * M;

  function getSizeOfBlindSpot(map) {
    let count = 0;
    for (let i = 0; i < N; i++) {
      for (let j = 0; j < M; j++) {
        if (map[i][j] === "0") count++;
      }
    }
    return count;
  }

  function recursive(index, map) {
    if (index === cctvs.length) {
      const sizeOfBlindSpot = getSizeOfBlindSpot(map);
      if (sizeOfBlindSpot < min) min = sizeOfBlindSpot;
      return;
    }

    switch (cctvs[index].type) {
      case "1": {
        // 상, 우, 하, 좌
        const dx = [0, 1, 0, -1];
        const dy = [-1, 0, 1, 0];
        for (let j = 0; j < 4; j++) {
          const newMap = map.map((row) => row.map((element) => element));
          let step = 1;
          let newX = cctvs[index].position[1] + dx[j] * step;
          let newY = cctvs[index].position[0] + dy[j] * step;
          while (
            0 <= newX &&
            newX < M &&
            0 <= newY &&
            newY < N &&
            newMap[newY][newX] !== "6" // CCTV는 CCTV를 통과할 수 있다.
          ) {
            newMap[newY][newX] = "#";
            step++;
            newX = cctvs[index].position[1] + dx[j] * step;
            newY = cctvs[index].position[0] + dy[j] * step;
          }
          recursive(index + 1, newMap);
        }
        break;
      }
      case "2": {
        // 상, 좌
        const dx = [0, -1];
        const dy = [-1, 0];
        for (let j = 0; j < 2; j++) {
          const newMap = map.map((row) => row.map((element) => element));
          let step = 1;
          let newX = cctvs[index].position[1] + dx[j] * step;
          let newY = cctvs[index].position[0] + dy[j] * step;
          while (
            0 <= newX &&
            newX < M &&
            0 <= newY &&
            newY < N &&
            newMap[newY][newX] !== "6" // CCTV는 CCTV를 통과할 수 있다.
          ) {
            newMap[newY][newX] = "#";
            step++;
            newX = cctvs[index].position[1] + dx[j] * step;
            newY = cctvs[index].position[0] + dy[j] * step;
          }
          step = 1;
          newX = cctvs[index].position[1] - dx[j] * step;
          newY = cctvs[index].position[0] - dy[j] * step;
          while (
            0 <= newX &&
            newX < M &&
            0 <= newY &&
            newY < N &&
            newMap[newY][newX] !== "6" // CCTV는 CCTV를 통과할 수 있다.
          ) {
            newMap[newY][newX] = "#";
            step++;
            newX = cctvs[index].position[1] - dx[j] * step;
            newY = cctvs[index].position[0] - dy[j] * step;
          }
          recursive(index + 1, newMap);
        }
        break;
      }
      case "3": {
        // 상, 우, 하, 좌
        const dx = [0, 1, 0, -1];
        const dy = [-1, 0, 1, 0];
        for (let j = 0; j < 4; j++) {
          const newMap = map.map((row) => row.map((element) => element));
          let step = 1;
          let newX = cctvs[index].position[1] + dx[j] * step;
          let newY = cctvs[index].position[0] + dy[j] * step;
          while (
            0 <= newX &&
            newX < M &&
            0 <= newY &&
            newY < N &&
            newMap[newY][newX] !== "6" // CCTV는 CCTV를 통과할 수 있다.
          ) {
            newMap[newY][newX] = "#";
            step++;
            newX = cctvs[index].position[1] + dx[j] * step;
            newY = cctvs[index].position[0] + dy[j] * step;
          }
          step = 1;
          newX = cctvs[index].position[1] + dx[(j + 1) % 4] * step;
          newY = cctvs[index].position[0] + dy[(j + 1) % 4] * step;
          while (
            0 <= newX &&
            newX < M &&
            0 <= newY &&
            newY < N &&
            newMap[newY][newX] !== "6" // CCTV는 CCTV를 통과할 수 있다.
          ) {
            newMap[newY][newX] = "#";
            step++;
            newX = cctvs[index].position[1] + dx[(j + 1) % 4] * step;
            newY = cctvs[index].position[0] + dy[(j + 1) % 4] * step;
          }
          recursive(index + 1, newMap);
        }
        break;
      }
      case "4": {
        // 상, 우, 하, 좌
        const dx = [0, 1, 0, -1];
        const dy = [-1, 0, 1, 0];
        for (let j = 0; j < 4; j++) {
          const newMap = map.map((row) => row.map((element) => element));
          let step = 1;
          let newX = cctvs[index].position[1] + dx[j] * step;
          let newY = cctvs[index].position[0] + dy[j] * step;
          while (
            0 <= newX &&
            newX < M &&
            0 <= newY &&
            newY < N &&
            newMap[newY][newX] !== "6" // CCTV는 CCTV를 통과할 수 있다.
          ) {
            newMap[newY][newX] = "#";
            step++;
            newX = cctvs[index].position[1] + dx[j] * step;
            newY = cctvs[index].position[0] + dy[j] * step;
          }
          step = 1;
          newX = cctvs[index].position[1] + dx[(j + 1) % 4] * step;
          newY = cctvs[index].position[0] + dy[(j + 1) % 4] * step;
          while (
            0 <= newX &&
            newX < M &&
            0 <= newY &&
            newY < N &&
            newMap[newY][newX] !== "6" // CCTV는 CCTV를 통과할 수 있다.
          ) {
            newMap[newY][newX] = "#";
            step++;
            newX = cctvs[index].position[1] + dx[(j + 1) % 4] * step;
            newY = cctvs[index].position[0] + dy[(j + 1) % 4] * step;
          }
          step = 1;
          newX = cctvs[index].position[1] + dx[(j + 2) % 4] * step;
          newY = cctvs[index].position[0] + dy[(j + 2) % 4] * step;
          while (
            0 <= newX &&
            newX < M &&
            0 <= newY &&
            newY < N &&
            newMap[newY][newX] !== "6" // CCTV는 CCTV를 통과할 수 있다.
          ) {
            newMap[newY][newX] = "#";
            step++;
            newX = cctvs[index].position[1] + dx[(j + 2) % 4] * step;
            newY = cctvs[index].position[0] + dy[(j + 2) % 4] * step;
          }
          recursive(index + 1, newMap);
        }
        break;
      }
      case "5": {
        // 상, 우, 하, 좌
        const dx = [0, 1, 0, -1];
        const dy = [-1, 0, 1, 0];
        const newMap = map.map((row) => row.map((element) => element));
        for (let j = 0; j < 4; j++) {
          let step = 1;
          let newX = cctvs[index].position[1] + dx[j] * step;
          let newY = cctvs[index].position[0] + dy[j] * step;
          while (
            0 <= newX &&
            newX < M &&
            0 <= newY &&
            newY < N &&
            newMap[newY][newX] !== "6" // CCTV는 CCTV를 통과할 수 있다.
          ) {
            newMap[newY][newX] = "#";
            step++;
            newX = cctvs[index].position[1] + dx[j] * step;
            newY = cctvs[index].position[0] + dy[j] * step;
          }
        }
        recursive(index + 1, newMap);
        break;
      }
    }
  }

  recursive(0, map);
  console.log(min);
}

solution();
