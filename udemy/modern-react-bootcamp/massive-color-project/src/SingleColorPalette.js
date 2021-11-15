import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ColorBox from './ColorBox';
import NavBar from './NavBar';

class SingleColorPalette extends Component {
  constructor(props) {
    super(props);
    this.state = { colorFormat: 'hex', snackOpen: false };
    this._shades = this.collectShades(this.props.palette, this.props.colorId);
    this.collectShades = this.collectShades.bind(this);
    this.changeFormat = this.changeFormat.bind(this);
    this.closeSnackbar = this.closeSnackbar.bind(this);
  }
  collectShades(palette, colorId) {
    let shades = [];
    let allColors = palette.colors;
    for (let shade in allColors) {
      shades = shades.concat(allColors[shade].filter((color) => color.id === colorId));
    }
    return shades.slice(1);
  }
  changeFormat(e) {
    this.setState({ colorFormat: e.target.value, snackOpen: true });
    setTimeout(() => {
      this.setState({ snackOpen: false });
    }, 3000);
  }
  closeSnackbar() {
    this.setState({ snackOpen: false });
  }
  render() {
    const { colorFormat, snackOpen } = this.state;
    const { paletteName, emoji } = this.props.palette;
    const shadeBoxes = this._shades.map((shade) => (
      <ColorBox key={shade.name} color={shade[colorFormat]} name={shade.name} showLink={false} />
    ));
    return (
      <div className="Palette SingleColorPalette">
        <NavBar
          showLevel={false}
          changeFormat={this.changeFormat}
          colorFormat={colorFormat}
          snackOpen={snackOpen}
          closeSnackbar={this.closeSnackbar}
        />
        <div className="Palette-colors">
          {shadeBoxes}
          <div className="ColorBox go-back">
            <Link className="back-button" to={`/palette/${this.props.palette.id}`}>
              BACK TO PALETTE
            </Link>
          </div>
        </div>
        <footer className="Palette-footer">
          {paletteName} <span className="Palette-emoji">{emoji}</span>
        </footer>
      </div>
    );
  }
}

export default SingleColorPalette;
