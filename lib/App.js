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
    };
  }
  
  componentDidMount() {
    getData()
      .then(response => response.json())

      .then(weatherData => this.setState({
        currentWeather: getCurrentWeatherData(weatherData),
        tenDayForecast: getTenDayData(weatherData)//array
        // sevenHourForecast: getSevenHourData(weatherData)//array
      }))

      .catch(err => console.log({err}));    
  }

  displayCurrentWeather(weather) {
    return (<CurrentWeather CurrentWeatherProps={weather} />);
  }

  displayTenDay(weather) {
    return (<TenDay tenDayProps={weather} />);
  }

  displaySevenHour(weather) {
    return (<SevenHour sevenHourProps={weather} />);
  }

  displayError() {
    return (<div>life sucks</div>);
  }

  render() {
    
    return (
      <div className="App">
        <div className="left-section">
          <Search />
        </div>
        <div className="right-section">
          { this.state.currentWeather ?  this.displayCurrentWeather(this.state.currentWeather) : this.displayError() }
          
          <Button label="Click for 7-Hour Forecast" />

         {/* { this.state.sevenHourForecast ?  this.displaySevenHour(this.state.sevenHourForecast) : this.displayError() } */}

          { this.state.tenDayForecast ?  this.displayTenDay(this.state.tenDayForecast) : this.displayError() }

        </div>
      </div>
    );
  
     
  }
}


App.propTypes = {
  children: React.PropTypes.node,
  currentWeather: PropTypes.object,
  tenDayForecast: PropTypes.array,
  sevenHourForecast: PropTypes.array
};

export default App;
