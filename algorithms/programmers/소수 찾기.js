function isPrimeNumber(number) {
  if (number < 2) return false;
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) return false;
  }
  return true;
}

function getAllCases(ingredients, length) {
  if (length === 1) return ingredients;
  const allCases = [];
  ingredients.forEach((prefix, i, origin) => {
    const rest = [...origin.slice(0, i), ...origin.slice(i + 1)];
    const cases = getAllCases(rest, length - 1);
    cases.forEach((el) => {
      allCases.push(prefix + el);
    });
  });
  return allCases;
}

function solution(numbers) {
  const allCases = new Set();
  const ingredients = numbers.split("");
  for (let i = 0; i < ingredients.length; i++) {
    getAllCases(ingredients, i + 1).forEach((el) => {
      allCases.add(Number(el));
    });
  }

  return Array.from(allCases).filter((el) => isPrimeNumber(el)).length;
}
