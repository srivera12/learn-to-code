import React, { Component } from 'react';
import RuleRow from './RuleRow';
import './ScoreTable.css';
import {
  ones,
  twos,
  threes,
  fours,
  fives,
  sixes,
  threeOfKind,
  fourOfKind,
  fullHouse,
  smallStraight,
  largeStraight,
  yahtzee,
  chance,
} from './Rules';

class ScoreTable extends Component {
  render() {
    const { scores, doScore } = this.props;
    let totalScore;
    if (Object.values(scores).filter((val) => typeof val === 'number').length > 0) {
      totalScore = Object.values(scores)
        .filter((val) => typeof val === 'number')
        .reduce((prev, curr) => {
          return prev + curr;
        });
    } else {
      totalScore = 0;
    }
    if (
      scores.ones + scores.twos + scores.threes + scores.fours + scores.fives + scores.sixes >= 63 &&
      this.props.isOver === true
    ) {
      totalScore = totalScore + 35;
    }
    return (
      <div className="ScoreTable">
        <section className="ScoreTable-section">
          <h2>Upper</h2>
          <table cellSpacing="0">
            <tbody>
              <RuleRow
                name="Ones"
                desc={ones.description}
                score={scores.ones}
                doScore={(evt) => doScore('ones', ones.evalRoll)}
                beenClicked={typeof scores.ones === 'number'}
              />
              <RuleRow
                name="Twos"
                desc={twos.description}
                score={scores.twos}
                doScore={(evt) => doScore('twos', twos.evalRoll)}
                beenClicked={typeof scores.twos === 'number'}
              />
              <RuleRow
                name="Threes"
                desc={threes.description}
                score={scores.threes}
                doScore={(evt) => doScore('threes', threes.evalRoll)}
                beenClicked={typeof scores.threes === 'number'}
              />
              <RuleRow
                name="Fours"
                desc={fours.description}
                score={scores.fours}
                doScore={(evt) => doScore('fours', fours.evalRoll)}
                beenClicked={typeof scores.fours === 'number'}
              />
              <RuleRow
                name="Fives"
                desc={fives.description}
                score={scores.fives}
                doScore={(evt) => doScore('fives', fives.evalRoll)}
                beenClicked={typeof scores.fives === 'number'}
              />
              <RuleRow
                name="Sixes"
                desc={sixes.description}
                score={scores.sixes}
                doScore={(evt) => doScore('sixes', sixes.evalRoll)}
                beenClicked={typeof scores.sixes === 'number'}
              />
            </tbody>
          </table>
        </section>
        <section className="ScoreTable-section ScoreTable-section-lower">
          <h2>Lower</h2>
          <table cellSpacing="0">
            <tbody>
              <RuleRow
                name="Three of Kind"
                desc={threeOfKind.description}
                score={scores.threeOfKind}
                doScore={(evt) => doScore('threeOfKind', threeOfKind.evalRoll)}
                beenClicked={typeof scores.threeOfKind === 'number'}
              />
              <RuleRow
                name="Four of Kind"
                desc={fourOfKind.description}
                score={scores.fourOfKind}
                doScore={(evt) => doScore('fourOfKind', fourOfKind.evalRoll)}
                beenClicked={typeof scores.fourOfKind === 'number'}
              />
              <RuleRow
                name="Full House"
                desc={fullHouse.description}
                score={scores.fullHouse}
                doScore={(evt) => doScore('fullHouse', fullHouse.evalRoll)}
                beenClicked={typeof scores.fullHouse === 'number'}
              />
              <RuleRow
                name="Small Straight"
                desc={smallStraight.description}
                score={scores.smallStraight}
                doScore={(evt) => doScore('smallStraight', smallStraight.evalRoll)}
                beenClicked={typeof scores.smallStraight === 'number'}
              />
              <RuleRow
                name="Large Straight"
                desc={largeStraight.description}
                score={scores.largeStraight}
                doScore={(evt) => doScore('largeStraight', largeStraight.evalRoll)}
                beenClicked={typeof scores.largeStraight === 'number'}
              />
              <RuleRow
                name="Yahtzee"
                desc={yahtzee.description}
                score={scores.yahtzee}
                doScore={(evt) => doScore('yahtzee', yahtzee.evalRoll)}
                beenClicked={typeof scores.yahtzee === 'number'}
              />
              <RuleRow
                name="Chance"
                desc={chance.description}
                score={scores.chance}
                doScore={(evt) => doScore('chance', chance.evalRoll)}
                beenClicked={typeof scores.chance === 'number'}
              />
            </tbody>
          </table>
        </section>
        <section>
          <h2>Total Score: {totalScore}</h2>
        </section>
      </div>
    );
  }
}

export default ScoreTable;
