import { expect } from 'chai';
import Welcome from '../lib/Welcome'


describe('WELCOME', () => {
  let welcome;

  beforeEach(() => {
    welcome = new Welcome()
  });

  it('should exist', () => {
    expect(welcome).to.exist
  });

  
})
