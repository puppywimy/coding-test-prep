class Heap {
  constructor() {
    this.array = [null];
  }

  size() {
    return this.array.length - 1;
  }

  swap(a, b) {
    [this.array[a], this.array[b]] = [this.array[b], this.array[a]];
  }

  push(element) {
    this.array.push(element);

    let index = this.array.length - 1;

    while (this.array[~~(index / 2)] > this.array[index]) {
      this.swap(~~(index / 2), index);
      index = ~~(index / 2);
    }
  }

  pop() {
    if (this.array.length === 1) return null;

    let min = this.array[1];

    this.array[1] = this.array[this.array.length - 1];
    this.array.pop();

    let index = 1;

    while (
      this.array[index] > this.array[2 * index] ||
      this.array[index] > this.array[2 * index + 1]
    ) {
      if (this.array[2 * index] > this.array[2 * index + 1]) {
        this.swap(index, 2 * index + 1);
        index = 2 * index + 1;
      } else {
        this.swap(index, 2 * index);
        index = 2 * index;
      }
    }

    return min;
  }
}

function solution(scovilles, K) {
  const plates = new Heap();
  scovilles.forEach((scoville) => {
    plates.push(scoville);
  });

  let a = plates.pop();
  let b = plates.pop();
  let count = 0;

  while (a < K) {
    if (b === null) return -1;
    plates.push(a + 2 * b);
    a = plates.pop();
    b = plates.pop();
    count++;
  }

  return count;
}
