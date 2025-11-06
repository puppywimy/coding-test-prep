function search(map, i, j) {
  map[i][j].visited = true;

  let totalFood = map[i][j].food;

  if (map[i + 1]?.[j].visited === false && map[i + 1]?.[j].food !== "X") {
    totalFood += search(map, i + 1, j);
  }
  if (map[i - 1]?.[j].visited === false && map[i - 1]?.[j].food !== "X") {
    totalFood += search(map, i - 1, j);
  }
  if (map[i][j + 1]?.visited === false && map[i][j + 1]?.food !== "X") {
    totalFood += search(map, i, j + 1);
  }
  if (map[i][j - 1]?.visited === false && map[i][j - 1]?.food !== "X") {
    totalFood += search(map, i, j - 1);
  }

  return totalFood;
}

function solution(maps) {
  const map = maps.map((row) =>
    row.split("").map((element) => ({
      food: element === "X" ? element : Number(element),
      visited: false,
    }))
  );

  const foods = [];

  for (let i = 0; i < map.length; i++) {
    for (let j = 0; j < map[0].length; j++) {
      if (map[i][j].visited || map[i][j].food === "X") continue;
      foods.push(search(map, i, j));
    }
  }

  return foods.length ? foods.sort((a, b) => a - b) : [-1];
}
