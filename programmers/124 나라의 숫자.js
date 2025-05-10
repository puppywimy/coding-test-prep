function solution(n) {
  let quotient = n;
  const remainders = [];
  while (quotient) {
    if (quotient % 3 === 0) {
      remainders.push(4);
      quotient = Math.floor(quotient / 3) - 1;
    } else {
      remainders.push(quotient % 3);
      quotient = Math.floor(quotient / 3);
    }
  }
  remainders.reverse();
  return remainders.join("");
}
