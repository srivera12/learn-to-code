import React, { Component } from 'react';
import './App.css';
import Palette from './Palette';
import seedColors from './seedColors';
import { generatePalette } from './colorHelpers';

class App extends Component {
  render() {
    console.log(generatePalette(seedColors[0]));
    return (
      <div className="App">
        {seedColors.map((palette) => (
          <Palette palette={generatePalette(palette)} />
        ))}
      </div>
    );
  }
}

export default App;
