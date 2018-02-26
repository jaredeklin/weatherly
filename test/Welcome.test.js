import React from 'react';
import { shallow, mount } from 'enzyme';
import Welcome from '../lib/Welcome'


describe('Welcome', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Welcome getLocation={jest.fn()} />);
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it('should return a div with the class name welcome-screen', () => {
    expect(wrapper.find('.welcome-screen').length).toEqual(1)
  });

  it('should return a div with the class name welcome-icons', () => {
    expect(wrapper.find('.welcome-icons').length).toEqual(1)
  });

  it('Should render the Search component', () => {
    expect(wrapper.find('Search').length).toEqual(1);
  });
 
})
