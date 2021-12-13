import { AppBar, IconButton, InputBase, Switch, Toolbar, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { Search } from '@material-ui/icons';
import React, { Component } from 'react';
import { withLanguageContext } from './contexts/LanguageContext';
import { ThemeContext } from './contexts/ThemeContext';
import styles from './styles/NavBarStyles';

const text = {
  english: {
    signInHere: 'Sign In Here',
    search: 'Search...',
    emoji: '🇬🇧',
  },
  spanish: {
    signInHere: 'Registrarse Aquí',
    search: 'Buscar...',
    emoji: '🇵🇷',
  },
  french: {
    signInHere: 'Se Connecter Ici',
    search: 'Chercher...',
    emoji: '🇫🇷',
  },
};

class NavBar extends Component {
  static contextType = ThemeContext;
  render() {
    const { classes } = this.props;
    const { isDark, toggleTheme } = this.context;
    const { language } = this.props.languageContext;
    return (
      <div className={classes.root}>
        <AppBar position="static" color={isDark ? 'default' : 'primary'}>
          <Toolbar>
            <IconButton className={classes.menuButton} color="inherit">
              <span>{text[language].emoji}</span>
            </IconButton>
            <Typography className={classes.title} variant="h6" color="inherit">
              {text[language].signInHere}
            </Typography>
            <Switch onChange={toggleTheme} />
            <div className={classes.grow} />
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <Search />
              </div>
              <InputBase
                placeholder={text[language].search}
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
              />
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withLanguageContext(withStyles(styles)(NavBar));
