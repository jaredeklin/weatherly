import React from 'react';
import '../Styles/SevenHour';
import Card from './Card';

const SevenHour = (props) => {
  return (
    <article className="seven-hour-forecast">
      {
        props.sevenHourProps.map((day, index) => {
          while (index < 7) {
            return (
              <div className="extended-forecast" key={index}>
                <Card day={day}  />
              </div>
            );
          }
        })
      }  
    </article>
  );
};

export default SevenHour;