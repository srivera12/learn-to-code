import React, { Component } from 'react';
import ColorBox from './ColorBox';
import NavBar from './NavBar';
import './styles/Palette.css';

class Palette extends Component {
  constructor(props) {
    super(props);
    this.state = { level: 500, colorFormat: 'hex', snackOpen: false };
    this.changeLevel = this.changeLevel.bind(this);
    this.changeFormat = this.changeFormat.bind(this);
    this.closeSnackbar = this.closeSnackbar.bind(this);
  }
  changeLevel(newLevel) {
    this.setState({ level: newLevel });
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
    const { paletteName, emoji, colors } = this.props.palette;
    const { level, colorFormat, snackOpen } = this.state;
    const colorBoxes = colors[level].map((color) => (
      <ColorBox
        key={color.id}
        color={color[colorFormat]}
        name={color.name}
        id={color.id}
        sourcePalette={this.props.palette.id}
        showLink
        isShade={false}
      />
    ));
    return (
      <div className="Palette">
        <NavBar
          showLevel
          changeLevel={this.changeLevel}
          level={level}
          changeFormat={this.changeFormat}
          colorFormat={colorFormat}
          snackOpen={snackOpen}
          closeSnackbar={this.closeSnackbar}
        />
        <div className="Palette-colors">{colorBoxes}</div>
        <footer className="Palette-footer">
          <span className="Palette-name">{paletteName}</span>
          <span className="Palette-emoji">{emoji}</span>
        </footer>
      </div>
    );
  }
}

export default Palette;
