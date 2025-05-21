function solution(m, n, puddles) {
  const myMap = Array.from({ length: n }, () => Array(m).fill(null));
  myMap[0][0] = 1;
  for (let [x, y] of puddles) {
    myMap[y - 1][x - 1] = 0;
  }
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (myMap[i][j] !== null) continue;

      if (i > 0) myMap[i][j] = myMap[i - 1][j] % 1000000007;
      if (j > 0) myMap[i][j] = (myMap[i][j] + myMap[i][j - 1]) % 1000000007;
    }
  }
  return myMap[n - 1][m - 1];
}
