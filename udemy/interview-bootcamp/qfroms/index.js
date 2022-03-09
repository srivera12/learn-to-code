const Stack = require('./stack');

class Queue {
  // need to create 2 stacks you can use to get queue behavior
  constructor() {
    this.stack1 = new Stack();
    this.stack2 = new Stack();
  }
  // add method - adds datum to 'queue' / empties stack2 into stack1 BACKWARDS, adds to stack 2, empties stack1 into stack2 in correct order
  add(datum) {
    while (this.stack2.peek() !== undefined) {
      this.stack1.push(this.stack2.pop());
    }
    this.stack2.push(datum);
    while (this.stack1.peek() !== undefined) {
      this.stack2.push(this.stack1.pop());
    }
  }
  // remove method - remove oldest datum, will always be most recent from stack2
  remove() {
    return this.stack2.pop();
  }
  // peek method - view oldest datum (will always be most recent of stack2) without altering the records at all
  peek() {
    return this.stack2.peek();
  }
}
