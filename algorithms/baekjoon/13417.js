const fs = require("fs");
const rawInput = fs.readFileSync("input").toString().trim(); // fs.readFileSync(0, "utf-8").trim();

function solution() {
  const [rawT, ...rows] = rawInput.split("\n");
  const T = Number(rawT);
  for (let i = 0; i < T; i++) {
    const N = Number(rows[2 * i]);
    const cards = rows[2 * i + 1].split(" ");

    let cursor = 1;
    let output = [cards[0]];
    while (cursor < N) {
      const currentCard = cards[cursor++];
      if (currentCard > output[0]) {
        output.push(currentCard);
      } else {
        output.unshift(currentCard);
      }
    }

    console.log(output.join(""));
  }
}

solution();
