import React from 'react';
import '../Styles/card.css'

const Card = (props) => {
    console.log(props)
    if(props.day.hour) {
      return (
      <div className="forcast" >
        {props.day.hour} 
        <span>
        <span>
        {props.day.condition}
        </span>
        <img className="small-icon" src={props.day.conditionIcon} /> 
        </span>
        
        {props.day.currentTemp}°
      </div>
      )
    } else {
      return (
      <div className="forcast" >
        {props.day.weekday}
        <span>{props.day.month} {props.day.day}</span>
        <img className="small-icon" src="../images/snow-icon.svg" /> 
        <span ></span> 
        <span>{props.day.high}°</span>
        {props.day.low}°
      </div>
      )
    }  
}
          
export default Card;
