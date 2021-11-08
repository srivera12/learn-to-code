import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

class NavBar extends Component {
  render() {
    return (
      <nav className="NavBar">
        <NavLink className="NavBar-link" to="/">
          Home
        </NavLink>
        <NavLink className="NavBar-link" to="/soda">
          Soda
        </NavLink>
        <NavLink className="NavBar-link" to="/candy-bar">
          Candy Bar
        </NavLink>
        <NavLink className="NavBar-link" to="/chips">
          Chips
        </NavLink>
      </nav>
    );
  }
}

export default NavBar;
