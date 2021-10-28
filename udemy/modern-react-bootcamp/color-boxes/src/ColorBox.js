import React, { Component } from 'react';
import { choice } from './helpers';
import './ColorBox.css';

class ColorBox extends Component {
  static defaultProps = {
    allColors: [
      '#ec2814',
      '#641210',
      '#d75915',
      '#d38e10',
      '#c39367',
      '#7b4931',
      '#b5c1d1',
      '#3c619b',
      '#cba134',
      '#5f8921',
      '#832320',
      '#e0bd19',
      '#462825',
      '#e89619',
      '#8a1b61',
      '#6e7710',
    ],
  };
  constructor(props) {
    super(props);
    this.state = {
      color: choice(this.props.allColors),
    };
    this.changeColor = this.changeColor.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  changeColor() {
    let newColor = choice(this.props.allColors);
    if (newColor === this.state.color) {
      newColor = choice(this.props.allColors);
    }
    this.setState({ color: newColor });
  }
  handleClick() {
    this.changeColor();
  }
  render() {
    return (
      <div className="ColorBox" style={{ backgroundColor: this.state.color }} onClick={this.handleClick}>
        {this.state.color}
      </div>
    );
  }
}

export default ColorBox;
