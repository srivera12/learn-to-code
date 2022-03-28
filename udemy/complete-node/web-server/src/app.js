const path = require('path');
const express = require('express');
const hbs = require('hbs');

const app = express();

// paths
const publicDirectoryPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

// set up handlebars engine and views location
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

// setup static directory
app.use(express.static(publicDirectoryPath));

app.get('', (req, res) => {
  res.render('index', {
    title: 'Weather App',
    name: 'Sarah Rivera',
  });
});

app.get('/about', (req, res) => {
  res.render('about', {
    title: 'About Page',
    name: 'Sarah Rivera',
  });
});

app.get('/help', (req, res) => {
  res.render('help', {
    title: 'Help Page',
    name: 'Sarah Rivera',
    message: 'This is where you go to get help.',
  });
});

app.get('/weather', (req, res) => {
  res.send({
    location: `Showing weather for place and time.`,
    forecast: `Currently the weather is description. The temperature is temperature and the feels like is feelslike.`,
  });
});

app.get('/help/*', (req, res) => {
  res.render('404', {
    title: 'Help Page',
    name: 'Sarah Rivera',
    error: 404,
    message: 'Help topic not found',
  });
});

app.get('*', (req, res) => {
  res.render('404', {
    title: 'Error Page',
    name: 'Sarah Rivera',
    error: 404,
    message: 'Page not found',
  });
});

app.listen(3000, () => {
  console.log('Server is up on port 3000.');
});
