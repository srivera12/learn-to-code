const path = require('path');
const express = require('express');

const app = express();

app.use(express.static(path.join(__dirname, '../public')));

// app.get('/help', (req, res) => {
//   res.send({ name: 'Sarah', age: 27 });
// });

// app.get('/about', (req, res) => {
//   res.send('<h1>About Page</h1>');
// });

app.get('/weather', (req, res) => {
  res.send({
    location: `Showing weather for place and time.`,
    forecast: `Currently the weather is description. The temperature is temperature and the feels like is feelslike.`,
  });
});

app.listen(3000, () => {
  console.log('Server is up on port 3000.');
});
