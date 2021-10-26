// imports
import React, { Component } from 'react';
import './Dice.css';

// stateless child component
class Dice extends Component {
  render() {
    //   selecting img based on both 'isRolling' and 'roll' props from parent component
    let imgSrc = '';
    if (this.props.roll === 0 || this.props.isRolling) {
      imgSrc = 'assets/blank-d20.jpeg';
    } else {
      imgSrc = `assets/${this.props.roll}.png`;
    }
    return (
      <div className="Dice">
        <img
          className={this.props.isRolling ? 'Dice-rolling' : ''}
          src={imgSrc}
          alt={this.props.roll === 0 ? 'No roll yet' : this.props.roll}
        />
      </div>
    );
  }
}

// exporting to RollDice
export default Dice;
