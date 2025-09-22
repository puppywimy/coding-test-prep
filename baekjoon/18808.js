const fs = require("fs");
const rawInput = fs.readFileSync("input").toString().trim(); // fs.readFileSync(0, "utf-8").trim();

function solution() {
  const maxStickerShape = { N: 10, M: 10 };
  const input = rawInput.split("\n").map((row) => row.split(" ").map(Number));
  const [N, M, K] = input[0];
  const stickers = [];
  let cursor = 1;
  for (let k = 0; k < K; k++) {
    const [N, M] = input[cursor];
    const shape = new Array(maxStickerShape.N)
      .fill(0)
      .map(() => new Array(maxStickerShape.M).fill(0));
    for (let i = 0; i < N; i++) {
      cursor++;
      for (let j = 0; j < M; j++) {
        shape[i][j] = input[cursor][j];
      }
    }
    stickers.push({ N, M, shape });
    cursor++;
  }
  const map = new Array(N).fill(0).map(() => new Array(M).fill(0));
  let count = 0;

  function pastable(mI, mJ, sticker, map) {
    for (let sI = 0; sI < sticker.N; sI++) {
      for (let sJ = 0; sJ < sticker.M; sJ++) {
        const [newI, newJ] = [mI + sI, mJ + sJ];
        if (newI >= N || newJ >= M) return false;
        if (sticker.shape[sI][sJ] === 1 && map[newI][newJ] === 1) return false;
      }
    }
    for (let sI = 0; sI < sticker.N; sI++) {
      for (let sJ = 0; sJ < sticker.M; sJ++) {
        const [newI, newJ] = [mI + sI, mJ + sJ];
        if (sticker.shape[sI][sJ] === 1) {
          map[newI][newJ] = 1;
          count++;
        }
      }
    }
    return true;
  }

  function rotate(sticker) {
    const tempShape = new Array(maxStickerShape.N)
      .fill(0)
      .map(() => new Array(maxStickerShape.M).fill(0));
    for (let i = 0; i < sticker.M; i++) {
      for (let j = 0; j < sticker.N; j++) {
        tempShape[i][j] = sticker.shape[sticker.N - 1 - j][i];
      }
    }
    sticker.shape = tempShape;
    const tempN = sticker.N;
    sticker.N = sticker.M;
    sticker.M = tempN;
  }

  for (let k = 0; k < K; k++) {
    const sticker = stickers[k];
    let isPasted = false;
    for (let l = 0; l < 4; l++) {
      if (isPasted) break;
      for (let mI = 0; mI < N; mI++) {
        if (isPasted) break;
        for (let mJ = 0; mJ < M; mJ++) {
          if (!pastable(mI, mJ, sticker, map)) continue;
          isPasted = true;
          break;
        }
      }
      rotate(sticker);
    }
  }
  console.log(count);
}

solution();
