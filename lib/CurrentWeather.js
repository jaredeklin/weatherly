import React from 'react';
import '../Styles/CurrentWeather.css'
import { Data } from '../data/mock-data.js'


const CurrentWeather = () => {
  console.log(Data)
    return (
      <article className="current-weather">
        <div className="top-section">

          <div className="location">Denver, CO</div>
          <div className="date">Feb 18</div>
        </div>
        <div className="middle-section">
          <div className="current-temp">57°</div>
          <div className="current-weather-icon"><img className="large-icon" src="../images/rainy-icon.svg" />
          </div>
        </div>
        <div className="lower-section">
          <div className="high-low-temps">68° / 28°</div>
          <div className="written-current-weather">Rain</div>
        </div>
      </article>
      )
}

export default CurrentWeather
