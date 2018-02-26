import React from 'react';
import { shallow, mount } from 'enzyme';
import Card from '../lib/Card';

const sevenDay = {hour: "8:00 PM", conditionIcon: "image.gif", currentTemp: "26", condition: "Overcast"};
const tenDay = {weekday: "Mon", month: "Feb", day: 26, icon: "clear.gif", high: "40", low: "0"};

describe('Card', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Card day={sevenDay} />);
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it('should return a div with the class name seven-hour-forecast', () => {
    expect(wrapper.find('.seven-hour-forecast').length).toEqual(1)
  });

  it('should return a span with the class name hour', () => {
    expect(wrapper.find('.hour').length).toEqual(1)
  }); 

  it('should pass props to the hour span', () => {
    expect(wrapper.find('.hour').text()).toEqual('8:00 PM');
  });

  it('should return a span with the class name condition', () => {
    expect(wrapper.find('.condition').length).toEqual(1)
  }); 

  it('should pass props to the condition span', () => {
    expect(wrapper.find('.condition').text()).toEqual("Overcast");
  });

  it('should return an img with the class name small-icon', () => {
    expect(wrapper.find('.small-icon').length).toEqual(1)
  }); 

  it('should pass props to the small-icon span', () => {
    expect(wrapper.find('.small-icon').text()).toEqual("");
  });

  it('should return a span with the class name temp', () => {
    expect(wrapper.find('.temp').length).toEqual(1)
  }); 

  it('should pass props to the temp span', () => {
    expect(wrapper.find('.temp').text()).toEqual("26°");
  });


  it('should return a div with the class name ten-day-forecast', () => {
    wrapper = shallow(<Card day={tenDay} />);
    expect(wrapper.find('.ten-day-forecast').length).toEqual(1)
  });

  it('should return a span with the class name weekday', () => {
    wrapper = shallow(<Card day={tenDay} />);
    expect(wrapper.find('.weekday').length).toEqual(1)
  }); 

  it('should pass props to the weekday span', () => {
    wrapper = shallow(<Card day={tenDay} />);
    expect(wrapper.find('.weekday').text()).toEqual('Mon');
  });

  it('should return a span with the class name date', () => {
    wrapper = shallow(<Card day={tenDay} />);
    expect(wrapper.find('.date').length).toEqual(1)
  }); 

  it('should pass props to the date span', () => {
    wrapper = shallow(<Card day={tenDay} />);
    expect(wrapper.find('.date').text()).toEqual('Feb 26');
  });

  it('should return a span with the class name high', () => {
    wrapper = shallow(<Card day={tenDay} />);
    expect(wrapper.find('.high').length).toEqual(1)
  }); 

  it('should pass props to the high span', () => {
    wrapper = shallow(<Card day={tenDay} />);
    expect(wrapper.find('.high').text()).toEqual('40°');
  });

  it('should return a span with the class name low', () => {
    wrapper = shallow(<Card day={tenDay} />);
    expect(wrapper.find('.low').length).toEqual(1)
  }); 

  it('should pass props to the low span', () => {
    wrapper = shallow(<Card day={tenDay} />);
    expect(wrapper.find('.low').text()).toEqual('0°');
  });



})