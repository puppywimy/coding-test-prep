function solution(numbers) {
  const newNumber = numbers.sort((a, b) => `${b}${a}` - `${a}${b}`).join("");
  return newNumber[0] === "0" ? "0" : newNumber;
}
