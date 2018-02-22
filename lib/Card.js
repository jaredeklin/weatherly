import React from 'react';

const Card = (props) => {
  if(props.tenDay) {
    return (
    <div className="forcast" key={index}>
      {day.weekday}
      <span>{day.month} {day.day}</span>
      <img className="small-icon" src="../images/snow-icon.svg" /> 
      <span ></span> 
      <span>{day.high}°</span>
      {day.low}°
    </div>
    )
  } else {
    console.log('Seven hour default')
  }
  
}
    
      
export default Card;
