import React, { Component } from 'react';
import ColorBox from './ColorBox';
import './ColorContainer.css';

class ColorContainer extends Component {
  static defaultProps = {
    numBoxes: 16,
  };
  render() {
    const boxes = Array.from({ length: this.props.numBoxes }).map(() => <ColorBox />);
    return <div className="ColorContainer">{boxes}</div>;
  }
}

export default ColorContainer;
