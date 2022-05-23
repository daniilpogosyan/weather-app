/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getTimezoneOffsetInMilliseconds)\n/* harmony export */ });\n/**\n * Google Chrome as of 67.0.3396.87 introduced timezones with offset that includes seconds.\n * They usually appear for dates that denote time before the timezones were introduced\n * (e.g. for 'Europe/Prague' timezone the offset is GMT+00:57:44 before 1 October 1891\n * and GMT+01:00:00 after that date)\n *\n * Date#getTimezoneOffset returns the offset in minutes and would return 57 for the example above,\n * which would lead to incorrect calculations.\n *\n * This function returns the timezone offset in milliseconds that takes seconds in account.\n */\nfunction getTimezoneOffsetInMilliseconds(date) {\n  var utcDate = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()));\n  utcDate.setUTCFullYear(date.getFullYear());\n  return date.getTime() - utcDate.getTime();\n}\n\n//# sourceURL=webpack://weather-app/./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ requiredArgs)\n/* harmony export */ });\nfunction requiredArgs(required, args) {\n  if (args.length < required) {\n    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');\n  }\n}\n\n//# sourceURL=webpack://weather-app/./node_modules/date-fns/esm/_lib/requiredArgs/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/constants/index.js":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/esm/constants/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"daysInWeek\": () => (/* binding */ daysInWeek),\n/* harmony export */   \"maxTime\": () => (/* binding */ maxTime),\n/* harmony export */   \"millisecondsInHour\": () => (/* binding */ millisecondsInHour),\n/* harmony export */   \"millisecondsInMinute\": () => (/* binding */ millisecondsInMinute),\n/* harmony export */   \"millisecondsInSecond\": () => (/* binding */ millisecondsInSecond),\n/* harmony export */   \"minTime\": () => (/* binding */ minTime),\n/* harmony export */   \"minutesInHour\": () => (/* binding */ minutesInHour),\n/* harmony export */   \"monthsInQuarter\": () => (/* binding */ monthsInQuarter),\n/* harmony export */   \"monthsInYear\": () => (/* binding */ monthsInYear),\n/* harmony export */   \"quartersInYear\": () => (/* binding */ quartersInYear),\n/* harmony export */   \"secondsInHour\": () => (/* binding */ secondsInHour),\n/* harmony export */   \"secondsInMinute\": () => (/* binding */ secondsInMinute)\n/* harmony export */ });\n/**\n * Days in 1 week.\n *\n * @name daysInWeek\n * @constant\n * @type {number}\n * @default\n */\nvar daysInWeek = 7;\n/**\n * Maximum allowed time.\n *\n * @name maxTime\n * @constant\n * @type {number}\n * @default\n */\n\nvar maxTime = Math.pow(10, 8) * 24 * 60 * 60 * 1000;\n/**\n * Milliseconds in 1 minute\n *\n * @name millisecondsInMinute\n * @constant\n * @type {number}\n * @default\n */\n\nvar millisecondsInMinute = 60000;\n/**\n * Milliseconds in 1 hour\n *\n * @name millisecondsInHour\n * @constant\n * @type {number}\n * @default\n */\n\nvar millisecondsInHour = 3600000;\n/**\n * Milliseconds in 1 second\n *\n * @name millisecondsInSecond\n * @constant\n * @type {number}\n * @default\n */\n\nvar millisecondsInSecond = 1000;\n/**\n * Minimum allowed time.\n *\n * @name minTime\n * @constant\n * @type {number}\n * @default\n */\n\nvar minTime = -maxTime;\n/**\n * Minutes in 1 hour\n *\n * @name minutesInHour\n * @constant\n * @type {number}\n * @default\n */\n\nvar minutesInHour = 60;\n/**\n * Months in 1 quarter\n *\n * @name monthsInQuarter\n * @constant\n * @type {number}\n * @default\n */\n\nvar monthsInQuarter = 3;\n/**\n * Months in 1 year\n *\n * @name monthsInYear\n * @constant\n * @type {number}\n * @default\n */\n\nvar monthsInYear = 12;\n/**\n * Quarters in 1 year\n *\n * @name quartersInYear\n * @constant\n * @type {number}\n * @default\n */\n\nvar quartersInYear = 4;\n/**\n * Seconds in 1 hour\n *\n * @name secondsInHour\n * @constant\n * @type {number}\n * @default\n */\n\nvar secondsInHour = 3600;\n/**\n * Seconds in 1 minute\n *\n * @name secondsInMinute\n * @constant\n * @type {number}\n * @default\n */\n\nvar secondsInMinute = 60;\n\n//# sourceURL=webpack://weather-app/./node_modules/date-fns/esm/constants/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/differenceInCalendarDays/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/date-fns/esm/differenceInCalendarDays/index.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ differenceInCalendarDays)\n/* harmony export */ });\n/* harmony import */ var _lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/getTimezoneOffsetInMilliseconds/index.js */ \"./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js\");\n/* harmony import */ var _startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../startOfDay/index.js */ \"./node_modules/date-fns/esm/startOfDay/index.js\");\n/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ \"./node_modules/date-fns/esm/_lib/requiredArgs/index.js\");\n\n\n\nvar MILLISECONDS_IN_DAY = 86400000;\n/**\n * @name differenceInCalendarDays\n * @category Day Helpers\n * @summary Get the number of calendar days between the given dates.\n *\n * @description\n * Get the number of calendar days between the given dates. This means that the times are removed\n * from the dates and then the difference in days is calculated.\n *\n * ### v2.0.0 breaking changes:\n *\n * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).\n *\n * @param {Date|Number} dateLeft - the later date\n * @param {Date|Number} dateRight - the earlier date\n * @returns {Number} the number of calendar days\n * @throws {TypeError} 2 arguments required\n *\n * @example\n * // How many calendar days are between\n * // 2 July 2011 23:00:00 and 2 July 2012 00:00:00?\n * const result = differenceInCalendarDays(\n *   new Date(2012, 6, 2, 0, 0),\n *   new Date(2011, 6, 2, 23, 0)\n * )\n * //=> 366\n * // How many calendar days are between\n * // 2 July 2011 23:59:00 and 3 July 2011 00:01:00?\n * const result = differenceInCalendarDays(\n *   new Date(2011, 6, 3, 0, 1),\n *   new Date(2011, 6, 2, 23, 59)\n * )\n * //=> 1\n */\n\nfunction differenceInCalendarDays(dirtyDateLeft, dirtyDateRight) {\n  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(2, arguments);\n  var startOfDayLeft = (0,_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(dirtyDateLeft);\n  var startOfDayRight = (0,_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(dirtyDateRight);\n  var timestampLeft = startOfDayLeft.getTime() - (0,_lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(startOfDayLeft);\n  var timestampRight = startOfDayRight.getTime() - (0,_lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(startOfDayRight); // Round the number of days to the nearest integer\n  // because the number of milliseconds in a day is not constant\n  // (e.g. it's different in the day of the daylight saving time clock shift)\n\n  return Math.round((timestampLeft - timestampRight) / MILLISECONDS_IN_DAY);\n}\n\n//# sourceURL=webpack://weather-app/./node_modules/date-fns/esm/differenceInCalendarDays/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/secondsToMilliseconds/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/date-fns/esm/secondsToMilliseconds/index.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ secondsToMilliseconds)\n/* harmony export */ });\n/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ \"./node_modules/date-fns/esm/_lib/requiredArgs/index.js\");\n/* harmony import */ var _constants_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/index.js */ \"./node_modules/date-fns/esm/constants/index.js\");\n\n\n/**\n * @name secondsToMilliseconds\n * @category Conversion Helpers\n * @summary Convert seconds to milliseconds.\n *\n * @description\n * Convert a number of seconds to a full number of milliseconds.\n *\n * @param {number} seconds - number of seconds to be converted\n *\n * @returns {number} the number of seconds converted in milliseconds\n * @throws {TypeError} 1 argument required\n *\n * @example\n * // Convert 2 seconds into milliseconds\n * const result = secondsToMilliseconds(2)\n * //=> 2000\n */\n\nfunction secondsToMilliseconds(seconds) {\n  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(1, arguments);\n  return seconds * _constants_index_js__WEBPACK_IMPORTED_MODULE_1__.millisecondsInSecond;\n}\n\n//# sourceURL=webpack://weather-app/./node_modules/date-fns/esm/secondsToMilliseconds/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/startOfDay/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/startOfDay/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ startOfDay)\n/* harmony export */ });\n/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ \"./node_modules/date-fns/esm/toDate/index.js\");\n/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ \"./node_modules/date-fns/esm/_lib/requiredArgs/index.js\");\n\n\n/**\n * @name startOfDay\n * @category Day Helpers\n * @summary Return the start of a day for the given date.\n *\n * @description\n * Return the start of a day for the given date.\n * The result will be in the local timezone.\n *\n * ### v2.0.0 breaking changes:\n *\n * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).\n *\n * @param {Date|Number} date - the original date\n * @returns {Date} the start of a day\n * @throws {TypeError} 1 argument required\n *\n * @example\n * // The start of a day for 2 September 2014 11:55:00:\n * const result = startOfDay(new Date(2014, 8, 2, 11, 55, 0))\n * //=> Tue Sep 02 2014 00:00:00\n */\n\nfunction startOfDay(dirtyDate) {\n  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(1, arguments);\n  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(dirtyDate);\n  date.setHours(0, 0, 0, 0);\n  return date;\n}\n\n//# sourceURL=webpack://weather-app/./node_modules/date-fns/esm/startOfDay/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/toDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ toDate)\n/* harmony export */ });\n/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ \"./node_modules/date-fns/esm/_lib/requiredArgs/index.js\");\n\n/**\n * @name toDate\n * @category Common Helpers\n * @summary Convert the given argument to an instance of Date.\n *\n * @description\n * Convert the given argument to an instance of Date.\n *\n * If the argument is an instance of Date, the function returns its clone.\n *\n * If the argument is a number, it is treated as a timestamp.\n *\n * If the argument is none of the above, the function returns Invalid Date.\n *\n * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.\n *\n * @param {Date|Number} argument - the value to convert\n * @returns {Date} the parsed date in the local time zone\n * @throws {TypeError} 1 argument required\n *\n * @example\n * // Clone the date:\n * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))\n * //=> Tue Feb 11 2014 11:30:30\n *\n * @example\n * // Convert the timestamp to date:\n * const result = toDate(1392098430000)\n * //=> Tue Feb 11 2014 11:30:30\n */\n\nfunction toDate(argument) {\n  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(1, arguments);\n  var argStr = Object.prototype.toString.call(argument); // Clone the date\n\n  if (argument instanceof Date || typeof argument === 'object' && argStr === '[object Date]') {\n    // Prevent the date to lose the milliseconds when passed to new Date() in IE10\n    return new Date(argument.getTime());\n  } else if (typeof argument === 'number' || argStr === '[object Number]') {\n    return new Date(argument);\n  } else {\n    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {\n      // eslint-disable-next-line no-console\n      console.warn(\"Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule\"); // eslint-disable-next-line no-console\n\n      console.warn(new Error().stack);\n    }\n\n    return new Date(NaN);\n  }\n}\n\n//# sourceURL=webpack://weather-app/./node_modules/date-fns/esm/toDate/index.js?");

/***/ }),

/***/ "./src/dataManipulator.js":
/*!********************************!*\
  !*** ./src/dataManipulator.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ \"./node_modules/date-fns/esm/secondsToMilliseconds/index.js\");\n/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ \"./node_modules/date-fns/esm/differenceInCalendarDays/index.js\");\n/* harmony import */ var _pubsub__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pubsub */ \"./src/pubsub.js\");\n\n\n\n// get data from openweathermap.org\nasync function getWeatherDataIn(location) {\n  const apiId = \"0481317857c9b5d4697cb1dda05a4fd6\";\n  const response = await fetch(\n    `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${apiId}`\n  );\n  const jsonData = await response.json();\n\n  return jsonData;\n}\n\n// group list in a 2d-array:\n// groupedData[dayIndex][dtIndex]\nfunction groupByDay(data) {\n  const groupedData = [];\n\n  let dayData = [];\n  let currentDay = new Date(date_fns__WEBPACK_IMPORTED_MODULE_1__[\"default\"](data.list[0].dt));\n\n  for (let dtData of data.list) {\n    let dtDate = new Date(date_fns__WEBPACK_IMPORTED_MODULE_1__[\"default\"](dtData.dt));\n    \n    // if dtData is from the next day\n    // then save current day data and look for data of the next day\n    if (date_fns__WEBPACK_IMPORTED_MODULE_2__[\"default\"](currentDay, dtDate) !== 0) {\n      groupedData.push(dayData);\n\n      dayData = [];\n      currentDay = dtDate;\n    }\n     dayData.push(dtData);\n  }\n\n  // push the last day separately as it never gets in the if-block\n  groupedData.push(dayData);\n\n  return groupedData\n}\n\n\n// process data leaving only desired properties\nfunction getDayForecast(dayData) {\n  const date = new Date(date_fns__WEBPACK_IMPORTED_MODULE_1__[\"default\"](dayData[0].dt));\n\n  const minTemp = Math.min(\n    ...dayData.map((data) => data.main.temp_min)\n  );\n\n  const maxTemp = Math.max(\n    ...dayData.map((data) => data.main.temp_max)\n  );\n\n  const maxWindSpeed = Math.max(\n    ...dayData.map((data) => data.wind.speed)\n  );\n\n  return {\n    date,\n    minTemp,\n    maxTemp,\n    maxWindSpeed\n  }\n}\n\nfunction getCurrentWeather(currentData) {\n  return {\n    temp: currentData.main.temp,\n    windSpeed: currentData.wind.speed,\n    humidity: currentData.main.humidity,\n    pressure: currentData.main.pressure,\n    visibility: currentData.visibility\n  }\n}\n\nfunction getCurrentLocation(currentData) {\n  return {\n    city: currentData.city.name,\n    country: currentData.city.country\n  }\n}\n\n\n_pubsub__WEBPACK_IMPORTED_MODULE_0__[\"default\"].subscribe('weather forecast requested', function(location) {\n  getWeatherDataIn(location)\n  .then((data) => {\n    const currentWeather = getCurrentWeather(data.list[0])\n\n    const currentLocation = getCurrentLocation(data)\n\n    const groupedData = groupByDay(data);\n    const dailyForecast = groupedData.map(getDayForecast);\n\n    _pubsub__WEBPACK_IMPORTED_MODULE_0__[\"default\"].publish('current-weather data passed', currentWeather)\n    _pubsub__WEBPACK_IMPORTED_MODULE_0__[\"default\"].publish('current-location data passed', currentLocation)\n    _pubsub__WEBPACK_IMPORTED_MODULE_0__[\"default\"].publish('daily-forecast data passed', dailyForecast)\n\n    console.log(dailyForecast)\n    console.log(currentWeather)\n  })\n  .catch(alert)\n})\n\n\n\n\n//# sourceURL=webpack://weather-app/./src/dataManipulator.js?");

/***/ }),

/***/ "./src/domManipulator.js":
/*!*******************************!*\
  !*** ./src/domManipulator.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pubsub__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pubsub */ \"./src/pubsub.js\");\n\n\nconst search = document.getElementById('search-location');\n\nsearch.addEventListener('change', (e) => {\n  _pubsub__WEBPACK_IMPORTED_MODULE_0__[\"default\"].publish('weather forecast requested', search.value)\n})\n\n\nconst domLocation = (() => {\n  const location = document.querySelector('.current-location');\n\n  function update (locationData) {\n    location.textContent = `${locationData.city}, ${locationData.country}`\n  }\n  return { update }\n})();\n\n_pubsub__WEBPACK_IMPORTED_MODULE_0__[\"default\"].subscribe('current-location data passed', domLocation.update)\n\n\nconst domCurrentWeather = (() => {\n  const currentWeather = {\n    temp: document.querySelector('.current-weather .temperature.value'),\n    windSpeed: document.querySelector('.current-weather .wind-speed.value'),\n    humidity: document.querySelector('.current-weather .humidity.value'),\n    pressure: document.querySelector('.current-weather .pressure.value'),\n    visibility: document.querySelector('.current-weather .visibility.value'),\n  };\n  \n  function update(weatherData) {\n    for (let field in currentWeather) {\n      console.log(field,currentWeather[field], weatherData[field])\n      currentWeather[field].textContent = weatherData[field]\n    }\n  }\n\n  return { update }\n})();\n\n_pubsub__WEBPACK_IMPORTED_MODULE_0__[\"default\"].subscribe('current-weather data passed', domCurrentWeather.update)\n\n\nconst domDailyForecast = (() => {\n  const forecastList = document.querySelector('.daily-forecast');\n\n  function createForecastItem(dayForecastData) {\n    const wrapper = document.createElement('li');\n    wrapper.classList.add('daily-forecast__item');\n\n    const weekDay = document.createElement('p');\n    weekDay.classList.add('weekday');\n\n    const date = document.createElement('p');\n    date.classList.add('date');\n    date.textContent = dayForecastData.date;\n\n    const dayTemp = document.createElement('p');\n    dayTemp.classList.add('day-temperature');\n\n    const daytimeTempVal = document.createElement('span');\n    daytimeTempVal.classList.add('daytime', 'temperature', 'value');\n    daytimeTempVal.textContent = dayForecastData.maxTemp;\n    \n    const daytimeTempUnit = document.createElement('span');\n    daytimeTempUnit.classList.add('daytime', 'temperature', 'unit');\n    daytimeTempUnit.textContent = \" °C\";\n\n    const slash = document.createTextNode(\" / \");\n\n    const nighttimeTempVal = document.createElement('span');\n    date.classList.add('nighttime', 'temperature', 'value');\n    nighttimeTempVal.textContent = dayForecastData.minTemp;\n    \n    const nighttimeTempUnit = document.createElement('span');\n    date.classList.add('nighttime', 'temperature', 'unit');\n    nighttimeTempUnit.textContent = \" °C\";\n\n    dayTemp.append(\n      daytimeTempVal,\n      daytimeTempUnit,\n      slash,\n      nighttimeTempVal,\n      nighttimeTempUnit\n    );\n\n    const windSpeed = document.createElement('p');\n    windSpeed.classList.add('wind-speed');\n\n    const windSpeedVal = document.createElement('span');\n    windSpeedVal.classList.add('wind-speed', 'value');\n    windSpeedVal.textContent = dayForecastData.maxWindSpeed;\n\n    const windSpeedUnit = document.createElement('span');\n    windSpeedUnit.classList.add('wind-speed', 'unit');\n    windSpeedUnit.textContent = \" m/s\";\n\n    windSpeed.append(windSpeedVal, windSpeedUnit)\n\n    wrapper.append(\n      weekDay,\n      date,\n      dayTemp,\n      windSpeed\n    );\n\n    return wrapper\n  }\n\n\n  function update (forecastData) {\n    forecastList.textContent = \"\";\n\n    forecastData.forEach((dayForecast) => {\n      forecastList.append(createForecastItem(dayForecast))\n    })\n  }\n\n  return { update }\n})();\n\n_pubsub__WEBPACK_IMPORTED_MODULE_0__[\"default\"].subscribe('daily-forecast data passed', domDailyForecast.update)\n\n//# sourceURL=webpack://weather-app/./src/domManipulator.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dataManipulator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dataManipulator */ \"./src/dataManipulator.js\");\n/* harmony import */ var _domManipulator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domManipulator */ \"./src/domManipulator.js\");\n\n\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

/***/ }),

/***/ "./src/pubsub.js":
/*!***********************!*\
  !*** ./src/pubsub.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst pubsub = (() => {\n  // is contain arrays of handlers of each event\n  // events[\"event name\"][handlerIndex]\n  const events = {};\n\n  function publish (eventName, args) {\n    if (!events.hasOwnProperty(eventName)) {\n      events[eventName] = []\n    }\n    events[eventName].forEach((handler) => handler(args))\n  }\n\n  function subscribe (eventName, handler) {\n    if (\n        !events.hasOwnProperty(eventName)\n        || !(handler instanceof Function) \n    ) {\n      events[eventName] = []\n    }\n    events[eventName].push(handler);\n  }\n\n  function unsubscribe (eventName, handler) {\n    if (!events.hasOwnProperty(eventName)) {\n      return\n    }\n    \n    const unsubscribedIndex = events[eventName].indexOf(handler);\n    if (unsubscribedIndex > -1) {\n      events[eventName].splice(unsubscribedIndex, 1);\n    }\n  }\n\n  return { publish, subscribe, unsubscribe }\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pubsub);\n\n//# sourceURL=webpack://weather-app/./src/pubsub.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;