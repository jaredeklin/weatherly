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

class App extends Component {
  constructor() {
    super();
    this.state = {
      tenDayToggle: true,
      city: localStorage.location
    };
    this.toggleWeatherForecast = this.toggleWeatherForecast.bind(this);
    this.getLocation = this.getLocation.bind(this);
    this.getWeatherData = this.getWeatherData.bind(this)
  }
  
  componentDidMount() {

    if(this.state.city){
      this.getWeatherData(this.state.city)
    }   
  }

  getWeatherData(location){
    const splitLocation = location.split(', ')
    getData(splitLocation)
      .then(response => response.json())
      
      .then(weatherData => this.setState({
        city: location,
        currentWeather: getCurrentWeatherData(weatherData),
        tenDayForecast: getTenDayData(weatherData),//array
        sevenHourForecast: getSevenHourData(weatherData)//arr
      }))

      .catch(err => console.log({err}));   
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

  checkStatus() {
    if (this.state.tenDayForecast && this.state.sevenHourForecast) {
      return true;
    }
  }

  displayError() {
    return (<div>life sucks, deal with it</div>);
  }

  getLocation(value) {
    this.getWeatherData(value)
  }

  toggleWeatherForecast () {
    this.setState({tenDayToggle: !this.state.tenDayToggle})  
  }

  render() {
    
    return (
      <div className="App">
        <div className="left-section">
          <Search getLocation={this.getLocation} getWeatherData={this.getWeatherData}/>
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


App.propTypes = {
  // children: React.PropTypes.node,
  currentWeather: PropTypes.object,
  tenDayForecast: PropTypes.array,
  sevenHourForecast: PropTypes.array
  
};

export default App;
