function circular(list) {
  let slow = list.getFirst();
  if (slow.next === null) {
    return false;
  }
  let fast = slow.next;
  while (fast.next && fast.next.next) {
    if (slow === fast) {
      return true;
    }
    slow = slow.next;
    fast = fast.next.next;
  }
  return false;
}
