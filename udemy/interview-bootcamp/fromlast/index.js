function fromLast(list, n) {
  // OPTION 1 - my solution
  let slow = list.getFirst();
  let fast = list.getAt(n);
  while (fast.next) {
    slow = slow.next;
    fast = fast.next;
  }
  return slow;

  //   // OPTION 2 - instructor solution
  //   let slow = list.getFirst();
  //   let fast = list.getFirst();
  //   while (n > 0) {
  //     fast = fast.next;
  //     n--;
  //   }
  //   while (fast.next) {
  //     slow = slow.next;
  //     fast = fast.next;
  //   }
  //   return slow;
}
