import React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../lib/App';

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    localStorage.clear();
    wrapper = shallow(<App />);
  });

  it('should exist', () => {
    
    expect(wrapper).toBeDefined();
  });

  it('Should render the Search and CurrentWeather components', () => {
    localStorage.setItem('location', 'Denver, CO')
    wrapper = mount(<App />)
    expect(wrapper.find('Search').length).toEqual(1);
  });

  it('Should render the Welcome component', () => {
    expect(wrapper.find('Welcome').length).toEqual(1);
  });

  it('Should initially have set states of a toggle, true; an undefined city, and error of false', () => {
    
    expect(wrapper.state()).toEqual(
      {
        tenDayToggle: true, 
        city: undefined, 
        errorPresent: false
      });
  });

  // it('should set the state of our location', () => {
  //   wrapper.instance().setLocation('denver')
  //   expect(wrapper.state('location')).toEqual( 'denver' );
  // });
});