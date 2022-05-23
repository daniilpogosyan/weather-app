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


const domDailyForecast = (() => {
  const forecastList = document.querySelector('.daily-forecast');

  function createForecastItem(dayForecastData) {
    const wrapper = document.createElement('li');
    wrapper.classList.add('daily-forecast__item');

    const weekDay = document.createElement('p');
    weekDay.classList.add('weekday');

    const date = document.createElement('p');
    date.classList.add('date');
    date.textContent = dayForecastData.date;

    const dayTemp = document.createElement('p');
    dayTemp.classList.add('day-temperature');

    const daytimeTempVal = document.createElement('span');
    daytimeTempVal.classList.add('daytime', 'temperature', 'value');
    daytimeTempVal.textContent = dayForecastData.maxTemp;
    
    const daytimeTempUnit = document.createElement('span');
    daytimeTempUnit.classList.add('daytime', 'temperature', 'unit');
    daytimeTempUnit.textContent = " °C";

    const slash = document.createTextNode(" / ");

    const nighttimeTempVal = document.createElement('span');
    date.classList.add('nighttime', 'temperature', 'value');
    nighttimeTempVal.textContent = dayForecastData.minTemp;
    
    const nighttimeTempUnit = document.createElement('span');
    date.classList.add('nighttime', 'temperature', 'unit');
    nighttimeTempUnit.textContent = " °C";

    dayTemp.append(
      daytimeTempVal,
      daytimeTempUnit,
      slash,
      nighttimeTempVal,
      nighttimeTempUnit
    );

    const windSpeed = document.createElement('p');
    windSpeed.classList.add('wind-speed');

    const windSpeedVal = document.createElement('span');
    windSpeedVal.classList.add('wind-speed', 'value');
    windSpeedVal.textContent = dayForecastData.maxWindSpeed;

    const windSpeedUnit = document.createElement('span');
    windSpeedUnit.classList.add('wind-speed', 'unit');
    windSpeedUnit.textContent = " m/s";

    windSpeed.append(windSpeedVal, windSpeedUnit)

    wrapper.append(
      weekDay,
      date,
      dayTemp,
      windSpeed
    );

    return wrapper
  }


  function update (forecastData) {
    forecastList.textContent = "";

    forecastData.forEach((dayForecast) => {
      forecastList.append(createForecastItem(dayForecast))
    })
  }

  return { update }
})();

pubsub.subscribe('daily-forecast data passed', domDailyForecast.update)