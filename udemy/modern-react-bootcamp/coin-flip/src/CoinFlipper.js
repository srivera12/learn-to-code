import React, { Component } from 'react';
import Coin from './Coin';

class CoinFlipper extends Component {
  constructor() {
    super();
    this.state = {
      face: '',
      heads: 0,
      tails: 0,
      flips: 0,
    };
    this.handleClick = this.handleClick.bind(this);
    this.flip = this.flip.bind(this);
  }
  flip() {
    if (Math.round(Math.random()) === 0) {
      this.setState((st) => {
        return { face: 'tails', tails: st.tails + 1, flips: st.flips + 1 };
      });
    } else {
      this.setState((st) => {
        return { face: 'heads', heads: st.heads + 1, flips: st.flips + 1 };
      });
    }
  }
  handleClick(e) {
    this.flip();
  }
  render() {
    return (
      <div>
        <h1>Let's Flip A Coin!</h1>
        <Coin face={this.state.face} />
        <button onClick={this.handleClick}>FLIP ME</button>
        <p>
          Out of {this.state.flips} flips, there have been {this.state.heads} heads and {this.state.tails} tails.
        </p>
      </div>
    );
  }
}

export default CoinFlipper;
