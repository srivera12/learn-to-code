class Node {
  // to hold data and next, which can be null
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  // constructor only creates head with value 'null'
  constructor() {
    this.head = null;
  }

  //   create head for list
  insertFirst(data) {
    this.head = new Node(data, this.head);
  }

  // return number of nodes in list
  size() {
    let counter = 0;
    let node = this.head;
    while (node) {
      counter++;
      node = node.next;
    }
    return counter;
  }

  // returns first node of list
  getFirst() {
    return this.head;
  }

  // returns last node of list
  getLast() {
    let tail = this.head;
    while (tail && tail.next) {
      tail = tail.next;
    }
    return tail;
  }

  // removes all nodes from list
  clear() {
    this.head = null;
  }

  // removes the first node, making the head the node that was previously the second node
  removeFirst() {
    if (!this.head) {
      return;
    }
    this.head = this.head.next;
  }

  // removes the last node
  removeLast() {
    let previous = this.head;
    // check if list is empty
    if (!previous) {
      return;
    }
    // if list has only one node - also ensures last is not null (important below)
    else if (previous && !previous.next) {
      this.head = null;
    }
    // removing last under typical conditions
    else {
      let last = this.head.next;
      while (last.next !== null) {
        previous = last;
        last = last.next;
      }
      previous.next = null;
    }
  }

  // inserts new node after last node
  insertLast(data) {
    // check if list is empty
    if (!this.head) {
      this.head = new Node(data);
    } else {
      // find tail
      const tail = this.getLast();
      // add new node at tail.next
      tail.next = new Node(data);
    }
  }

  // return node at provided index
  getAt(index) {
    let count = 0;
    let node = this.head;
    while (count < index) {
      // check if list has ended
      if (!node) {
        return node;
      } else {
        node = node.next;
        count++;
      }
    }
    return node;
  }

  // remove node at provided index
  // need to preserve the rest of the list, link previous node to following node
  removeAt(index) {
    // //   OPTION 1 - MY ORIGINAL SOLUTION
    // // count needs to start at 1 since we effectively skip the head
    // let count = 1;
    // let previousNode = this.head;
    // // edge case - removing head, head needs to be reassigned
    // if (index === 0 && this.head) {
    //   this.head = this.head.next;
    // }
    // // edge case - empty list
    // else if (!this.head) {
    //   return;
    // } else {
    //   let node = this.head.next;
    //   while (count < index) {
    //     // check if list has ended
    //     if (node === null) {
    //       return;
    //     } else {
    //       previousNode = node;
    //       node = node.next;
    //       count++;
    //     }
    //   }
    //   // check if list has ended with last iteration through while loop
    //   if (node === null) {
    //     return;
    //   }
    //   previousNode.next = node.next;
    // }

    // OPTION 2 - CODE RE-USE
    // check if trying to delete first node
    if (index === 0 && this.head) {
      this.head = this.head.next;
      return;
    }
    // check if list is empty, or index is out of bounds
    else if (!this.head || index >= this.size()) {
      return;
    }
    // call getAt on index before the one we want to get the previous node
    const previousNode = this.getAt(index - 1);
    if (previousNode) {
      previousNode.next = previousNode.next.next;
    } else {
      return;
    }
  }

  // add new node at an index - make new node the next of the previous node, make new node's next the previous nodes next
  insertAt(data, index) {
    // // OPTION 1 - what I originally wrote
    // let count = 0;
    // // edge case - new head needs to be assigned - works if list is empty or not
    // if (index === 0) {
    //   const newHead = new Node(data, this.head);
    //   this.head = newHead;
    // }
    // // iterate through list until at index - 1 (node = previous node), then make node's next the new node's next, and make node's next = new node
    // else {
    //   let node = this.head;
    //   while (count < index - 1) {
    //     // check to see if list has ended, if so add new node at end
    //     if (node.next) {
    //       node = node.next;
    //       count++;
    //     } else {
    //       node.next = new Node(data);
    //       return;
    //     }
    //   }
    //   // now node = node before one to be inserted
    //   const newNode = new Node(data, node.next);
    //   node.next = newNode;
    // }

    // OPTION 2 - reusing getAt() and getLast()
    // alternate previous of getLast() allows inserting node at the end even if index is out of bounds
    const previousNode = this.getAt(index - 1) || this.getLast();
    // if list is empty
    if (!previousNode) {
      this.head = new Node(data);
    }
    // if trying to insert new head
    else if (index === 0) {
      this.head = new Node(data, this.head);
    }
    // inserting new node in middle
    else {
      const newNodeNext = previousNode.next;
      previousNode.next = new Node(data, newNodeNext);
    }
  }

  // do the provided function to the data at each node
  forEach(fn) {
    // variable for each node, set to head
    let node = this.head;
    let counter = 0;
    while (node) {
      fn(node, counter);
      node = node.next;
      counter++;
    }
  }

  // make list compatible with a for... of... loop
  *[Symbol.iterator]() {
    let node = this.head;
    while (node) {
      yield node;
      node = node.next;
    }
  }
}
