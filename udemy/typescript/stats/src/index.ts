// imports
import { MatchReader } from './MatchReader';
import { Summary } from './Summary';

// reading the file and making it available for analysis and reporting
const matchReader = MatchReader.fromCSV('football.csv');
matchReader.load();

// analyzing and reporting # of wins for team 'Man United'
const winsSummary = Summary.winsAnalysisWithConsoleReport('Man United');
winsSummary.buildAndPrintReport(matchReader.matches);

// analyzing and reporting average # of goals for team 'Man United'
const averageGoalsSummary = Summary.averageGoalsAnalysisWithConsoleReport('Man United');
averageGoalsSummary.buildAndPrintReport(matchReader.matches);

// analyzing and generating a report in HTML5 # of wins for team 'Man United'
const winsSummaryHTML = Summary.winsAnalysisWithHTMLReport('Man United');
winsSummaryHTML.buildAndPrintReport(matchReader.matches);
