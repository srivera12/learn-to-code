import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Message from './Message';

class Chips extends Component {
  render() {
    return (
      <div>
        <Message>
          <h3>YOU PICKED A BAG OF CHIPS</h3>
          <Link to="/">Go Back</Link>
        </Message>
        <img
          src="https://images.unsplash.com/photo-1621447504864-d8686e12698c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1369&q=80"
          alt="open bag of orange circular chips"
        />
      </div>
    );
  }
}

export default Chips;
