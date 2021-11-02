import React, { Component } from 'react';
import './RuleRow.css';

class RuleRow extends Component {
  handleClick = () => {
    if (!this.props.beenClicked) {
      this.props.doScore();
    }
  };
  render() {
    const { beenClicked, name, score, desc } = this.props;
    return (
      <tr className={!beenClicked ? 'RuleRow RuleRow-active' : 'RuleRow RuleRow-disabled'} onClick={this.handleClick}>
        <td className="RuleRow-name">{name}</td>
        <td className="RuleRow-score">{!beenClicked ? desc : score}</td>
      </tr>
    );
  }
}

export default RuleRow;
