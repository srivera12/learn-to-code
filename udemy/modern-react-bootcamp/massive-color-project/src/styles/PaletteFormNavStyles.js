import { drawerWidth } from './constants';

const styles = (theme) => ({
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: '64px',
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  toolbar: {
    '& button': {
      padding: 0,
    },
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20,
    '@media (max-width: 800px)': {
      marginLeft: '5px',
      marginRight: '5px',
    },
  },
  navBtns: {
    display: 'flex',
    marginTop: '1rem',
    marginRight: '1rem',
    '& a': {
      textDecoration: 'none',
    },
    '@media (max-width: 800px)': {
      marginTop: '1px',
      marginRight: '1px',
      fontSize: 'small',
      '& button': {
        marginTop: '15px',
        padding: '5px',
      },
    },
    '@media (max-width: 400px)': {
      marginTop: '1px',
      marginRight: '1px',
      fontSize: 'small',
      '& button': {
        padding: 0,
      },
    },
  },
});

export default styles;
