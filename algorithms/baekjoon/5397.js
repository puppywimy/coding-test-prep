const fs = require("fs");
const rawInput = fs.readFileSync("input").toString().trim(); // fs.readFileSync(0, "utf-8").trim();

function solution() {
  const testCases = rawInput.split("\n").slice(1);
  const output = [];

  for (const testCase of testCases) {
    const characters = [null];
    const previousIndices = [null];
    const nextIndices = [null];
    let cursor = 0;

    function insert(character) {
      characters.push(character);
      previousIndices.push(cursor);
      nextIndices.push(nextIndices[cursor]);

      if (nextIndices[cursor])
        previousIndices[nextIndices[cursor]] = characters.length - 1;
      nextIndices[cursor] = characters.length - 1;

      cursor = characters.length - 1;
    }

    function erase() {
      if (!cursor) return; // 커서가 맨 앞에 있는 경우

      if (nextIndices[cursor])
        previousIndices[nextIndices[cursor]] = previousIndices[cursor];
      nextIndices[previousIndices[cursor]] = nextIndices[cursor];

      cursor = previousIndices[cursor];
    }

    function getTraverseResult() {
      let _cursor = nextIndices[0];
      const _output = [];
      while (_cursor) {
        _output.push(characters[_cursor]);
        _cursor = nextIndices[_cursor];
      }
      return _output.join("");
    }

    for (const keyInput of testCase.split("")) {
      switch (keyInput) {
        case "-":
          erase();
          break;
        case "<":
          if (cursor) cursor = previousIndices[cursor];
          break;
        case ">":
          if (nextIndices[cursor]) cursor = nextIndices[cursor];
          break;
        default:
          insert(keyInput);
          break;
      }
    }

    output.push(getTraverseResult());
  }

  console.log(output.join("\n"));
}

solution();
