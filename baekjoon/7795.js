const fs = require("fs");
const rawInput = fs.readFileSync("input").toString().trim(); // fs.readFileSync(0, "utf-8").trim();

function solutionWithSorting() {
  const testCasesInput = rawInput
    .split("\n")
    .slice(1)
    .map((row) => row.split(" ").map(Number));

  const output = [];
  for (let i = 0; i < testCasesInput.length; i += 3) {
    const sizesOfA = testCasesInput[i + 1];
    const sizesOfB = testCasesInput[i + 2];
    sizesOfA.sort((a, b) => b - a);
    sizesOfB.sort((a, b) => b - a);
    const total = sizesOfA
      .map((sizeOfA) => {
        let index = 0;
        while (index < sizesOfB.length) {
          if (sizeOfA > sizesOfB[index]) break;
          index++;
        }
        return sizesOfB.length - index;
      })
      .reduce((acc, cur) => acc + cur, 0);
    output.push(total);
  }

  console.log(output.join("\n"));
}

function bisectLeft(array, target) {
  let startIndex = 0;
  let endIndex = array.length;
  while (startIndex < endIndex) {
    let middleIndex = Math.floor((startIndex + endIndex) / 2);
    if (target > array[middleIndex]) {
      startIndex = middleIndex + 1;
    } else {
      endIndex = middleIndex;
    }
  }
  return startIndex;
}

function solutionWithBinarySearch() {
  function bisectRight(array, target) {
    let startIndex = 0;
    let endIndex = array.length;
    while (startIndex < endIndex) {
      let middleIndex = Math.floor((startIndex + endIndex) / 2);
      if (target >= array[middleIndex]) {
        startIndex = middleIndex + 1;
      } else {
        endIndex = middleIndex;
      }
    }
    return startIndex;
  }

  const inputRows = rawInput.split("\n");
  const T = Number(inputRows[0]);
  const testCaseInputs = inputRows.slice(1);
  const output = [];
  for (let i = 0; i < T; i++) {
    const aSizes = testCaseInputs[i * 3 + 1].split(" ").map(Number);
    const bSizes = testCaseInputs[i * 3 + 2].split(" ").map(Number);
    let total = 0;
    if (aSizes.length > bSizes.length) {
      aSizes.sort((a, b) => a - b);
      for (bSize of bSizes) {
        total += aSizes.length - bisectRight(aSizes, bSize);
      }
    } else {
      bSizes.sort((a, b) => a - b);
      for (aSize of aSizes) {
        total += bisectLeft(bSizes, aSize);
      }
    }
    output.push(total);
  }

  console.log(output.join("\n"));
}

solutionWithBinarySearch();
