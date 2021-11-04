import React, { Component } from 'react';
import './JokeRow.css';

class JokeRow extends Component {
  getColor = () => {
    if (this.props.rating >= 15) {
      return '#4caf50';
    } else if (this.props.rating >= 12) {
      return '#8bc34a';
    } else if (this.props.rating >= 9) {
      return '#cddc39';
    } else if (this.props.rating >= 6) {
      return '#ffeb3b';
    } else if (this.props.rating >= 3) {
      return '#ffc107';
    } else if (this.props.rating >= 0) {
      return '#ff9800';
    } else {
      return '#f44338';
    }
  };
  getSmiley = () => {
    if (this.props.rating >= 15) {
      return 'em em-rolling_on_the_floor_laughing';
    } else if (this.props.rating >= 12) {
      return 'em em-laughing';
    } else if (this.props.rating >= 9) {
      return 'em em-smiley';
    } else if (this.props.rating >= 6) {
      return 'em em-slightly_smiling_face';
    } else if (this.props.rating >= 3) {
      return 'em em-neutral_face';
    } else if (this.props.rating >= 0) {
      return 'em em-confused';
    } else {
      return 'em em-angry';
    }
  };
  render() {
    return (
      <div className="JokeRow">
        <div className="JokeRow-buttons">
          <i className="fas fa-arrow-up" onClick={this.props.upVote}></i>
          <span className="JokeRow-rating" style={{ borderColor: this.getColor() }}>
            {this.props.rating}
          </span>
          <i className="fas fa-arrow-down" onClick={this.props.downVote}></i>
        </div>
        <div className="JokeRow-text">{this.props.joke}</div>
        <div className="JokeRow-smiley">
          <i className={this.getSmiley()}></i>
        </div>
      </div>
    );
  }
}

export default JokeRow;
