import React, { Component } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import VendingMachine from './VendingMachine';
import Soda from './Soda';
import CandyBar from './CandyBar';
import Chips from './Chips';
import NavBar from './NavBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<VendingMachine />} end />
          <Route path="/soda" element={<Soda />} />
          <Route path="/candy-bar" element={<CandyBar />} />
          <Route path="/chips" element={<Chips />} />
        </Routes>
      </div>
    );
  }
}

export default App;
