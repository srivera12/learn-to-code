import {
  Avatar,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  Input,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Typography,
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { LockOutlined } from '@material-ui/icons';
import React, { useContext } from 'react';
import { LanguageContext } from './contexts/LanguageContext';
import styles from './styles/FormStyles';

const text = {
  english: {
    signIn: 'Sign In',
    email: 'Email',
    password: 'Password',
    remember: 'Remember Me',
  },
  spanish: {
    signIn: 'Registrarse',
    email: 'Correo Electronico',
    password: 'Contraseña',
    remember: 'Recuérdame',
  },
  french: {
    signIn: 'Se Connecter',
    email: 'Adresse Èlectronique',
    password: 'Mot de Passe',
    remember: 'Souviens-toi De Moi',
  },
};

function Form(props) {
  const { language, changeLanguage } = useContext(LanguageContext);
  const { classes } = props;
  const { signIn, email, password, remember } = text[language];
  return (
    <main className={classes.main}>
      <Paper className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlined />
        </Avatar>
        <Typography variant="h5">{signIn}</Typography>
        <Select value={language} onChange={changeLanguage}>
          <MenuItem value="english">English</MenuItem>
          <MenuItem value="spanish">Spanish</MenuItem>
          <MenuItem value="french">French</MenuItem>
        </Select>
        <form className={classes.form}>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="email">{email}</InputLabel>
            <Input id="email" name="email" autoFocus></Input>
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="password">{password}</InputLabel>
            <Input id="password" name="password"></Input>
          </FormControl>
          <FormControlLabel control={<Checkbox color="primary" />} label={remember} />
          <Button variant="contained" type="submit" fullWidth color="primary" className={classes.submit}>
            {signIn}
          </Button>
        </form>
      </Paper>
    </main>
  );
}

export default withStyles(styles)(Form);
