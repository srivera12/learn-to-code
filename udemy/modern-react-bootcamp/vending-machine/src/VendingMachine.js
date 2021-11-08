import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './VendingMachine.css';
import Message from './Message';

class VendingMachine extends Component {
  render() {
    return (
      <div className="VendingMachine">
        <Message>
          <h3 className="VendingMachine-title">
            Welcome to the <br /> Vending Machine
          </h3>
        </Message>
        <Message>
          <h3 className="VendingMachine-subtitle">What would you like?</h3>
          <Link className="VendingMachine-link" to="/soda">
            Soda
          </Link>
          <Link className="VendingMachine-link" to="/candy-bar">
            Candy Bar
          </Link>
          <Link className="VendingMachine-link" to="/chips">
            Chips
          </Link>
        </Message>
      </div>
    );
  }
}

export default VendingMachine;
