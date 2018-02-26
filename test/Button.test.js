import React from 'react';
import { shallow, mount } from 'enzyme';

import Button from '../lib/Button';

describe('Button', () => {
  let wrapper;

  beforeEach( () => {
    localStorage.clear();
    wrapper = mount(<Button label="Click for 7-Hour Forecast" toggleWeatherForecast={jest.fn()}/>);
  });

  it('should exist', () => {
    
    expect(wrapper).toBeDefined();
  });

  it('should render a div element', () => {

    expect(wrapper.find('div').length).toEqual(1);
  })

  it('Should initially have set state of a label', () => {
    
    expect(wrapper.state()).toEqual(
      {
        label: 'Click for 7-Hour Forecast',    
      });
  });  
});
