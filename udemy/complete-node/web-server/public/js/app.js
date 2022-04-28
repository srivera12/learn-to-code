console.log('js is loaded');

const locationForm = document.querySelector('form');
const locationInput = document.querySelector('input');
const weatherLocation = document.getElementById('weather-location');
const weatherForecast = document.getElementById('weather-forecast');

locationForm.addEventListener('submit', (e) => {
  e.preventDefault();
  weatherLocation.textContent = 'Loading...';
  weatherForecast.textContent = '';

  fetch(`/weather?location=${locationInput.value}`).then((response) => {
    response.json().then((data) => {
      weatherLocation.textContent = data.placeAndTime || data.error;
      weatherForecast.textContent = data.forecast || null;
    });
  });
});
