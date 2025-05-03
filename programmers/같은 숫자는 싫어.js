function solution(arr) {
  return arr.filter((_, i, origin) => origin[i] !== origin[i + 1]);
}
