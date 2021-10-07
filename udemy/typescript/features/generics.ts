// // GENERICS IN CLASSES
// // without generics
// class ArrayOfNumbers {
//   constructor(public collection: number[]) {}
//   get(index: number): number {
//     return this.collection[index];
//   }
// }
// class ArrayOfStrings {
//   constructor(public collection: string[]) {}
//   get(index: number): string {
//     return this.collection[index];
//   }
// }
// // with generics
// class ArrayOfAnything<T> {
//   constructor(public collection: T[]) {}
//   get(index: number): T {
//     return this.collection[index];
//   }
// }
// // doesn't need the type specified - type inference
// const arr = new ArrayOfAnything([3, 12, 7, 2]);

//GENERICS IN FUNCTIONS
// without generics
function printStrings(array: string[]): void {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
}
printStrings(['hey', 'hi', 'what up', 'how are you']);
function printNumbers(array: number[]): void {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
}
printNumbers([3, 12, 8, 5]);
// with generics
function printAnything<T>(array: T[]): void {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
}
// still doesn't require type because of type inference, but always better to add it to help catch errors
printAnything<number>([4, 6, 1, 99]);
