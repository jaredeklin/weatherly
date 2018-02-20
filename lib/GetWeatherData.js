import React from 'react';
import  data from '../data/mock-data.js';

const CurrrentWeatherProps = {
  location: data.current_observation.display_location.full,
  currentCondition: data.current_observation.weather,
  date: data.current_observation.local_time_rfc822,
  currentTemp: data.current_observation.temp_f,
  expectedHigh: data.forecast.simpleforecast.forecastday[0].high.fahrenheit,
  expectedLow: data.forecast.simpleforecast.forecastday[0].low.fahrenheit,
  summary: data.forecast.txt_forecast.forecastday[0].fcttext  
}



export default CurrrentWeatherProps