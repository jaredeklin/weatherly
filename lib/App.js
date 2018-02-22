import React, { Component } from 'react';
import Search from './Search';
import CurrentWeather from './CurrentWeather';
import Button from './Button';
import TenDay from './TenDay';
// import CurrentWeatherProps from './getCurrentWeatherData';
import '../Styles/App.css';
import getData from './api';

class App extends Component {
  constructor(){
    super();
    this.state = {
    }
  }
  
  componentDidMount() {
    getData()
      .then(response => response.json())

      .then(weatherData => this.setState({
        currentWeather: this.getCurrentWeatherData(weatherData),
        tenDayForecast: this.getTenDayData(weatherData)
        // sevenHourForecast: this.getSevenHourData(weatherData)


      }))

      .catch(err => console.log({err}));    
  }

  getTenDayData(weatherData) {
    // console.log(weatherData)
    const tenDayProps = weatherData.forecast.simpleforecast.forecastday.reduce((array, item) => {
      // console.log(item.date.weekday_short)
    const dayObj = {
      weekday: item.date.weekday_short,
      month: item.date.monthname_short,
      day: item.date.day,
      high: item.high.fahrenheit,
      low: item.low.fahrenheit
    }
    return [...array, dayObj]
  }, [])
    return tenDayProps
  }

  getCurrentWeatherData(weatherData) {
      const currentWeather = {
        location: weatherData.current_observation.display_location.full,
        currentCondition: weatherData.current_observation.weather,
        date: weatherData.current_observation.local_time_rfc822,
        currentTemp: weatherData.current_observation.temp_f,
        expectedHigh: weatherData.forecast.simpleforecast.forecastday[0].high.fahrenheit,
        expectedLow: weatherData.forecast.simpleforecast.forecastday[0].low.fahrenheit,
        summary: weatherData.forecast.txt_forecast.forecastday[0].fcttext 
      }
      return currentWeather
  }

  displayCurrentWeather(weather) {
     return (<CurrentWeather CurrentWeatherProps={weather} />)

  }

  displayTenDay(weather) {
    return (<TenDay tenDayProps={weather} />)
  }

  displayError() {
    return (<div>life sucks</div>)
  }

  render() {
    
      return (
        <div className="App">
          <div className="left-section">
            <Search />
          </div>
          <div className="right-section">
            { this.state.currentWeather ?  this.displayCurrentWeather(this.state.currentWeather) : this.displayError() }
            
            <Button />
            { this.state.tenDayWeather ?  this.displayTenDay(this.state.tenDayWeather) : this.displayError() }
          </div>
        </div>
      )
    
     
  }
}

export default App;
