function solution(x) {
  return (
    x % Number(`${x}`.split("").reduce((acc, cur) => acc + Number(cur), 0)) ===
    0
  );
}
