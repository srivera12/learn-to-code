// const Queue = require('./queue');
import Queue2 from './queue';

function weave(sourceOne, sourceTwo) {
  // initializing the weave
  const weave = new Queue2();
  // iterating through the arrays removing values, then adding them to the weave - stop when both are empty
  while (sourceOne.peek() !== undefined || sourceOne.peek() !== undefined) {
    //   check to prevent adding undefined values - must use 'peek to avoid mutating the array prematurely
    if (sourceOne.peek() !== undefined) {
      weave.add(sourceOne.remove());
    }
    if (sourceTwo.peek() !== undefined) {
      weave.add(sourceTwo.remove());
    }
  }
  //   return the weave
  return weave;
}
