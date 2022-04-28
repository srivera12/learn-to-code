const request = require('postman-request');

const forecast = (latitude, longitude, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=${process.env.WEATHER_API_KEY}&query=${latitude},${longitude}&units=f`;
  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback('Unable to connect to weather service.');
    } else if (body.error) {
      callback('Unable to access weather for that location.');
    } else {
      const { temperature, weather_icons, weather_descriptions, observation_time, feelslike } = body.current;
      const data = {
        observation_time: Date(`${observation_time} UTC`),
        temperature,
        weather_icons,
        weather_descriptions: weather_descriptions.map((desc) => desc.toLowerCase()),
        feelslike,
      };
      callback(undefined, data);
    }
  });
};

module.exports = forecast;
