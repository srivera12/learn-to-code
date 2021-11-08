import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Message from './Message';

class CandyBar extends Component {
  render() {
    return (
      <div>
        <Message>
          <h3>YOU PICKED A CANDY BAR</h3>
          <Link to="/">Go Back</Link>
        </Message>
        <img
          src="https://images.unsplash.com/photo-1534640076976-2ffafd40fe07?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1064&q=80"
          alt="holding a broken Crunch candy bar"
        />
      </div>
    );
  }
}

export default CandyBar;
