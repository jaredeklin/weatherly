import React from 'react';
import '../Styles/SevenHour';
// import  data from '../data/mock-data.js';
import Card from './Card';

const SevenHour = (props) => {
  console.log(props)
  
  return (
    <article className="seven-hour-forecast">
      {
        props.sevenHourProps.map((day, index) => {
          while (index < 7) {
          return (
            <div className="extended-forcast" key={index}>
              <Card day={day}  />
            </div>
          )}
        })
      }  
    </article>
  )
}

export default SevenHour;