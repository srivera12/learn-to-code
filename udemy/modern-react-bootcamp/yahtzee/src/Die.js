import React, { Component } from 'react';
import './Die.css';

class Die extends Component {
  lockDie = () => {
    if (!this.props.isRolling) {
      this.props.handleClick(this.props.idx);
    }
  };
  render() {
    const { val, locked, isRolling } = this.props;
    let dieRoll;
    switch (val) {
      case 1:
        dieRoll = 'dice-one';
        break;
      case 2:
        dieRoll = 'dice-two';
        break;
      case 3:
        dieRoll = 'dice-three';
        break;
      case 4:
        dieRoll = 'dice-four';
        break;
      case 5:
        dieRoll = 'dice-five';
        break;
      case 6:
        dieRoll = 'dice-six';
        break;
      default:
        dieRoll = 'square';
    }
    return (
      <i
        className={`Die fas fa-${isRolling && !locked ? 'square' : dieRoll} ${
          isRolling && !locked ? 'Die-rolling' : null
        } ${locked ? 'Die-locked' : null} fa-4x`}
        onClick={this.lockDie}
      ></i>
    );
  }
}

export default Die;
