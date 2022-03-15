class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }

  insert(data) {
    if (data < this.data && this.left) {
      this.left.insert(data);
    } else if (data < this.data) {
      this.left = new Node(data);
    } else if (data > this.data && this.right) {
      this.right.insert(data);
    } else if (data > this.data) {
      this.right = new Node(data);
    }
  }

  contains(data) {
    if (this.data === data) {
      return this;
    }
    if (this.right && this.right.data === data) {
      return this.right;
    } else if (this.left && this.left.data === data) {
      return this.left;
    } else if (this.right && data > this.data) {
      return this.right.contains(data);
    } else if (this.left && data < this.data) {
      return this.left.contains(data);
    } else {
      return null;
    }
  }
}
