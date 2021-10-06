// import 'Sortable'
import { Sortable, Sorter } from './Sorter';

// if the thing to be sorted is an array of numbers
export class NumbersCollection extends Sorter implements Sortable {
  constructor(public data: number[]) {
    super();
  }
  get length(): number {
    return this.data.length;
  }
  //   number-specific compare
  compare(leftIndex: number, rightIndex: number): boolean {
    return this.data[leftIndex] > this.data[rightIndex];
  }
  //   number-specific swapping
  swap(leftIndex: number, rightIndex: number): void {
    const leftHand = this.data[leftIndex];
    this.data[leftIndex] = this.data[rightIndex];
    this.data[rightIndex] = leftHand;
  }
  print(): void {
    console.log(this.data);
  }
}
