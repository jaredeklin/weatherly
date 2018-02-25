import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Search from './Search';
import CurrentWeather from './CurrentWeather';
import Button from './Button';
import TenDay from './TenDay';
import SevenHour from './SevenHour';
import '../Styles/App.css';
import getData from './api';
import { getSevenHourData, getTenDayData, getCurrentWeatherData } from './specificData';
import Errors from './Errors';
import Welcome from './Welcome'

class App extends Component {
  constructor() {
    super();
    this.state = {
      tenDayToggle: true,
      city: localStorage.location,
      errorPresent: false
    };

    this.toggleWeatherForecast = this.toggleWeatherForecast.bind(this);
    this.getLocation = this.getLocation.bind(this);
  }
  
  componentDidMount() {

    if(this.state.city){
      this.getWeatherData(this.state.city)
    }   
  }

  getWeatherData(chars){
    const splitLocation = chars.split(', ')
    getData(splitLocation)
      .then(response => response.json())    
      .then(weatherData => this.setState({
        city: chars,
        currentWeather: getCurrentWeatherData(weatherData),
        tenDayForecast: getTenDayData(weatherData),//array
        sevenHourForecast: getSevenHourData(weatherData),//arr
        errorPresent: false
      }))

      .catch(this.setState({errorPresent: true}));   
  }

  displayCurrentWeather(weather) {
    return (<CurrentWeather CurrentWeatherProps={weather} />);
  }

  extendedForecast(tenDay, sevenDay) {
    if(this.state.tenDayToggle) {
      return (<TenDay tenDayProps={tenDay} />);
    } else {
      return (<SevenHour sevenHourProps={sevenDay} />);
    }
  }

  displayError() {
    return <div>displayError text</div>
  }

  checkStatus() {
    if (this.state.tenDayForecast && this.state.sevenHourForecast) {
      return true;
    }
  }

  getLocation(chars) {
    this.getWeatherData(chars)
  }

  toggleWeatherForecast () {
    this.setState({tenDayToggle: !this.state.tenDayToggle})  
  }

  render() {

    if(!localStorage.location){
      
      return (<Welcome getLocation={this.getLocation} />)

    } else {

     return (
      <div className="App">
        <div className="left-section">
          <Search getLocation={this.getLocation} />
          <Errors errorPresent={this.state.errorPresent} />
        </div>
        <div className="right-section">

          { this.state.currentWeather ?  this.displayCurrentWeather(this.state.currentWeather) : this.displayError() }
          
          <Button  label="Click for 7-Hour Forecast" toggleWeatherForecast={this.toggleWeatherForecast}/>
         
          { this.checkStatus() ?  this.extendedForecast(this.state.tenDayForecast, this.state.sevenHourForecast) : this.displayError() } 

        </div>
      </div>
    ); 
    }   
  }
}


App.propTypes = {
  // children: React.PropTypes.node,
  currentWeather: PropTypes.object,
  tenDayForecast: PropTypes.array,
  sevenHourForecast: PropTypes.array
  
};

export default App;
