
import React, { Component } from 'react';
import Search from './Search';
import CurrentWeather from './CurrentWeather';
import Button from './Button';
import TenDay from './TenDay';
import CurrentWeatherProps from './getCurrentWeatherData';
import data from '../data/mock-data.js';
import '../Styles/App.css';

// const tenDayProps = data.forecast.simpleforecast.forecastday.reduce((array, item) => {
//   // console.log(data.forecast.simpleforecast.forecastday[item])
//   // console.log(item.high.fahrenheit)
//   const dayObj = {
//     weekday: item.date.weekday_short,
//     month: item.date.monthname_short,
//     day: item.date.day,
//     high: item.high.fahrenheit,
//     low: item.low.fahrenheit
//   }
//   return [...array, dayObj]
// }, [])


const App = () => {
  // console.log(tenDayProps)
  // console.log(CurrentWeatherProps)
  return (
    <div className="App">
      <div className="left-section">
        <Search />
      </div>
      
      <div className="right-section">
        <CurrentWeather CurrentWeatherProps={CurrentWeatherProps} />
        <Button />

          <TenDay/>
        
      </div>
   
    </div>
  )
}



export default App;
