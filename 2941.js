const fs = require("fs");
const rawInput = fs.readFileSync("input").toString().trim(); // fs.readFileSync(0, "utf-8").trim()

const croatianAlphabetMap = {
  c: "matching",
  "c=": "match",
  "c-": "match",
  d: "matching",
  dz: "matching",
  "dz=": "match",
  "d-": "match",
  l: "matching",
  lj: "match",
  n: "matching",
  nj: "match",
  s: "matching",
  "s=": "match",
  z: "matching",
  "z=": "match",
};
const characters = [...rawInput];
// console.log(rawInput);
let count = 0;
let cursor = 0;
let query = characters[cursor];
let headCursor = -1;
while (cursor < characters.length) {
  // console.log(
  //   `count[${count}] cursor[${cursor}] query[${query}] headCursor[${headCursor}]`
  // );
  const searchResult = croatianAlphabetMap[query];
  if (searchResult) {
    if (searchResult === "match") {
      count++;
      cursor++;
      query = characters[cursor];
      headCursor = -1;
    } else {
      cursor++;
      if (cursor < characters.length) {
        query += characters[cursor];
        if (headCursor === -1) {
          headCursor = cursor;
        }
      } else {
        count += query.length;
      }
    }
  } else {
    if (query.length > 1) {
      count++;
      cursor = headCursor;
      headCursor = -1;
      query = characters[cursor];
    } else {
      if (query !== "-" && query !== "=") count++;
      cursor++;
      query = characters[cursor];
      headCursor = -1;
    }
  }
}

console.log(count);
