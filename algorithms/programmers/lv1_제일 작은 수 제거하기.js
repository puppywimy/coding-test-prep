function solution(arr) {
  if (arr.length === 1) return [-1];
  let min = arr[0];
  for (element of arr) {
    if (element < min) min = element;
  }
  return arr.filter((element) => element !== min);
}
