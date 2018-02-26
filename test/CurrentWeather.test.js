import React from 'react';
import { shallow, mount } from 'enzyme';
import CurrentWeather from '../lib/CurrentWeather';

const weather = {location: 'Peoria, IL', 
                currentCondition: 'cloudy',
                month: 'May',
                day: 'Mon', 
                currentTemp: '77', 
                expectedHigh: '78',
                expectedLow: '60', 
                summary: 'pigs flying', 
                icon: ''
              }

describe('Example Test File', () => {
  let wrapper;

  beforeEach(() => {
    localStorage.clear();

    wrapper = shallow(<CurrentWeather CurrentWeatherProps={weather}/>);
  });

  it('should exist', () => {
    
    expect(wrapper).toBeDefined();
  });

  it('should have a element that is an article', () => {
    expect(wrapper.find("article").length).toEqual(1);
  });

  it('should have an inner div element with a location attribute', () => {
    expect(wrapper.find('.location').text()).toEqual('Peoria, IL');
  });

  it('should have an inner div element with a current date attribute', () => {
    
    expect(wrapper.find('.current-date').text()).toEqual('May Mon');
  });

  it('should have an inner div element with a current date attribute', () => {
    
    expect(wrapper.find('.current-date').text()).toEqual('May Mon');
  });

  it('should have an inner div element with a current temp attribute', () => {
    
    expect(wrapper.find('.current-temp').text()).toEqual('77°');
  });

  it('should have an inner div element with a current weather icon attribute', () => {
    
    expect(wrapper.find('.current-weather-icon').text()).toEqual('');
  });

  it('should have an inner div element with an expected high and low temps attribute', () => {
    
    expect(wrapper.find('.high-low-temps').text()).toEqual('78° / 60°');
  });

  it('should have an inner div element with a current conditions attribute', () => {
    
    expect(wrapper.find('.written-current-weather').text()).toEqual('cloudy');
  });

})