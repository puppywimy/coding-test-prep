function solution(nums) {
  const max = nums.length / 2;
  const sizeOfSet = new Set(nums).size;
  return Math.min(max, sizeOfSet);
}
