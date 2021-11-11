import React, { Component } from 'react';
import './App.css';
import Palette from './Palette';
import seedColors from './seedColors';
import { generatePalette } from './colorHelpers';
import { Switch, Route, Redirect } from 'react-router-dom';
import PaletteList from './PaletteList';

class App extends Component {
  render() {
    const findPalette = (props) => {
      let id = props.match.params.id;
      let palette = seedColors.find((palette) => palette.id === id);
      if (palette) {
        return <Palette {...props} key={id} palette={generatePalette(palette)} />;
      } else {
        return <Redirect to="/" />;
      }
    };
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" render={() => <PaletteList palettes={seedColors} />} />
          <Route exact path="/palette/:id" render={findPalette} />
          <Redirect to="/" />
        </Switch>
      </div>
    );
  }
}

export default App;
