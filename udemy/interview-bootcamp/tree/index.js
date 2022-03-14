class Node {
  constructor(data) {
    this.data = data;
    this.children = [];
  }

  add(data) {
    this.children.push(new Node(data));
  }

  remove(data) {
    this.children = this.children.filter((child) => child.data !== data);
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  traverseBF(ftn) {
    if (this.root === null) {
      return;
    }
    const nodes = [this.root];
    while (nodes.length) {
      const node = nodes.shift();
      nodes.push(...node.children);
      ftn(node);
    }
  }

  traverseDF(ftn) {
    if (this.root === null) {
      return;
    }
    const nodes = [this.root];
    while (nodes.length) {
      const node = nodes.shift();
      nodes.unshift(...node.children);
      ftn(node);
    }
  }
}
