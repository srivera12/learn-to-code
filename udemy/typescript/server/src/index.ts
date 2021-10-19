// imports
import { AppRouter } from './AppRouter';
import bodyParser from 'body-parser';
import './controllers/LoginController';
import './controllers/RootController';
import cookieSession from 'cookie-session';
import express from 'express';

// init express app
const app = express();

// app uses
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieSession({ keys: [''] }));
app.use(AppRouter.getInstance());

// listening on port
app.listen(3000, () => {
  console.log('listening on port 3000');
});
