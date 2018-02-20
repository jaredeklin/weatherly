
import React, { Component } from 'react';
import Search from './Search';
import CurrentWeather from './CurrentWeather';
import Button from './Button';
import TenDay from './TenDay';
import CurrentWeatherProps from './GetWeatherData'
import '../Styles/App.css';


const App = () => {
  return (
    <div className="App">
      <div className="left-section">
        <Search />
      </div>
      
      <div className="right-section">
        <CurrentWeather CurrentWeatherProps={CurrentWeatherProps} />
        <Button />
        <TenDay />
        <TenDay />
        <TenDay />
        <TenDay />
        <TenDay />
        <TenDay />
      </div>
   
    </div>
  )
}



export default App;
