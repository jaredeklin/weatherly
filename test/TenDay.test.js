import React from 'react';
import { shallow, mount } from 'enzyme';
import TenDay from '../lib/TenDay';


const tenDay = [
  {weekday: "Mon", month: "Feb", day: 26, icon: "clear.gif", high: "40", low: "0"},
  {weekday: "Tue", month: "Feb", day: 27, icon: "partlycloudy.gif", high: "36", low: "0"},
  {weekday: "Wed", month: "Feb", day: 28, icon: "http://icons.wxug.com/i/c/k/clear.gif", high: "39", low: "0"},
  {weekday: "Thu", month: "Mar", day: 1, icon: "http://icons.wxug.com/i/c/k/partlycloudy.gif", high: "36", low: "0"},
  {weekday: "Fri", month: "Mar", day: 2, icon: "http://icons.wxug.com/i/c/k/clear.gif", high: "38", low: "0"},
  {weekday: "Sat", month: "Mar", day: 3, icon: "http://icons.wxug.com/i/c/k/partlycloudy.gif", high: "35", low: "0"},
  {weekday: "Sun", month: "Mar", day: 4, icon: "http://icons.wxug.com/i/c/k/snow.gif", high: "36", low: "0"},
  {weekday: "Mon", month: "Mar", day: 5, icon: "http://icons.wxug.com/i/c/k/snow.gif", high: "33", low: "0"},
  {weekday: "Tue", month: "Mar", day: 6, icon: "http://icons.wxug.com/i/c/k/snow.gif", high: "29", low: "0"}
]

describe('TenDay', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<TenDay tenDayProps={tenDay} />);
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it('should return an article', () => {
    expect(wrapper.find('article').length).toEqual(1)
  })

  it('should render Card component', () => {
    expect(wrapper.find('Card').length).toEqual(9);
  });

  it('should return a div with a class name of extended-forecast', () => {
    expect(wrapper.find('.extended-forecast').length).toEqual(9)
  })

  it('should generate 9 cards', () => {
    expect(wrapper.find('Card').length).toEqual(9)
  })
})