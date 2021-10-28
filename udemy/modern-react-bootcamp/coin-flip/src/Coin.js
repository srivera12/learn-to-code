import React, { Component } from 'react';

class Coin extends Component {
  render() {
    const imgSrc = `assets/${this.props.face}.jpeg`;
    return (
      <div>
        <img src={imgSrc} alt={this.props.face} />
      </div>
    );
  }
}

export default Coin;
