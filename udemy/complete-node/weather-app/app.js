const geoCode = require('./utils/geoCode.js');
const forecast = require('./utils/forecast.js');

geoCode(process.argv[2], (geoError, { lat, long, place_name } = {}) => {
  if (!process.argv[2]) {
    console.log('You must provide a location.');
  } else if (geoError) {
    console.log('Error: ', geoError);
  } else {
    forecast(lat, long, (weatherError, { observation_time, weather_descriptions, temperature, feelslike } = {}) => {
      if (weatherError) {
        console.log('Error: ', weatherError);
      } else {
        console.log(
          `${place_name} at ${observation_time}: The weather is ${weather_descriptions[0]} and the temperature is ${temperature} but it feels like ${feelslike}.`
        );
      }
    });
  }
});
