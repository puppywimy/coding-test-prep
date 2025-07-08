function solution(n) {
  return `${n}`.split("").reduce((acc, cur) => acc + Number(cur), 0);
}
