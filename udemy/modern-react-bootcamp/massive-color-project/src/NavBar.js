import React, { Component } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import './styles/NavBar.css';
import CloseIcon from '@material-ui/icons/Close';
import { Select, MenuItem, Snackbar, IconButton } from '@material-ui/core';
import { Link } from 'react-router-dom';

class NavBar extends Component {
  render() {
    const { level, changeLevel, changeFormat, colorFormat, snackOpen, closeSnackbar, showLevel } = this.props;
    return (
      <header className="NavBar">
        <div className="logo">
          <Link to="/">HOME</Link>
        </div>
        {showLevel ? (
          <div className="slider-container">
            <span>Level: {level}</span>
            <div className="slider">
              <Slider defaultValue={level} min={100} max={900} step={100} onAfterChange={changeLevel} />
            </div>
          </div>
        ) : null}
        <div className="select-container">
          <Select onChange={changeFormat} value={colorFormat}>
            <MenuItem value="hex">HEX - #ffffff</MenuItem>
            <MenuItem value="rgb">RGB - rgb(255, 255, 255)</MenuItem>
            <MenuItem value="rgba">RGBA - rgba(255, 255, 255, 1)</MenuItem>
          </Select>
        </div>
        <Snackbar
          anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
          open={snackOpen}
          message={<span id="message-id">Format Changed to {colorFormat.toUpperCase()}</span>}
          ContentProps={{
            'aria-describedby': 'message-id',
          }}
          action={[
            <IconButton onClick={closeSnackbar} color="inherit" key="close" aria-label="close">
              <CloseIcon />
            </IconButton>,
          ]}
        />
      </header>
    );
  }
}

export default NavBar;
