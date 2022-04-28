const path = require('path');
const express = require('express');
const hbs = require('hbs');
const { query } = require('express');
const geoCode = require('./utils/geoCode.js');
const forecast = require('./utils/forecast.js');

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
  if (!req.query.location) {
    return res.send({
      error: 'You must provide a location in order to see the weather.',
    });
  }
  geoCode(req.query.location, (geoError, { lat, long, place_name } = {}) => {
    if (geoError) {
      return res.send({
        error: geoError,
      });
    } else {
      forecast(lat, long, (weatherError, { observation_time, weather_descriptions, temperature, feelslike } = {}) => {
        if (weatherError) {
          return res.send({
            error: weatherError,
          });
        } else {
          res.send({
            placeAndTime: `${place_name} on ${observation_time}:`,
            forecast: `The weather is ${weather_descriptions[0]} and the temperature is ${temperature} but it feels like ${feelslike}.`,
          });
        }
      });
    }
  });
});

app.get('/products', (req, res) => {
  if (!req.query.search) {
    return res.send({
      error: 'You must provide a search term',
    });
  }
  console.log(req.query.search);
  res.send({
    products: [],
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
