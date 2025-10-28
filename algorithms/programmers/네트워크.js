function travel(x, y, table) {
  table[x][y] = 2;

  table[x].forEach((el, i, origin) => {
    if (el === 1) {
      origin[i] = 2;
      travel(i, x, table);
    }
  });
}

function solution(n, computers) {
  const table = computers.slice();
  let count = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (table[i][j] === 1) {
        travel(i, j, table);
        count++;
      }
    }
  }
  return count;
}
