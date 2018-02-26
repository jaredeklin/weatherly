import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../Styles/Button.css';


 
class Button extends Component {
  constructor(props) {
    super();
    this.state = {
      label: 'Click for 7-Hour Forecast' 
    };
  }

  changeLabelToTenDay () {
    return (
      <button onClick={() => {
        this.props.toggleWeatherForecast();
        this.setState({label: 'Click for Ten Day Forecast'})}}>{this.state.label}
      </button>  
    )   
  }

  changeLabelToSevenHour () {
    return (
      <button onClick={() => {
        this.props.toggleWeatherForecast();
        this.setState({label: 'Click for 7-Hour Forecast'})}}>{this.state.label}
      </button>  
    )   
  }
 
  render() {
    return (
      <div>
        {this.state.label === 'Click for 7-Hour Forecast' ? this.changeLabelToTenDay() : this.changeLabelToSevenHour()}
      </div> 
    )
  }
  
}
  


Button.propTypes = {
  label: PropTypes.string.isRequired,
  toggleWeatherForecast: PropTypes.func.isRequired
}

export default Button;