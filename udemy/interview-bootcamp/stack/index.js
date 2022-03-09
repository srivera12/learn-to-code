class Stack {
  // constructor creates data structure - array
  constructor() {
    this.data = [];
  }
  //   add new values to back so most recent one in is the first out
  push(datum) {
    this.data.push(datum);
  }
  //   pop removes last value - the most recent one / last one added
  pop() {
    return this.data.pop();
  }
  //   checks what will be popped without mutating the array/stack
  peek() {
    return this.data[this.data.length - 1];
  }
}
