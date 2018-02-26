import React from 'react';
import { shallow, mount } from 'enzyme';

import Button from '../lib/Button';

describe('Button', () => {
  let wrapper;

  beforeEach( () => {
    localStorage.clear();
    wrapper = shallow(<Button label="Click for 7-Hour Forecast" toggleWeatherForecast={jest.fn()}/>);
  });

  it('should exist', () => {
    wrapper.debug()
    expect(wrapper).toBeDefined();
  });  
  
});
