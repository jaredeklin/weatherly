export default class Card {
  constructor () {

    const TenDay = () => {

  return (
    <article className="seven-day-forecast">
      {
        tenDayProps.map((day, index) => {
          return (
            <div className="extended-forcast" key={index}>
              {day.weekday}
              <span>{day.month} {day.day}</span>
              <img className="small-icon" src="../images/snow-icon.svg" /> 
              <span ></span> 
              <span>{day.high}°</span>
              {day.low}°
            </div>
          )
        })
      }
      
    </article>
  )
}
      
  }
}