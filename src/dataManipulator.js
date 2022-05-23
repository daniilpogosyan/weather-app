import * as datefns from 'date-fns'
import pubsub from './pubsub'

// get data from openweathermap.org
async function getWeatherDataIn(location) {
  const apiId = "0481317857c9b5d4697cb1dda05a4fd6";
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${location}&units=metric&appid=${apiId}`
  );
  const jsonData = await response.json();

  return jsonData;
}

// group list in a 2d-array:
// groupedData[dayIndex][dtIndex]
function groupByDay(data) {
  const groupedData = [];

  let dayData = [];
  let currentDay = new Date(datefns.secondsToMilliseconds(data.list[0].dt));

  for (let dtData of data.list) {
    let dtDate = new Date(datefns.secondsToMilliseconds(dtData.dt));
    
    // if dtData is from the next day
    // then save current day data and look for data of the next day
    if (datefns.differenceInCalendarDays(currentDay, dtDate) !== 0) {
      groupedData.push(dayData);

      dayData = [];
      currentDay = dtDate;
    }
     dayData.push(dtData);
  }

  // push the last day separately as it never gets in the if-block
  groupedData.push(dayData);

  return groupedData
}


// round number to n decimal places
// if n is negative, then num will be rounded to tens, hundreds etc
function roundTo(num, n = 0) {
  const rounder = Math.pow(10,n);
  return Math.round(num * rounder) / rounder;
}


// process data leaving only desired properties
function getDayForecast(dayData) {
  const dateObj = new Date(datefns.secondsToMilliseconds(dayData[0].dt));

  const weekday = datefns.format(dateObj, 'EEEE');
  const date = datefns.format(dateObj, 'dd/LL')

  const minTemp = Math.round(
      Math.min(...dayData.map((data) => data.main.temp_min)
  ));

  const maxTemp = Math.round(
      Math.max(...dayData.map((data) => data.main.temp_max)
  ));

  const maxWindSpeed = roundTo(
    Math.max(...dayData.map((data) => data.wind.speed)), 1
  );

  return {
    weekday,
    date,
    minTemp,
    maxTemp,
    maxWindSpeed
  }
}

function getCurrentWeather(currentData) {
  return {
    temp: roundTo(currentData.main.temp, 0),
    windSpeed: roundTo(currentData.wind.speed, 1),
    humidity: roundTo(currentData.main.humidity, 1),
    pressure: roundTo(currentData.main.grnd_level, 1),
    visibility: roundTo(currentData.visibility, 1)
  }
}

function getCurrentLocation(currentData) {
  return {
    city: currentData.city.name,
    country: currentData.city.country
  }
}


pubsub.subscribe('weather forecast requested', function(location) {
  getWeatherDataIn(location)
  .then((data) => {
    const currentWeather = getCurrentWeather(data.list[0])

    const currentLocation = getCurrentLocation(data)

    const groupedData = groupByDay(data);
    const dailyForecast = groupedData.map(getDayForecast);

    pubsub.publish('current-weather data passed', currentWeather)
    pubsub.publish('current-location data passed', currentLocation)
    pubsub.publish('daily-forecast data passed', dailyForecast)

    console.log(dailyForecast)
    console.log(currentWeather)
  })
  .catch(alert)
})


