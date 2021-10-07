// imports
import { AverageGoalsAnalysis } from './Analyzers/AverageGoalsAnalysis';
import { ConsoleReport } from './OutputTargets/ConsoleReport';
import { HTMLReport } from './OutputTargets/HTMLReport';
import { MatchData } from './MatchData';
import { WinsAnalysis } from './Analyzers/WinsAnalysis';

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
