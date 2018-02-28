import React from 'react';
import { mount, shallow } from 'enzyme';
import Search from '../lib/Search.js'
import App from '../lib/App.js'

describe('Search', () => {

  let wrapper;

  let props = { getLocation: jest.fn() }

  beforeEach(() => {
    wrapper = shallow(<Search props={props}/>)
  })

  it('should exist', () => {
    
    expect(wrapper).toBeDefined();
  })

  it('should run submit on enter', () => {
    wrapper = mount(<Search getLocation={props.getLocation} />);
    wrapper.find('input').simulate('keyDown', {keyCode: 13});

    expect(wrapper.props().getLocation.called).toBe.true;
    expect(wrapper.props().getLocation).toHaveBeenCalledTimes(1);
  });


  it('should call submit and update state on enter', () => {

    wrapper.instance().submit = jest.fn();

    const locationInput = wrapper.find('input');

    locationInput.simulate('change', { target: {value: 'Denver, CO'}})
    wrapper.find('input').simulate('keyDown', {keyCode: 13});

    expect(wrapper.instance().submit).toHaveBeenCalled();

    expect(wrapper.state()).toEqual(
       {  location: 'Denver, CO', 
          suggestions: [ 'Denver, CO' ] 
        })
  })

  it('should give suggestions based on input', () => {

    const locationInput = wrapper.find('input');

    locationInput.simulate('change', { target: {value: 'Ber'}})

    expect(wrapper.find('option').length).toEqual(2)
    expect(wrapper.state()).toEqual(
      { location: 'Ber', 
        suggestions: [ 'Berkeley, CA', 'Berwyn, IL' ] 
      })
  })


  it('should have an empty state to start', () => {

    expect(wrapper.state().location).toEqual('')
    expect(wrapper.state().suggestions).toEqual([])
  })

  it('should update state with a location', () => {
    expect(wrapper.state().location).toEqual('')

    wrapper.setState({ location: 'Denver, CO' })

    expect(wrapper.state().location).toEqual('Denver, CO');
  })

  it('should have input, section, and a datalist', () => {
    
    expect(wrapper.find('input').length).toEqual(1)
    expect(wrapper.find('section').length).toEqual(1)
    expect(wrapper.find('datalist').length).toEqual(1)
  })

  
  it('should set the state location when user types in a city', () => {
    expect(wrapper.state().location).toEqual('')
    
    wrapper.find('input').simulate('change', {target: {value: 'Peoria, IL'}})

    expect(wrapper.state().location).toEqual('Peoria, IL')
  })
})
