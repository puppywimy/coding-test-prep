function solution(n, money) {
  table = Array.from({ length: n + 1 }).fill(0);
  table[0] = 1;
  for (let i = 0; i < money.length; i++) {
    const currentMoney = money[i];
    for (let j = currentMoney; j <= n; j++) {
      table[j] = (table[j] + table[j - currentMoney]) % 1000000007;
    }
  }
  return table[n];
}
