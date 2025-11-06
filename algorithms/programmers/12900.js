function solution(n) {
  const denominator = 1000000007;

  const table = [null, 1, 2];
  for (let i = 3; i <= n; i++) {
    table[i] = (table[i - 1] + table[i - 2]) % denominator;
  }
  return table[n];
}
