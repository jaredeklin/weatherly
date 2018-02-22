import React from 'react';
import '../Styles/TenDay';
// import  data from '../data/mock-data.js';



// const tenDayProps = data.forecast.simpleforecast.forecastday.reduce((array, item) => {

//   const dayObj = {
//     weekday: item.date.weekday_short,
//     month: item.date.monthname_short,
//     day: item.date.day,
//     high: item.high.fahrenheit,
//     low: item.low.fahrenheit
//   }
//   return [...array, dayObj]
// }, [])


const TenDay = () => {

  return (
    <article className="seven-day-forecast">
      {
        tenDayProps.map((day, index) => {
          return (
            <div className="extended-forcast" key={index}>
              <Card day={day}  />
            </div>
          )
        })
      }  
    </article>
  )
}

export default TenDay