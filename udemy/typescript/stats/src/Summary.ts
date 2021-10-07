// imports
import { AverageGoalsAnalysis } from './analyzers/AverageGoalsAnalysis';
import { ConsoleReport } from './output-targets/ConsoleReport';
import { HTMLReport } from './output-targets/HTMLReport';
import { MatchData } from './MatchData';
import { WinsAnalysis } from './analyzers/WinsAnalysis';

// necessary interfaces
export interface Analyzer {
  run(matches: MatchData[]): string;
}
export interface OutputTarget {
  print(report: string): void;
}

// the summary class
export class Summary {
  static winsAnalysisWithHTMLReport(team: string): Summary {
    return new Summary(new WinsAnalysis(team), new HTMLReport());
  }
  static winsAnalysisWithConsoleReport(team: string): Summary {
    return new Summary(new WinsAnalysis(team), new ConsoleReport());
  }
  static averageGoalsAnalysisWithHTMLReport(team: string): Summary {
    return new Summary(new AverageGoalsAnalysis(team), new HTMLReport());
  }
  static averageGoalsAnalysisWithConsoleReport(team: string): Summary {
    return new Summary(new AverageGoalsAnalysis(team), new ConsoleReport());
  }
  constructor(public analyzer: Analyzer, public outputTarget: OutputTarget) {}
  buildAndPrintReport(matches: MatchData[]): void {
    const report = this.analyzer.run(matches);
    this.outputTarget.print(report);
  }
}
