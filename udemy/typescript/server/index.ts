// imports
import bodyParser from 'body-parser';
import cookieSession from 'cookie-session';
import express from 'express';
import { router } from './src/routes/loginRoutes';

// init express app
const app = express();

// app uses
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieSession({ keys: [''] }));
app.use(router);

// listening on port
app.listen(3000, () => {
  console.log('listening on port 3000');
});
