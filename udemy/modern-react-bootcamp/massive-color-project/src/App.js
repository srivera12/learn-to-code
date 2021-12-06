import React, { Component } from 'react';
import './styles/App.css';
import Palette from './Palette';
import seedColors from './seedColors';
import { generatePalette } from './colorHelpers';
import { Switch, Route, Redirect } from 'react-router-dom';
import PaletteList from './PaletteList';
import SingleColorPalette from './SingleColorPalette';
import NewPaletteForm from './NewPaletteForm';
import generated from './generated.svg';
import withStyles from '@material-ui/styles/withStyles';

const styles = {
  root: {
    backgroundImage: `url(${generated})`,
    backgroundSize: 'cover',
    backgroundPostion: 'center',
    backgroundRepeat: 'no-repeat',
    // '@media (max-width: 500px)': {
    //   backgroundSize: '200% 200%',
    // },
  },
};

class App extends Component {
  constructor(props) {
    super(props);
    const savedPalettes = JSON.parse(window.localStorage.getItem('palettes'));
    this.state = {
      palettes: savedPalettes || seedColors,
      dialogOpen: false,
      deleteID: '',
    };
    this.savePalette = this.savePalette.bind(this);
    this.deletePalette = this.deletePalette.bind(this);
    this.syncLocalStorage = this.syncLocalStorage.bind(this);
    this.handleClickOpen = this.handleClickOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }
  savePalette(newPalette) {
    this.setState({ palettes: [...this.state.palettes, newPalette] }, this.syncLocalStorage);
  }
  deletePalette() {
    const lessPalettes = this.state.palettes.filter((palette) => palette.id !== this.state.deleteID);
    this.setState({ palettes: lessPalettes, dialogOpen: false }, this.syncLocalStorage);
  }
  syncLocalStorage() {
    window.localStorage.setItem('palettes', JSON.stringify(this.state.palettes));
  }
  handleClickOpen(id) {
    this.setState({ dialogOpen: true, deleteID: id });
  }
  handleClose() {
    this.setState({ dialogOpen: false });
  }
  render() {
    const { palettes, dialogOpen } = this.state;
    const { classes } = this.props;
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
      <div className={`App ${classes.root}`}>
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
              <PaletteList
                palettes={palettes}
                deletePalette={this.deletePalette}
                {...routeProps}
                open={this.handleClickOpen}
                close={this.handleClose}
                dialogOpen={dialogOpen}
              />
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

export default withStyles(styles)(App);
