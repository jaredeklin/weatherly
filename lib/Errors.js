import React from 'react';
import PropTypes from 'prop-types';
import '../Styles/Errors.css';


const Errors = (props) => {
  if (props.errorPresent) {
    return (
       <div className="error" >Please enter a valid City and State or Zip Code.</div>    
    ); 
  } else {
    return (
      <div></div>
    )
  } 
};

export default Errors;