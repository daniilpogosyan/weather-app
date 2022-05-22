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


// process data leaving only desired properties
function getDayForecast(dayData) {
  const date = new Date(datefns.secondsToMilliseconds(dayData[0].dt));

  const minTemp = Math.min(
    ...dayData.map((data) => data.main.temp_min)
  );

  const maxTemp = Math.max(
    ...dayData.map((data) => data.main.temp_max)
  );

  const maxWindSpeed = Math.max(
    ...dayData.map((data) => data.wind.speed)
  );

  return {
    date,
    minTemp,
    maxTemp,
    maxWindSpeed
  }
}

getWeatherDataIn("tashkent")
.then((data) => {
  const groupedData = groupByDay(data);
  const dailyForecast = groupedData.map(getDayForecast);
  console.log(dailyForecast)
})