function solution(strings, n) {
  return strings.sort((a, b) =>
    a.charAt(n) === b.charAt(n)
      ? a < b
        ? -1
        : 1
      : a.charAt(n) < b.charAt(n)
      ? -1
      : 1
  );
}
