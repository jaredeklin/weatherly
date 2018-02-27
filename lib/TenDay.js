import React from 'react';
import PropTypes from 'prop-types';
import '../Styles/TenDay.css';
import Card from './Card';

const TenDay = (props) => {
  return (
    <article>
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

TenDay.propTypes = {
  tenDayProps: PropTypes.object 
};

export default TenDay;