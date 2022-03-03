class Queue1 {
  //   creating the queue
  constructor() {
    this.data = [];
  }
  //   add to front of queue
  add(datum) {
    this.data.unshift(datum);
  }
  //   remove oldest value - first in first out
  remove() {
    return this.data.pop();
  }
}
