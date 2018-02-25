import React from 'react';
import '../Styles/CurrentWeather.css';

const CurrentWeather = (props) => {

  const {location, currentCondition, month, day, currentTemp, expectedHigh, expectedLow, summary, icon} = props.CurrentWeatherProps;

  return (
    <article className="current-weather">
      <div className="top-section">
        <div className="location">{location}</div>
        <div className="current-date">{month} {day}</div>
      </div>
      <div className="middle-section">
        <div className="current-temp">{currentTemp}°</div>
        <div className="current-weather-icon"><img className="large-icon" src={icon} />
      </div>
      </div>
      <div className="lower-section">
        <div className="high-low-temps">{expectedHigh}° / {expectedLow}°</div>
        <div className="written-current-weather">{currentCondition}</div>
      </div>
      <p className="summary-text">{summary}</p>
    </article>
  );
};

export default CurrentWeather;
