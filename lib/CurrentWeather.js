import React from 'react';
import '../Styles/CurrentWeather.css'
// import  data from '../data/mock-data.js'


const CurrentWeather = (props) => {
  console.log(props)

  const {location, currentCondition, date, currentTemp, expectedHigh, expectedLow, summary} = props.CurrentWeatherProps

  return (
    <article className="current-weather">
      <div className="top-section">
        <div className="location">{location}</div>
        <div className="date">Feb 18</div>
      </div>
      <div className="middle-section">
        <div className="current-temp">{currentTemp}°</div>
        <div className="current-weather-icon"><img className="large-icon" src="../images/snow-icon.svg" />
      </div>
      </div>
      <div className="lower-section">
        <div className="high-low-temps">{expectedHigh}° / {expectedLow}°</div>
        <div className="written-current-weather">{currentCondition}</div>
      </div>
      <p className="summary-text">{summary}</p>
    </article>
  )
}

export default CurrentWeather
