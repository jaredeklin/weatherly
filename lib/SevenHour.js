import React from 'react';
import PropTypes from 'prop-types';
import '../Styles/SevenHour.css';
import Card from './Card';

const SevenHour = (props) => {
  console.log(props)
  return (
    <article >
      {
        props.sevenHourProps.map((day, index) => {
          while (index < 7) {
            console.log(day)
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

SevenHour.propTypes = {
  sevenHourProps: PropTypes.string
};

export default SevenHour;