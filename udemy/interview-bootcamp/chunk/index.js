function chunk(array, size) {
  // create empty array and mini array
  // iterate over, check if mini array is 'full' - based on size
  // push number into array, or push mini array into chunked array, empty mini array

  //     // MY ORIGINAL SOLUTION
  //   const chunkedArray = [];
  //   let arrayChunk = [];
  //   for (let i = 0; i <= array.length; i++) {
  //     if (array[i] === undefined) {
  //       chunkedArray.push(arrayChunk);
  //     } else if (arrayChunk.length < size) {
  //       arrayChunk.push(array[i]);
  //     } else if (arrayChunk.length === size) {
  //       chunkedArray.push(arrayChunk);
  //       arrayChunk = [array[i]];
  //     }
  //   }
  //   return chunkedArray;

  // same process, but rather than loading and emptying mini array,
  // check to see if number needs to be entered into array chunk or new chunk needs to be made

  //   SIMPLIFYING MY SOLUTION AFTER SEEING VIDEO
  const chunkedArray = [];
  for (let i = 0; i < array.length; i++) {
    const last = chunkedArray[chunkedArray.length - 1];
    if (!last || last.length === size) {
      chunkedArray.push([array[i]]);
    } else {
      last.push(array[i]);
    }
  }
  return chunkedArray;

  //   // OPTION 2
  //   const chunkedArray = [];
  //   let index = 0;
  //   while (index < array.length) {
  //     chunkedArray.push(array.slice(index, index + size));
  //     index = index + size;
  //   }
  //   return chunkedArray;
}

module.exports = chunk;
