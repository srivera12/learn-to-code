import React, { Component } from 'react';
import Dice from './Dice';
import ScoreTable from './ScoreTable';
import './Game.css';

const NUM_DICE = 5;
const NUM_ROLLS = 3;

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOver: false,
      isRolling: false,
      dice: Array.from({ length: NUM_DICE }),
      locked: Array(NUM_DICE).fill(false),
      rollsLeft: NUM_ROLLS,
      scores: {
        ones: undefined,
        twos: undefined,
        threes: undefined,
        fours: undefined,
        fives: undefined,
        sixes: undefined,
        threeOfKind: undefined,
        fourOfKind: undefined,
        fullHouse: undefined,
        smallStraight: undefined,
        largeStraight: undefined,
        yahtzee: undefined,
        chance: undefined,
      },
    };
    this.roll = this.roll.bind(this);
    this.doScore = this.doScore.bind(this);
    this.toggleLocked = this.toggleLocked.bind(this);
    this.setOver = this.setOver.bind(this);
    this.gameReset = this.gameReset.bind(this);
  }

  displayRollButton() {
    switch (this.state.rollsLeft) {
      case 3:
        return 'Start Game!';
      case 2:
        return '2 Re-rolls Left';
      case 1:
        return '1 Re-roll Left';
      case 0:
        return 'Unable to Roll';
      default:
        throw new Error('Not a valid state');
    }
  }

  roll(evt) {
    // roll dice whose indexes are in reroll
    this.setState((st) => ({
      isRolling: true,
      dice: st.dice.map((d, i) => (st.locked[i] ? d : Math.ceil(Math.random() * 6))),
      locked: st.locked,
      rollsLeft: st.rollsLeft - 1,
    }));
    setTimeout(() => {
      this.setState((st) => ({ isRolling: false, locked: st.rollsLeft > 0 ? st.locked : Array(NUM_DICE).fill(true) }));
    }, 500);
  }

  toggleLocked(idx) {
    // toggle whether idx is in locked or not
    if (this.state.rollsLeft > 0) {
      this.setState((st) => ({
        locked: [...st.locked.slice(0, idx), !st.locked[idx], ...st.locked.slice(idx + 1)],
      }));
    }
  }

  doScore(rulename, ruleFn) {
    // evaluate this ruleFn with the dice and score this rulename
    this.setState((st) => ({
      scores: { ...st.scores, [rulename]: ruleFn(this.state.dice) },
      rollsLeft: NUM_ROLLS,
      locked: Array(NUM_DICE).fill(false),
    }));
    this.roll();
  }

  setOver() {
    this.setState({ isOver: true });
  }

  gameReset() {
    this.setState({
      isOver: false,
      isRolling: false,
      dice: Array.from({ length: NUM_DICE }),
      locked: Array(NUM_DICE).fill(false),
      rollsLeft: NUM_ROLLS,
      scores: {
        ones: undefined,
        twos: undefined,
        threes: undefined,
        fours: undefined,
        fives: undefined,
        sixes: undefined,
        threeOfKind: undefined,
        fourOfKind: undefined,
        fullHouse: undefined,
        smallStraight: undefined,
        largeStraight: undefined,
        yahtzee: undefined,
        chance: undefined,
      },
    });
  }

  render() {
    const { scores, isOver, dice, locked, isRolling, rollsLeft } = this.state;
    if (Object.values(scores).filter((val) => typeof val === 'number').length === 13 && isOver === false) {
      this.setOver();
    }
    return (
      <div className="Game">
        <header className="Game-header">
          <h1 className="App-title">Yahtzee!</h1>

          {!isOver ? (
            <section className="Game-dice-section">
              <Dice dice={dice} locked={locked} handleClick={this.toggleLocked} isRolling={isRolling} />
              <div className="Game-button-wrapper">
                <button className="Game-reroll" disabled={rollsLeft === 0 || isRolling} onClick={this.roll}>
                  {this.displayRollButton()}
                </button>
              </div>
            </section>
          ) : (
            <section>
              <h3>Game Over!</h3>
              <button className="Game-reroll" onClick={this.gameReset}>
                Play Again?
              </button>
            </section>
          )}
        </header>
        <ScoreTable doScore={this.doScore} scores={scores} isOver={isOver} isRolling={isRolling} />
      </div>
    );
  }
}

export default Game;
