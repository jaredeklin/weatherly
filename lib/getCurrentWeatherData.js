import React, { Component } from 'react';
// import  data from '../data/mock-data.js';

class FetchData extends Component {
  constructor(){
    super();
    this.state = {
      data: '',
      
    }
  }

  getData() {
    fetch("http://api.wunderground.com/api/112de9b93dfefe1f/conditions/forecast10day/hourly/q/CO/Denver.json")
      .then(datas => datas.json())
      .then(datas => this.setState({data: datas}, () => console.log('state', this.state)))
      .catch(err => alert("Wrong!!!!!!"))
  }

  componentWillMount() {

    this.getData()
    
  }
  render() {

    return (
      <div>{this.data}</div>
    )
  }
}



// const CurrrentWeatherProps = {
//   location: data.current_observation.display_location.full,
//   currentCondition: data.current_observation.weather,
//   date: data.current_observation.local_time_rfc822,
//   currentTemp: data.current_observation.temp_f,
//   expectedHigh: data.forecast.simpleforecast.forecastday[0].high.fahrenheit,
//   expectedLow: data.forecast.simpleforecast.forecastday[0].low.fahrenheit,
//   summary: data.forecast.txt_forecast.forecastday[0].fcttext  
// }

// const tenDayProps = data.forecast.simpleforecast.forecastday.reduce((array, item) => {
//   // console.log(data.forecast.simpleforecast.forecastday[item])
//   // console.log(item.high.fahrenheit)
//   const dayObj = {
//     weekday: item.date.weekday_short,
//     month: item.date.monthname_short,
//     day: item.date.day,
//     high: item.high.fahrenheit,
//     low: item.low.fahrenheit
//   }
//   return [...array, dayObj]
// }, [])
// console.log(data)
// export default CurrrentWeatherProps

export default FetchData

