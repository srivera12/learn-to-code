import React, { PureComponent } from 'react';
import { withStyles } from '@material-ui/styles';
import DeleteIcon from '@material-ui/icons/Delete';

const styles = {
  root: {
    backgroundColor: '#fff',
    border: '1px solid black',
    borderRadius: '5px',
    padding: '0.5rem',
    position: 'relative',
    overflow: 'hidden',
    cursor: 'pointer',
    '&:hover $delete': {
      opacity: '1',
    },
  },
  colors: {
    height: '150px',
    width: '100%',
    borderRadius: '5px',
    overflow: 'hidden',
  },
  miniColor: {
    height: '25%',
    width: '20%',
    display: 'inline-block',
    margin: '0 auto',
    position: 'relative',
    marginBottom: '-3.5px',
  },
  title: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '0',
    color: 'black',
    paddingTop: '0.5rem',
    fontSize: '0.77rem',
    position: 'relative',
  },
  emoji: {
    marginLeft: '0.5rem',
    fontSize: '1.5rem',
  },
  delete: {
    color: 'white',
    backgroundColor: 'red',
    width: '20px',
    height: '20px',
    position: 'absolute',
    right: '0',
    top: '0',
    padding: '10px',
    zIndex: '10',
    opacity: '0',
    transition: 'all 0.3s ease-in-out',
  },
};
class MiniPalette extends PureComponent {
  openDelete = (e) => {
    e.stopPropagation();
    this.props.openDelete(this.props.id);
  };
  handleClick = () => {
    this.props.handleClick(this.props.id);
  };
  render() {
    const { classes, colors, paletteName, emoji } = this.props;
    const miniColorBoxes = colors.map((color) => (
      <div key={color.name} className={classes.miniColor} style={{ backgroundColor: color.color }}></div>
    ));
    return (
      <div className={classes.root} onClick={this.handleClick}>
        <div className={classes.delete} onClick={this.openDelete}>
          <DeleteIcon />
        </div>
        <div className={classes.colors}>{miniColorBoxes}</div>
        <h5 className={classes.title}>
          {paletteName}
          <span className={classes.emoji}>{emoji}</span>
        </h5>
      </div>
    );
  }
}

export default withStyles(styles)(MiniPalette);
