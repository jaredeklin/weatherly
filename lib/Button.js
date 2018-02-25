import React from 'react';
import PropTypes from 'prop-types';
import '../Styles/Button.css';



const Button = ({label, toggleWeatherForecast}) => {

  // if(label === 'Click for 7-Hour Forecast') {
  //   label = 'Click for 10 Day Forecast'
  // }
  
  return(
    <button onClick={() => toggleWeatherForecast()}>{label}</button>
  )
};

export default Button;