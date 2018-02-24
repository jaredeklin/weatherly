import React from 'react';
import PropTypes from 'prop-types';
import '../Styles/Button.css';

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: true,
      counter: 1,
      label: ''
    };

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log('Button is clicked!!');
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn,
      counter: prevState.counter + 1
    }));
  }

  render () {
    return (
      <button onClick={this.handleClick}>{this.state.counter}{this.props.label}</button>
    );
  }  
}

Button.propTypes = {
  label: PropTypes.string
};

export default Button;