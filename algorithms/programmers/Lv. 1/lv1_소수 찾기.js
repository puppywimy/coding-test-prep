function solution(n) {
  table = new Array(n + 1).fill(true);
  table[0] = false;
  table[1] = false;
  for (let i = 2; i <= n; i++) {
    if (table[i]) {
      for (let j = i + i; j <= n; j += i) {
        table[j] = false;
      }
    }
  }
  return table.filter((isPrimeNumber) => isPrimeNumber).length;
}
