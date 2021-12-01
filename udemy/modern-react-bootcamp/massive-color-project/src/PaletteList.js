import React, { Component } from 'react';
import MiniPalette from './MiniPalette';
import { withStyles } from '@material-ui/styles';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

const styles = {
  root: {
    backgroundColor: 'blue',
    height: '100vh',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    overflow: 'scroll',
  },
  container: {
    width: '50%',
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: 'column',
    flexWrap: 'wrap',
  },
  nav: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    color: 'white',
    alignItems: 'center',
    '& a': {
      color: 'white',
    },
  },
  palettes: {
    boxSizing: 'border-box',
    width: '100%',
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '5%',
  },
  button: {
    '&button': {
      marginLeft: '20px',
    },
  },
};

class PaletteList extends Component {
  goToPalette(id) {
    this.props.history.push(`/palette/${id}`);
  }
  clearLocalStorage = () => {
    window.localStorage.clear();
    window.location.reload();
  };
  render() {
    const { palettes, classes, deletePalette } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.container}>
          <nav className={classes.nav}>
            <h1>React Color Palettes</h1>
            <div>
              <Link to="/new-palette">Create New Palette</Link>
              <Button color="secondary" onClick={this.clearLocalStorage} className={classes.button}>
                Reset All Palettes
              </Button>
            </div>
          </nav>
          <div className={classes.palettes}>
            {palettes.map((palette) => (
              <MiniPalette
                {...palette}
                key={palette.id}
                id={palette.id}
                handleClick={() => this.goToPalette(palette.id)}
                deletePalette={deletePalette}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(PaletteList);
