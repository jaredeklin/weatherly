import React from 'react';
import PropTypes from 'prop-types';
import '../Styles/Button.css';



const Button = ({label, toggleWeatherForecast}) => {
  
  return(
    <button onClick={() => toggleWeatherForecast()}>{label}</button>
  )
};

export default Button;