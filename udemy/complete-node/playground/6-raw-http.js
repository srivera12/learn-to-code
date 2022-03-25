const http = require('http');
const url = `http://api.weatherstack.com/current?access_key=680f05e92ecbef79268daca085f8f6ca&query=38.9072,77.0369&units=f`;

const request = http.request(url, (response) => {
  let data = '';

  response.on('data', (chunk) => {
    data = data + chunk.toString();
  });

  response.on('end', () => {
    const body = JSON.parse(data);
    console.log(body);
  });
});

request.on('error', (error) => {
  console.log('An error: ', error);
});

request.end();
