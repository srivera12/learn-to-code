// imports
import { Analyzer } from '../Summary';
import { MatchData } from '../MatchData';

// the class
export class AverageGoalsAnalysis implements Analyzer {
  constructor(public team: string) {}
  run(matches: MatchData[]): string {
    let goals = 0;
    let teamMatches = 0;
    for (let match of matches) {
      if (match[1] === this.team) {
        goals = goals + match[3];
        teamMatches++;
      } else if (match[2] === this.team) {
        goals = goals + match[4];
        teamMatches++;
      }
    }
    goals = goals / teamMatches;
    return `${this.team} averages ${goals} goals per match.`;
  }
}
