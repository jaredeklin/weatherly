import React from 'react';
import Search from './Search';
import '../Styles/Welcome.css';

const Welcome = ({getLocation}) => {
  return (
    <div className="welcome-screen">
      <div className="welcome-block">
      <h1>Welcome to Weatherly</h1>
      <div className="welcome-icons">
        <img className="welcome-icon" src="../images/snow-icon.svg" />
        <img className="welcome-icon" src="../images/rainy-icon.svg" />
        <img className="welcome-icon" src="../images/sunny-icon.svg" />
      </div>
      <Search getLocation={getLocation} className="welcome-search"/>
      </div>
    </div>
  );
};

export default Welcome;