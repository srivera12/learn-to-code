import React, { Component } from 'react';
import './styles/App.css';
import Palette from './Palette';
import seedColors from './seedColors';
import { generatePalette } from './colorHelpers';
import { Switch, Route, Redirect } from 'react-router-dom';
import PaletteList from './PaletteList';
import SingleColorPalette from './SingleColorPalette';
import NewPaletteForm from './NewPaletteForm';

class App extends Component {
  constructor(props) {
    super(props);
    const savedPalettes = JSON.parse(window.localStorage.getItem('palettes'));
    this.state = {
      palettes: savedPalettes || seedColors,
    };
    this.savePalette = this.savePalette.bind(this);
    this.deletePalette = this.deletePalette.bind(this);
    this.syncLocalStorage = this.syncLocalStorage.bind(this);
  }
  savePalette(newPalette) {
    this.setState({ palettes: [...this.state.palettes, newPalette] }, this.syncLocalStorage);
  }
  deletePalette(id) {
    const lessPalettes = this.state.palettes.filter((palette) => palette.id !== id);
    this.setState({ palettes: lessPalettes }, this.syncLocalStorage);
  }
  syncLocalStorage() {
    window.localStorage.setItem('palettes', JSON.stringify(this.state.palettes));
  }
  render() {
    const { palettes } = this.state;
    const findPalette = (props) => {
      let id = props.match.params.id;
      let palette = palettes.find((palette) => palette.id === id);
      if (palette) {
        return <Palette {...props} key={id} palette={generatePalette(palette)} />;
      } else {
        return <Redirect to="/" />;
      }
    };
    const findSingleColorPalette = (props) => {
      let paletteId = props.match.params.paletteId;
      let colorId = props.match.params.colorId;
      let palette = palettes.find((palette) => palette.id === paletteId);
      if (palette) {
        return <SingleColorPalette {...props} key={paletteId} palette={generatePalette(palette)} colorId={colorId} />;
      } else {
        return <Redirect to="/" />;
      }
    };
    return (
      <div className="App">
        <Switch>
          <Route
            exact
            path="/new-palette"
            render={(routeProps) => (
              <NewPaletteForm savePalette={this.savePalette} palettes={palettes} {...routeProps} />
            )}
          />
          <Route
            exact
            path="/"
            render={(routeProps) => (
              <PaletteList palettes={palettes} deletePalette={this.deletePalette} {...routeProps} />
            )}
          />
          <Route exact path="/palette/:id" render={findPalette} />
          <Route exact path="/palette/:paletteId/:colorId" render={findSingleColorPalette} />
          <Redirect to="/" />
        </Switch>
      </div>
    );
  }
}

export default App;
