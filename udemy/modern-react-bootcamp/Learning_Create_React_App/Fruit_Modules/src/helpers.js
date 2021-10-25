export function choice(items) {
  return items[Math.floor(Math.random() * items.length)];
}

export function remove(items, item) {
  for (let i = 0; i < items.length; i++) {
    if (items[i] === item) {
      items.splice(i, 1);
    }
  }
}
