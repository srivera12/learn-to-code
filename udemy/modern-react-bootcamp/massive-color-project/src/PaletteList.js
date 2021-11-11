import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PaletteList extends Component {
  render() {
    return (
      <div>
        <h1>React Color Palettes</h1>
        {this.props.palettes.map((palette) => (
          <Link to={`/palette/${palette.id}`}>{palette.paletteName}</Link>
        ))}
      </div>
    );
  }
}

export default PaletteList;
