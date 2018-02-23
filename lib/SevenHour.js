import React from 'react';
import PropTypes from 'prop-types';
import '../Styles/SevenHour';
import Card from './Card';

const SevenHour = (props) => {
  return (
    <article className="seven-hour-forecast">
      {
        props.sevenHourProps.map((day, index) => {
          while (index < 7) {
            return (
              <div className="extended-forcast" key={index}>
                <Card day={day}  />
              </div>
            );
          }
        })
      }  
    </article>
  );
};

// App.propTypes = {
//   sevenHourProps: PropTypes.string
// };

export default SevenHour;