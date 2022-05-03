import app from './app.js';
const port = process.env.PORT;

// set up listening on port
app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
