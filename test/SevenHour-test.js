import React from 'react';
import { shallow, mount } from 'enzyme';

import SevenHour from '../lib/SevenHour';

describe('SevenHour', () => {
  let wrapper;

  beforeEach( () => {
    localStorage.clear();
    wrapper = shallow(<SevenHour tenDayProps={jest.fn()}/>);
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });
  
});