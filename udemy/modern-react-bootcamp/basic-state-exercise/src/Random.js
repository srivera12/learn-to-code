import React, { Component } from 'react';

class Random extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0,
      isWinner: false,
    };
    this.randomizeNum = this.randomizeNum.bind(this);
  }
  randomizeNum(e) {
    const num = Math.floor(Math.random() * 10) + 1;
    this.setState({ number: num });
    if (num === 7) {
      this.setState({ isWinner: true });
    }
  }
  render() {
    return (
      <div>
        <h1>Number is {this.state.number}</h1>
        {this.state.isWinner ? <h2>YOU WIN!!</h2> : <button onClick={this.randomizeNum}>Random Number</button>}
      </div>
    );
  }
}

export default Random;
