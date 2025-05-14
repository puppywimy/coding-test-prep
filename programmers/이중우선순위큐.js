function solution(operations) {
  const array = [];

  operations.forEach((operation) => {
    const code = operation.split(" ")[0];
    const value = Number(operation.split(" ")[1]);

    switch (code) {
      case "I": {
        array.push(value);
        array.sort((a, b) => a - b);
        break;
      }
      case "D": {
        if (array.length === 0) break;
        if (value === 1) array.splice(-1);
        else array.splice(0, 1);
        break;
      }
    }
  });

  return array.length === 0 ? [0, 0] : [array[array.length - 1], array[0]];
}
