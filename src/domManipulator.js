import pubsub from './pubsub'

const search = document.getElementById('search-location');

search.addEventListener('change', (e) => {
  pubsub.publish('weather forecast requested', search.value)
})


const domLocation = (() => {
  const location = document.querySelector('.current-location');

  function update (locationData) {
    location.textContent = `${locationData.city}, ${locationData.country}`
  }
  return { update }
})();

pubsub.subscribe('current-location data passed', domLocation.update)


const domCurrentWeather = (() => {
  const currentWeather = {
    temp: document.querySelector('.current-weather .temperature.value'),
    windSpeed: document.querySelector('.current-weather .wind-speed.value'),
    humidity: document.querySelector('.current-weather .humidity.value'),
    pressure: document.querySelector('.current-weather .pressure.value'),
    visibility: document.querySelector('.current-weather .visibility.value'),
  };
  
  function update(weatherData) {
    for (let field in currentWeather) {
      console.log(field,currentWeather[field], weatherData[field])
      currentWeather[field].textContent = weatherData[field]
    }
  }

  return { update }
})();

pubsub.subscribe('current-weather data passed', domCurrentWeather.update)