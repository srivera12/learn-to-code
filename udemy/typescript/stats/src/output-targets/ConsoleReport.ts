// imports
import { OutputTarget } from '../Summary';

// the class
export class ConsoleReport implements OutputTarget {
  print(report: string): void {
    console.log(report);
  }
}
