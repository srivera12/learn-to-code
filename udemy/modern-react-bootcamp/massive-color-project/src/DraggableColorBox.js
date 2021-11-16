import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {
    height: '25%',
    width: '20%',
    margin: '0 auto',
    display: 'inline-block',
    position: 'relative',
    cursor: 'pointer',
    marginBottom: '-3px',
  },
};

class DraggableColorBox extends Component {
  render() {
    const { color, name, classes } = this.props;
    return (
      <div className={classes.root} style={{ backgroundColor: color }}>
        {name}
      </div>
    );
  }
}

export default withStyles(styles)(DraggableColorBox);
