
import React, { Component } from 'react';
import Search from './Search'
import CurrentWeather from './CurrentWeather'
import Button from './Button'
import TenDay from './TenDay'
import '../Styles/App.css';


const App = () => {
  return (
    <div className="App">
       <div className="left-section">
        <Search />
       </div>
      
      <div className="right-section">
        <CurrentWeather />
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
