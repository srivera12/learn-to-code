import React, { Component } from 'react';
import LottoBall from './LottoBall';
import './Lottery.css';

class Lottery extends Component {
  static defaultProps = {
    title: 'Lotto',
    numBalls: 6,
    maxNum: 40,
  };
  constructor(props) {
    super(props);
    this.state = {
      nums: Array.from({ length: this.props.numBalls }),
    };
    this.handleClick = this.handleClick.bind(this);
    this.genNum = this.genNum.bind(this);
  }
  genNum() {
    this.setState((curState) => ({
      nums: curState.nums.map((n) => Math.floor(Math.random() * this.props.maxNum) + 1),
    }));
  }
  handleClick() {
    this.genNum();
  }
  render() {
    return (
      <div className="Lottery">
        <h1>{this.props.title}</h1>
        <div>
          {this.state.nums.map((num) => (
            <LottoBall num={num} />
          ))}
        </div>
        <br />
        <button className="Lottery-button" onClick={this.handleClick}>
          Generate
        </button>
      </div>
    );
  }
}

export default Lottery;
