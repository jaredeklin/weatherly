import React from 'react';
import { shallow, mount } from 'enzyme';
import SevenHour from '../lib/SevenHour';


const sevenHour = [
  {hour: "8:00 PM", conditionIcon: "http://icons.wxug.com/i/c/k/nt_cloudy.gif", currentTemp: "26", condition: "Overcast"},
  {hour: "9:00 PM", conditionIcon: "http://icons.wxug.com/i/c/k/nt_cloudy.gif", currentTemp: "24", condition: "Overcast"},
  {hour: "10:00 PM", conditionIcon: "http://icons.wxug.com/i/c/k/nt_mostlycloudy.gif", currentTemp: "23", condition: "Mostly Cloudy"},
  {hour: "11:00 PM", conditionIcon: "http://icons.wxug.com/i/c/k/nt_partlycloudy.gif", currentTemp: "21", condition: "Partly Cloudy"},
  {hour: "12:00 AM", conditionIcon: "http://icons.wxug.com/i/c/k/nt_partlycloudy.gif", currentTemp: "20", condition: "Partly Cloudy"},
  {hour: "1:00 AM", conditionIcon: "http://icons.wxug.com/i/c/k/nt_clear.gif", currentTemp: "17", condition: "Clear"},
  {hour: "2:00 AM", conditionIcon: "http://icons.wxug.com/i/c/k/nt_clear.gif", currentTemp: "16", condition: "Clear"},
  {hour: "3:00 AM", conditionIcon: "http://icons.wxug.com/i/c/k/nt_clear.gif", currentTemp: "13", condition: "Clear"},
]

describe('SevenHour', () => {
  let wrapper;

  beforeEach(() => {
    localStorage.clear();
    wrapper = shallow(<SevenHour sevenHourProps={sevenHour} />);
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it('should render 7 Card components', () => {
    expect(wrapper.find('Card').length).toEqual(7);
  })

  it('should return an article', () => {
    expect(wrapper.find('article').length).toEqual(1)
  })

  it('should return a div with a class name of extended-forecast', () => {
    expect(wrapper.find('.extended-forecast').length).toEqual(7)
  })
})