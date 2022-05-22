import * as datefns from 'date-fns'

// get data from openweathermap.org
async function getWeatherDataIn(location) {
  const apiId = "0481317857c9b5d4697cb1dda05a4fd6";
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${apiId}`
  );
  const jsonData = await response.json();

  return jsonData;
}