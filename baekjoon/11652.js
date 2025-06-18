const fs = require("fs");
const rawInput = fs.readFileSync("input").toString().trim(); // fs.readFileSync(0, "utf-8").trim();

function solutionWithMap(_rawInput) {
  const numberStrings = _rawInput.split("\n").slice(1);
  const counts = {};
  numberStrings.forEach((numberString) => {
    if (counts[numberString] === undefined) counts[numberString] = 0;
    counts[numberString]++;
  });
  const entries = Object.entries(counts);
  entries.sort((a, b) =>
    a[1] === b[1] ? (BigInt(a[0]) > BigInt(b[0]) ? 1 : -1) : b[1] - a[1]
  );

  console.log(entries[0][0]);
}

function solutionWithoutMap(_rawInput) {
  const bigInts = _rawInput.split("\n").slice(1).map(BigInt);
  bigInts.sort((a, b) => (a > b ? 1 : -1)); // bigInt를 다루기 때문에 직접 compareFn 전달
  let maxBigInt = -1n * 2n ** 62n - 1n;
  let maxCount = 0;
  let previousBigInt = null;
  let count = 0;
  bigInts.forEach((bigInt) => {
    if (previousBigInt !== bigInt) {
      previousBigInt = bigInt;
      count = 0;
    }
    count++;
    if (count > maxCount) {
      maxBigInt = bigInt;
      maxCount = count;
    }
  });

  console.log(maxBigInt.toString());
}

solutionWithoutMap(rawInput);
