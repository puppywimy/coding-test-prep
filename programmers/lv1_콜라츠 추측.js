function solution(num) {
  let number = num;
  let count = 0;
  while (count < 500) {
    if (number === 1) break;
    if (number % 2 === 0) number = number / 2;
    else number = number * 3 + 1;
    count++;
  }
  return number !== 1 ? -1 : count;
}
