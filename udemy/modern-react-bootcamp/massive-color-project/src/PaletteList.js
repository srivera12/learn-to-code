import React, { Component } from 'react';
import MiniPalette from './MiniPalette';
import { withStyles } from '@material-ui/styles';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const styles = {
  root: {
    height: '100vh',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    overflow: 'auto',
  },
  container: {
    width: '50%',
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: 'column',
    flexWrap: 'wrap',
    paddingBottom: '50px',
    '@media (max-width: 1200px)': {
      width: '80%',
    },
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
    marginTop: '10px',
    boxSizing: 'border-box',
    width: '100%',
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '5%',
    '@media (max-width: 600px)': {
      gridTemplateColumns: 'repeat(1, 1fr)',
      gap: '1%',
    },
  },
  button: {
    '&button': {
      marginLeft: '20px',
    },
  },
  btns: {
    marginTop: '1rem',
  },
};

class PaletteList extends Component {
  goToPalette = (id) => {
    this.props.history.push(`/palette/${id}`);
  };
  clearLocalStorage = () => {
    window.localStorage.clear();
    window.location.reload();
  };
  openDelete = (id) => {
    this.props.open(id);
  };
  render() {
    const { palettes, classes, close, dialogOpen, deletePalette } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.container}>
          <nav className={classes.nav}>
            <h1>CR Color Palettes</h1>
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
                handleClick={this.goToPalette}
                openDelete={this.openDelete}
              />
            ))}
          </div>
        </div>
        <Dialog open={dialogOpen} onClose={close}>
          <DialogTitle>Are you sure you want to delete this palette?</DialogTitle>
          <DialogContent>
            <DialogContentText>You cannot undo this action if this is a palette you have created.</DialogContentText>
            <div className={classes.btns}>
              <Button color="primary" variant="contained" onClick={deletePalette}>
                Yes
              </Button>
              <Button color="secondary" variant="contained" style={{ marginLeft: '1rem' }} onClick={close}>
                No
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    );
  }
}

export default withStyles(styles)(PaletteList);
