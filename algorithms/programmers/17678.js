function solution(n, t, m, timetable) {
  const startTime = "09:00";

  function addMinutes(time, minutes) {
    const date = new Date(
      new Date(2025, 11, 8, ...time.split(":")).getTime() + minutes * 60 * 1000
    );
    return convertTimeToString(date.getHours(), date.getMinutes());
  }

  function convertTimeToString(hours, minutes) {
    return `${`0${hours}`.slice(-2)}:${`0${minutes}`.slice(-2)}`;
  }

  timetable.sort();
  let currentShuttleTime = startTime;
  let cursor = 0;
  let seatCount = m;

  for (let i = 0; i < n; i++) {
    while (
      cursor < timetable.length &&
      timetable[cursor] <= currentShuttleTime
    ) {
      seatCount--;
      if (seatCount === 0) {
        return addMinutes(timetable[cursor], -1);
      }
      cursor++;
    }
    if (cursor === timetable.length) {
      return currentShuttleTime;
    }
    currentShuttleTime = addMinutes(currentShuttleTime, t);
  }
  return addMinutes(currentShuttleTime, -t);
}
