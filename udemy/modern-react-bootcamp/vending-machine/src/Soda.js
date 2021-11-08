import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Message from './Message';

class Soda extends Component {
  render() {
    return (
      <div>
        <Message>
          <h3>YOU PICKED A SODA</h3>
          <Link to="/">Go Back</Link>
        </Message>
        <img
          src="https://images.unsplash.com/photo-1566846128021-b940b0eec910?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=987&q=80"
          alt="hand holding glass bottle of orange soda"
        />
      </div>
    );
  }
}

export default Soda;
