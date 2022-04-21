import express from 'express';
import './db/mongoose.js';
import userRouter from './routers/userRouter.js';
import taskRouter from './routers/taskRouter.js';

// create express application
const app = express();
// sets port - real one used or 3000 for development
const port = process.env.PORT || 3000;

// setting up express to parse the incoming JSON data, and use the 2 routers
app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

// set up listening on port
app.listen(port, () => {
  console.log(`Server is up on ${port}`);
});
