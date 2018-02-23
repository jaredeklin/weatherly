function getSevenHourData(weatherData) {
  let sevenHourProps;

  sevenHourProps = weatherData.hourly_forecast.reduce((array, item) => {
    let hourObj;
    
    hourObj = {
      hour: item.FCTTIME.civil,
      conditionIcon: item.icon_url,
      currentTemp: item.temp.english,
      condition: item.condition
    };
    return [...array, hourObj];
  }, []);
  return sevenHourProps;
}

function getTenDayData(weatherData) {
  let tenDayProps;

  tenDayProps = weatherData.forecast.simpleforecast.forecastday.reduce((array, item) => {
    let dayObj;

    dayObj = {

      weekday: item.date.weekday_short,
      month: item.date.monthname_short,
      day: item.date.day,
      icon: item.icon_url,
      high: item.high.fahrenheit,
      low: item.low.fahrenheit
    };
    return [...array, dayObj];
  }, []);
  tenDayProps.shift();  
  return tenDayProps;
}



function getCurrentWeatherData(weatherData) {
  let currentWeather = {};

  currentWeather = {
    location: weatherData.current_observation.display_location.full,
    currentCondition: weatherData.current_observation.weather,
    month: weatherData.forecast.simpleforecast.forecastday[0].date.monthname_short,
    day: weatherData.forecast.simpleforecast.forecastday[0].date.day,
    currentTemp: weatherData.current_observation.temp_f,
    expectedHigh: weatherData.forecast.simpleforecast.forecastday[0].high.fahrenheit,
    expectedLow: weatherData.forecast.simpleforecast.forecastday[0].low.fahrenheit,
    summary: weatherData.forecast.txt_forecast.forecastday[0].fcttext 
  };
  return currentWeather;
}

export { getSevenHourData, getTenDayData, getCurrentWeatherData }; 