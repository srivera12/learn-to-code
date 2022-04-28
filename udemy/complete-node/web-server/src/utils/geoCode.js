const request = require('postman-request');

const geoCode = (location, callback) => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(location)}.json?access_token=${
    process.env.GEO_API_KEY
  }&limit=1`;
  request({ url: url, json: true }, (error, { body }) => {
    if (error) {
      callback('Unable to connect to location service.');
    } else if (body.message === 'Forbidden' || body.features.length === 0) {
      callback(`Unable to find location ${location}`);
    } else {
      const { place_name } = body.features[0];
      const data = {
        lat: body.features[0].center[1],
        long: body.features[0].center[0],
        place_name,
      };
      callback(undefined, data);
    }
  });
};

module.exports = geoCode;
