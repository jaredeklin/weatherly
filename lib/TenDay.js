import React from 'react';
import '../Styles/TenDay';
import Card from './Card';

const TenDay = (props) => {
  return (
    <article className="ten-day-forecast">
      {
        props.tenDayProps.map((day, index) => {
          return (
            <div className="extended-forecast" key={index}>
              <Card day={day}  />
            </div>
          );
        })
      }  
    </article>
  );
};

export default TenDay;