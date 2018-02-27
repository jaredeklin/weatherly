import React from 'react';
import PropTypes from 'prop-types';
import '../Styles/CurrentWeather.css';

const CurrentWeather = (props) => {

  const { location, currentCondition, month, day, 
    currentTemp, expectedHigh, expectedLow, summary, 
    icon} = props.CurrentWeatherProps;

  return (
    <article className="current-weather">
      <div className="location">{location}</div>
      <div className="current-date">{month} {day}</div>
      <div className="current-temp">{currentTemp}°</div>
      <div  className="current-weather-icon">
        <img className="large-icon" src={icon} />
      </div>
      <div className="high-low-temps">{expectedHigh}° / {expectedLow}°</div>
      <div className="written-current-weather">{currentCondition}</div>
      <p className="summary-text">{summary}</p>
    </article>
  );
};

CurrentWeather.propTypes = {
  CurrentWeatherProps: PropTypes.object 
};

export default CurrentWeather;
