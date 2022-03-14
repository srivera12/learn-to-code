function levelWidth(root) {
  //   // OPTION 1 - my solution, a little haphazard
  //   const levelWidths = [1];
  //   let prevLevel = [root];
  //   while (prevLevel.length) {
  //     const level = [];
  //     prevLevel.forEach((node) => {
  //       level.push(...node.children);
  //     });
  //     levelWidths.push(level.length);
  //     prevLevel = level;
  //   }
  //   return levelWidths.slice(0, levelWidths.length - 1);

  // OPTION 2 - instructor solution
  const widths = [0];
  const nodes = [root, 's'];
  while (nodes.length > 1) {
    const node = nodes.shift();
    if (node === 's') {
      widths.push(0);
      nodes.push('s');
    } else {
      widths[widths.length - 1]++;
      nodes.push(...node.children);
    }
  }
  return widths;
}
