import React from 'react';
import '../Styles/card.css';

const Card = (props) => {
  if (props.day.hour) {
    return (
      <div className="forecast" >
        <span className="hour">{props.day.hour}</span> 
        <span className="condition">{props.day.condition}</span>
        <span><img className="small-icon" src={props.day.conditionIcon} /></span>
        <span className="temp">{props.day.currentTemp}°</span>
      </div>
    );
  } else {
    return (
      <div className="forecast" >
        <span className="weekday">{props.day.weekday}</span>
        <span className="date">{props.day.month} {props.day.day}</span>
        <span ><img className="small-icon" src="../images/snow-icon.svg" /></span> 
        <span className="high">{props.day.high}°</span>
        <span className="low">{props.day.low}°</span>
      </div>
    );
  }  
};
          
export default Card;
