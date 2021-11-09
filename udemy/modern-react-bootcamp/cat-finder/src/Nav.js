import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';

class Nav extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <NavLink exact className="navbar-brand" to="/cats">
          Cat Finder
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle Navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {this.props.cats.map((cat) => (
              <li className="nav-item" key={cat.name}>
                <NavLink exact activeClassName="nav-link-active" className="nav-link" to={`/cats/${cat.name}`}>
                  {cat.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    );
  }
}

export default Nav;
