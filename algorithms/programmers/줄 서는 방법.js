function getFactorial(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) result = result * i;
  return result;
}

function solution(n, k) {
  const ingredients = new Array(n).fill().map((_, i) => i + 1);
  const result = [];
  let index = k - 1;
  for (let i = 1; i < n; i++) {
    const ingredientIndex = Math.floor(index / getFactorial(n - i));
    result.push(ingredients[ingredientIndex]);
    ingredients.splice(ingredientIndex, 1);
    index = index % getFactorial(n - i);
  }
  result.push(ingredients[0]);
  return result;
}
