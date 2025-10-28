function solution(arr, divisor) {
  const myArray = arr.filter((element) => element % divisor === 0);
  myArray.sort((a, b) => a - b);
  return myArray.length ? myArray : [-1];
}
