import React from 'react';
import PropTypes from 'prop-types';
import '../Styles/SevenHour.css';
import Card from './Card';

const SevenHour = (props) => {
  return (
    <article >
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


// SevenHour.propTypes = {
//   sevenHourProps: PropTypes.string
// };


export default SevenHour;