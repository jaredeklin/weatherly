import React from 'react';
import Search from './Search';
import '../Styles/Welcome.css';

const Welcome = ({getLocation}) => {
  return (
    <div className="welcome-screen">
      <div className="welcome-block">
      <h1>Welcome to weatherly</h1>
      <Search getLocation={getLocation} className="welcome-search"/>
      </div>
    </div>
  )
}

export default Welcome;