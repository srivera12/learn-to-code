function anagrams(stringA, stringB) {
  // anagrams - same alphabet characters
  // use regex to remove (using replace) non-letter characters - also need to toLowerCase
  // need to have same order - use sort, need to split to make array and then join back to string
  // compare 2 strings

  // OPTION 1
  const simpleA = stringA.replace(/\W/g, '').toLowerCase().split('').sort().join('');
  const simpleB = stringB.replace(/\W/g, '').toLowerCase().split('').sort().join('');
  return simpleA === simpleB;

  //   //   OPTION 2 - INSTRUCTOR SUGGESTION
  //   function makeCharacterMap(str) {
  //     const charMap = {};
  //     for (let i = 0; i < str.length; i++) {
  //       if (!charMap[str[i]]) {
  //         charMap[str[i]] = 1;
  //       } else {
  //         charMap[str[i]]++;
  //       }
  //     }
  //     return charMap;
  //   }
  //   const mapA = makeCharacterMap(stringA.replace(/\W/g, ''));
  //   const mapB = makeCharacterMap(stringB.replace(/\W/g, ''));
  //   if (Object.keys(mapA).length !== Object.keys(mapB).length) {
  //     return false;
  //   } else {
  //     for (let char in mapA) {
  //       if (mapA[char] !== mapB[char]) {
  //         return false;
  //       } else {
  //         return true;
  //       }
  //     }
  //   }
}
