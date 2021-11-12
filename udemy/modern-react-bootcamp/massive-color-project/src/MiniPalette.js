import React from 'react';
import { withStyles } from '@material-ui/styles';
import { Link } from 'react-router-dom';

const styles = {
  root: {
    backgroundColor: '#fff',
    border: '1px solid black',
    borderRadius: '5px',
    padding: '0.5rem',
    position: 'relative',
    overflow: 'hidden',
    '&:hover': {
      cursor: 'pointer',
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
};

function MiniPalette(props) {
  const { classes, id, colors, paletteName, emoji } = props;
  const miniColorBoxes = colors.map((color) => (
    <div key={color.name} className={classes.miniColor} style={{ backgroundColor: color.color }}></div>
  ));
  return (
    <div className={classes.root}>
      <Link to={`/palette/${id}`}>
        <div className={classes.colors}>{miniColorBoxes}</div>
        <h5 className={classes.title}>
          {paletteName}
          <span className={classes.emoji}>{emoji}</span>
        </h5>
      </Link>
    </div>
  );
}

export default withStyles(styles)(MiniPalette);
