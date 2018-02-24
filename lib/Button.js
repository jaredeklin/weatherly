import React from 'react';
import PropTypes from 'prop-types';
import '../Styles/Button.css';
import App from './App'


const Button = ({label, toggleWeatherForecast}) => {
  
  return(
    <button onClick={() => toggleWeatherForecast()}>{label}</button>
  )
};

export default Button;