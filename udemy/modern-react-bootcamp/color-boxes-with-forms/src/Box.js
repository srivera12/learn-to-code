import React, { Component } from 'react';
import './Box.css';

class Box extends Component {
  static defaultProps = {
    backgroundColor: 'purple',
    width: '5',
    height: '5',
  };
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.props.remove();
  }
  render() {
    const boxStyles = {
      backgroundColor: this.props.backgroundColor,
      height: `${this.props.height}em`,
      width: `${this.props.width}em`,
    };
    return (
      <div className="Box">
        <div className="Box-box" style={boxStyles}></div>
        <button className="Box-button" onClick={this.handleClick}>
          Remove the Box
        </button>
      </div>
    );
  }
}

export default Box;
