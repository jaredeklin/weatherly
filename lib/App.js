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
      .then(weatherData => this.setState({currentWeather: this.getCurrentWeatherData(weatherData)}, () => console.log('state', this.state)))
      .catch(err => console.log({err}));    
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

  render() {
    if(this.state.currentWeather) {
      return (
        <div className="App">
          <div className="left-section">
            <Search />
          </div>
          <div className="right-section">
            <CurrentWeather CurrentWeatherProps={this.state.currentWeather} />
            <Button />
            <TenDay />
          </div>
        </div>
      )
    } else {
      return (
        <div>life sucks </div>
      )
    }
  }
}

export default App;
