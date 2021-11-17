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
    this.state = {
      palettes: seedColors,
    };
    this.savePalette = this.savePalette.bind(this);
  }
  savePalette(newPalette) {
    this.setState((st) => ({
      palettes: [...st.palettes, newPalette],
    }));
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
          <Route exact path="/" render={(routeProps) => <PaletteList palettes={palettes} {...routeProps} />} />
          <Route exact path="/palette/:id" render={findPalette} />
          <Route exact path="/palette/:paletteId/:colorId" render={findSingleColorPalette} />
          <Redirect to="/" />
        </Switch>
      </div>
    );
  }
}

export default App;
