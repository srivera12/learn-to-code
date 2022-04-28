import express from 'express';
import './db/mongoose.js';
import userRouter from './routers/userRouter.js';
import taskRouter from './routers/taskRouter.js';
import maintenance from './middleware/maintenance.js';
import auth from './middleware/auth.js';

// create express application
const app = express();
// sets port - real one used or 3000 for development
const port = process.env.PORT;

// setting up express to parse the incoming JSON data, and use the 2 routers
app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

// set up listening on port
app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
