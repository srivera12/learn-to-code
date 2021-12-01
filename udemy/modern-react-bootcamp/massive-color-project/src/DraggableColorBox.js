import React, { Component } from 'react';
import chroma from 'chroma-js';
import DeleteIcon from '@material-ui/icons/Delete';
import { withStyles } from '@material-ui/core/styles';
import { SortableElement } from 'react-sortable-hoc';

const styles = {
  root: {
    height: '25%',
    width: '20%',
    margin: '0 auto',
    display: 'inline-block',
    position: 'relative',
    cursor: 'pointer',
    marginBottom: '-3px',
    '&:hover $deleteIcon': {
      color: 'white',
      transform: 'scale(1.5)',
    },
    '@media (max-width: 800px)': {
      height: '15%',
      width: '50%',
      marginBottom: '-6px',
    },
    '@media (max-width: 400px)': {
      height: '15%',
      width: '100%',
      marginBottom: '-6px',
    },
  },
  boxContent: {
    position: 'absolute',
    width: '100%',
    left: '0px',
    bottom: '0px',
    padding: '10px',
    letterSpacing: '1px',
    textTransform: 'uppercase',
    fontSize: '12px',
    display: 'flex',
    justifyContent: 'space-between',
  },
  deleteIcon: {
    color: 'rgba(0, 0, 0, 0.5)',
    transition: 'all 0.2s ease-in-out',
  },
};

class DraggableColorBox extends Component {
  render() {
    const { color, name, classes, deleteColorBox } = this.props;
    const textColor = chroma.contrast(color, 'white') < 4.5 ? 'black' : 'white';
    return (
      <div className={classes.root} style={{ backgroundColor: color, color: textColor }}>
        <div className={classes.boxContent}>
          <span>{name}</span>
          <DeleteIcon className={classes.deleteIcon} onClick={deleteColorBox} />
        </div>
      </div>
    );
  }
}

export default SortableElement(withStyles(styles)(DraggableColorBox));
