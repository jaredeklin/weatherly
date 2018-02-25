import React from 'react';
import { shallow, mount } from 'enzyme';
import Buttton from '../lib/Button';

describe.only('Button', () => {
  let wrapper;

  beforeEach( () => {
    localStorage.clear();
    wrapper = shallow(<Button 
      label="Click for 7-Hour Forecast" 
      toggleWeatherForecast={}/>);
  });

  it('should exist', () => {
    console.log(wrapper);
    expect(wrapper).toBeDefined();
  });

  
});