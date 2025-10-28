class Heap {
  constructor() {
    this.arr = [null];
  }

  swap(a, b) {
    [this.arr[a], this.arr[b]] = [this.arr[b], this.arr[a]];
  }

  getSize() {
    return this.arr.length - 1;
  }

  push(el) {
    this.arr.push(el);

    if (this.getSize() === 0) return;

    let index = this.getSize();

    while (
      this.arr[~~(index / 2)] !== null &&
      (this.arr[~~(index / 2)][1] > this.arr[index][1] ||
        (this.arr[~~(index / 2)][1] === this.arr[index][1] &&
          this.arr[~~(index / 2)][0] > this.arr[index][0]))
    ) {
      this.swap(~~(index / 2), index);
      index = ~~(index / 2);
    }
  }

  pop() {
    if (this.getSize() === 0) return null;
    if (this.getSize() === 1) return this.arr.pop();

    const min = this.arr[1];
    this.arr[1] = this.arr.pop();

    let index = 1;

    while (true) {
      if (!this.arr[2 * index]) {
        return min;
      }
      if (!this.arr[2 * index + 1]) {
        if (
          this.arr[index][1] > this.arr[2 * index][1] ||
          (this.arr[index][1] === this.arr[2 * index][1] &&
            this.arr[index][0] >= this.arr[2 * index][0])
        ) {
          this.swap(index, 2 * index);
          index = 2 * index;
        } else {
          return min;
        }
      } else {
        if (
          this.arr[index][1] > this.arr[2 * index][1] ||
          (this.arr[index][1] === this.arr[2 * index][1] &&
            this.arr[index][0] >= this.arr[2 * index][0]) ||
          this.arr[index][1] > this.arr[2 * index + 1][1] ||
          (this.arr[index][1] === this.arr[2 * index + 1][1] &&
            this.arr[index][0] >= this.arr[2 * index + 1][0])
        ) {
          if (
            this.arr[2 * index][1] < this.arr[2 * index + 1][1] ||
            (this.arr[2 * index][1] === this.arr[2 * index + 1][1] &&
              this.arr[2 * index][0] < this.arr[2 * index + 1][0])
          ) {
            this.swap(index, 2 * index);
            index = 2 * index;
          } else {
            this.swap(index, 2 * index + 1);
            index = 2 * index + 1;
          }
        } else {
          return min;
        }
      }
    }
  }
}

function solution(jobs) {
  const queue = new Heap();

  const turnaroundTimes = [];

  let jobCursor = 0;
  let currentJob = null;
  let currentJobStartTime;
  for (let i = 0; i < 500000; i++) {
    if (currentJob && currentJobStartTime + currentJob[1] === i) {
      turnaroundTimes.push(i - currentJob[0]);
      currentJob = null;
    }
    const newJobs = jobs.filter((job) => job[0] === i);
    newJobs.forEach((job) => {
      queue.push(job);
    });
    if (queue.getSize() > 0 && currentJob === null) {
      currentJob = queue.pop();
      currentJobStartTime = i;
    }
  }

  let total = 0;
  turnaroundTimes.forEach((time) => {
    total += time;
  });

  return ~~(total / turnaroundTimes.length);
}
