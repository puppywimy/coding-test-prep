function solution(a, b) {
  const weekdays = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const maxDays = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const days = maxDays.slice(0, a - 1).reduce((acc, cur) => acc + cur, 0) + b;
  return weekdays[((days % 7) + 4) % 7];
}
