import React, { Component } from 'react';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Button from '@material-ui/core/Button';
import DraggableColorList from './DraggableColorList';
import { arrayMoveImmutable } from 'array-move';
import PaletteFormNav from './PaletteFormNav';
import ColorPickerForm from './ColorPickerForm';

const drawerWidth = 350;

const styles = (theme) => ({
  root: {
    display: 'flex',
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    display: 'flex',
    alignItems: 'center',
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 8px',
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    height: 'calc(100vh - 64px)',
    padding: theme.spacing.unit * 3,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  container: {
    width: '90%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  buttons: {
    width: '100%',
  },
  button: {
    width: '50%',
  },
});

class NewPaletteForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      colors: this.getRandomColors(10),
    };
  }
  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };
  addNewColor = (newColor) => {
    this.setState({ colors: [...this.state.colors, newColor] });
  };
  savePalette = (newPaletteName) => {
    const newPalette = {
      paletteName: newPaletteName,
      id: newPaletteName.toLowerCase().replace(' ', '-'),
      emoji: ':)',
      colors: this.state.colors,
    };
    this.props.savePalette(newPalette);
    this.props.history.push('/');
  };
  deleteColorBox = (colorName) => {
    this.setState({ colors: this.state.colors.filter((color) => color.name !== colorName) });
  };
  getRandomColors = (num) => {
    let randColors = [];
    while (randColors.length < num) {
      const randPalette = this.props.palettes[Math.floor(Math.random() * this.props.palettes.length)];
      const randColor = randPalette.colors[Math.floor(Math.random() * 20)];
      if (!randColors.includes(randColor)) {
        randColors.push(randColor);
      }
    }
    return randColors;
  };
  addRandColor = () => {
    const newRandColor = this.getRandomColors(1)[0];
    if (!this.state.colors.includes(newRandColor)) {
      this.setState({ colors: [...this.state.colors, newRandColor], updating: true });
    }
  };
  onSortEnd = ({ oldIndex, newIndex }) => {
    this.setState({
      colors: arrayMoveImmutable(this.state.colors, oldIndex, newIndex),
    });
  };
  clearPalette = () => {
    this.setState({ colors: [] });
  };
  render() {
    const { classes, palettes } = this.props;
    const { open, colors } = this.state;
    return (
      <div className={classes.root}>
        <PaletteFormNav
          open={open}
          palettes={palettes}
          colors={colors}
          handleSubmit={this.savePalette}
          handleDrawerOpen={this.handleDrawerOpen}
        />
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={open}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={this.handleDrawerClose}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <Divider />
          <div className={classes.container}>
            <Typography variant="h4" gutterBottom>
              Design Your Palette
            </Typography>
            <div className={classes.buttons}>
              <Button className={classes.button} variant="contained" color="secondary" onClick={this.clearPalette}>
                Clear Palette
              </Button>
              <Button
                className={classes.button}
                variant="contained"
                color="primary"
                onClick={this.addRandColor}
                disabled={colors.length >= 20}
              >
                {colors.length < 20 ? 'Random Color' : 'Palette Full'}
              </Button>
            </div>
            <ColorPickerForm colors={colors} addNewColor={this.addNewColor} />
          </div>
        </Drawer>
        <main
          className={classNames(classes.content, {
            [classes.contentShift]: open,
          })}
        >
          <div className={classes.drawerHeader} />
          <DraggableColorList
            colors={colors}
            deleteColorBox={this.deleteColorBox}
            axis="xy"
            onSortEnd={this.onSortEnd}
          />
        </main>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(NewPaletteForm);
