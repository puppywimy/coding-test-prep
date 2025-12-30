const fs = require("fs");
const rawInput = fs.readFileSync("input").toString().trim(); // fs.readFileSync(0, "utf-8").trim();

function solution() {
  const [[N, K], ...restInput] = rawInput
    .split("\n")
    .map((row) => row.split(" ").map(Number));
  const jewels = restInput.slice(0, N);
  const bagCapacities = restInput.slice(N, N + K);
  jewels.sort((a, b) => b[1] - a[1]);
  bagCapacities.sort((a, b) => b - a);
  const bags = []
  for (let i = 0; i < N; i++) {
    const [currentJewelWeight, currentJewelPrice] = jewels[i];
    let startIndex = 0;
    let endIndex = K;
    while (startIndex < endIndex) {
      const middleIndex = Math.floor((startIndex + endIndex) / 2);
      if (bagCapacities[middleIndex] > currentJewelWeight) {
        startIndex = middleIndex;
      }
      if (bagCapacities[middleIndex] < currentJewelWeight) {
        
      }
    }
  }




  console.log(jewels, bags);
}

solution();
