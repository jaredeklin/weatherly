import React from 'react';
import PropTypes from 'prop-types';
import '../Styles/Errors.css';


const Errors = (props) => {
  if (props.errorPresent) {
    return (
       <div className="error" >Enter City, St or zipcode.</div>    
    ); 
  } else {
    return (
      <div></div>
    )
  } 
};

export default Errors;