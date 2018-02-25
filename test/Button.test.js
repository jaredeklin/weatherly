import React from 'react';
import { shallow, mount } from 'enzyme';

import Buttton from '../lib/Button';

describe('Button', () => {
  let wrapper;

  beforeEach( () => {
    localStorage.clear();
    wrapper = shallow(<Button />);
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

//   it('render a document title', () => {
//     console.log(wrapper)
//     expect(wrapper.prop('label')).toEqual('Click for 7-Hour Forecast');
// });


  
});