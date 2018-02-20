import React from 'react';
import '../Styles/TenDay';
import  data from '../data/mock-data.js';


const tenDayProps = data.forecast.simpleforecast.forecastday.reduce((array, item) => {
  // console.log(data.forecast.simpleforecast.forecastday[item])
  // console.log(item.high.fahrenheit)
  const dayObj = {
    weekday: item.date.weekday_short,
    month: item.date.monthname_short,
    day: item.date.day,
    high: item.high.fahrenheit,
    low: item.low.fahrenheit
  }
  return [...array, dayObj]
}, [])

// <img className="small-icon" src="../images/snow-icon.svg" />

const TenDay = () => {

  // const mappy = tenDayProps.map( item => {
  //   return ( {item.weekday}<span>{item.month} {item.day}</span> <span ><img className="small-icon" src='../images/snow-icon.svg' /></span> <span>36°</span> 18°)
  // })

  // console.log(tenDayProps)
  return (
    <article className="seven-day-forecast">
      
      {
        tenDayProps.map((day, index) => {
          return (
          <div className="extended-forcast">
            {day.weekday}<span>{day.month} {day.day}</span><img className="small-icon" src="../images/snow-icon.svg" /> <span ></span> <span>{day.high}°</span>{day.low}°
          </div>
          )
        })
      }
      
    </article>
  )
}

export default TenDay