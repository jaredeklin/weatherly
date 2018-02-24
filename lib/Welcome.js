import React from 'react'
// import App from './App'
import Search from './Search'

const Welcome = ({getLocation}) => {
  return (
    <div className="welcome-screen">
    <p>Welcome to weatherly</p>
    <Search getLocation={getLocation} />
    </div>
  )
}

export default Welcome;