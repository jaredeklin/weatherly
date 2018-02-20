import React from 'react'
import '../Styles/TenDay'

const TenDay = () => {
  return (
    <article className="seven-day-forecast">
      <div className="extended-forcast">
        Mon <span>Feb 19</span> <span ><img className="small-icon" src="../images/snow-icon.svg" /></span> <span>36°</span> 18°
      </div>
    </article>
  )
}

export default TenDay