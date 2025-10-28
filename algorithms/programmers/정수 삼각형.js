function solution(triangle) {
  for (let i = triangle.length - 2; i >= 0; i--) {
    triangle[i] = triangle[i].map((el, j) => {
      const prevRow = triangle[i + 1];
      return (prevRow[j] > prevRow[j + 1] ? prevRow[j] : prevRow[j + 1]) + el;
    });
  }
  return triangle[0][0];
}
