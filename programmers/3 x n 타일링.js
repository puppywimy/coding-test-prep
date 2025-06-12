const DIVISOR = 1000000007;

function solution(n) {
  const table = [null, 0, [1, 1, 1]];
  for (let i = 3; i <= n; i++) {
    if (i % 2 !== 0) {
      table[i] = 0;
      continue;
    }
    table[i] = [
      (table[i - 2][0] + table[i - 2][1] + table[i - 2][2]) % DIVISOR,
      (table[i - 2][0] + 2 * table[i - 2][1] + table[i - 2][2]) % DIVISOR,
      (table[i - 2][0] + table[i - 2][1] + 2 * table[i - 2][2]) % DIVISOR,
    ];
  }
  return table[n].reduce((acc, cur) => (acc + cur) % DIVISOR, 0) % DIVISOR;
}
