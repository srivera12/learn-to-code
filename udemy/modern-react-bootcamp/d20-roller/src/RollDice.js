// imports
import React, { Component } from 'react';
import Dice from './Dice';

// stateful parent component
class RollDice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // initializing important states
      roll: 0,
      isRolling: false,
      outcome: "It's time to roll!",
    };
    // binding function 'roll'
    this.roll = this.roll.bind(this);
  }
  //   'roll' function - generates random number 1-20, and establishing 'isRolling' state
  roll(e) {
    const d20Roll = Math.ceil(Math.random() * 20);
    this.setState({ roll: d20Roll, isRolling: true });
    if (d20Roll === 20) {
      this.setState({ outcome: 'Critical success! You won DnD!' });
    } else if (d20Roll === 1) {
      this.setState({ outcome: 'Critical failure, you died!' });
    } else if (d20Roll >= 15) {
      this.setState({ outcome: 'Strong Success!' });
    } else if (d20Roll >= 10) {
      this.setState({ outcome: 'Success!' });
    } else {
      this.setState({ outcome: 'Failure!' });
    }
    // limits duration of 'isRolling' state
    setTimeout(() => {
      this.setState({ isRolling: false });
    }, 500);
  }
  render() {
    return (
      <div>
        <h1>TAKE A CHANCE, ROLL THE DICE!</h1>
        <Dice roll={this.state.roll} isRolling={this.state.isRolling} />
        <h3>{this.state.isRolling ? 'The DM waits patiently...' : this.state.outcome}</h3>
        <button onClick={this.roll} disabled={this.state.isRolling}>
          {this.state.isRolling ? 'ROLLING...' : 'ROLL!'}
        </button>
      </div>
    );
  }
}

// exporting to app
export default RollDice;
