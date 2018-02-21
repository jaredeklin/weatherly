import React, { Component } from 'react';
import Search from './Search';
import CurrentWeather from './CurrentWeather';
import Button from './Button';
import TenDay from './TenDay';
import CurrentWeatherProps from './getCurrentWeatherData';
import '../Styles/App.css';
import getData from './api';

class App extends Component {
  constructor(){
    super();
    this.state = {
      data: {}
    }
  }
  
  componentDidMount() {
    getData()
      .then(response => response.json())
      .then(weatherData => this.setState({data: weatherData}, () => console.log('state', this.state)))
      .catch(err => console.log({err}))
  }

  render() {
    return (
      <div className="App">
        <div className="left-section">
          <Search />
        </div>
        <div className="right-section">
          <CurrentWeather CurrentWeatherProps={CurrentWeatherProps} />
          <Button />
            <TenDay/>
        </div>
      </div>
    )
  }
}

export default App;
