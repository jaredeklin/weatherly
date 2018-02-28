import React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../lib/App';
// require('fbjs/lib/ExecutionEnvironment').canUseDOM = true;

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    // localStorage.clear();
    wrapper = shallow(<App />);
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });


  it('Should render the Search component', () => {

    wrapper = mount(<App />)
    expect(wrapper.find('Search').length).toEqual(1);
  });

  it('Should render the Welcome component', () => {
    localStorage.clear();
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

  it('should test a conditional before mount', () => {
    wrapper = mount(<App />)
    wrapper.debug()

    expect(wrapper.state()).toEqual({
        tenDayToggle: true, 
        city: undefined, 
        errorPresent: false
      });
  })

  it('should run getWeatherData when enter is pressed', () => {
    wrapper = mount(<App />);
    wrapper.instance().getWeatherData = jest.fn();

    wrapper.find('input').simulate('keyDown', {keyCode: 13});
    expect(wrapper.instance().getWeatherData).toHaveBeenCalled();
  })

  // it('should run toggleWeatherForecast when the button is clicked', () => {
  //   localStorage.setItem('Denver, CO');
  //   console.log(localStorage)
  //   wrapper = mount(<App />);
  //   wrapper.instance().toggleWeatherForecast = jest.fn();
  //   console.log(wrapper.debug())
  //   wrapper.find('button').simulate('click');
  //   expect(wrapper.instance().toggleWeatherForecast).toHaveBeenCalled();
  // });

});