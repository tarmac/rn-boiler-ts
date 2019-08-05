import { shallow } from 'enzyme';
import React from 'react';
import FooScreen from '../index';

describe('Test Foo Screen: ', () => {
  const wrapper = shallow(<FooScreen />);

  it('should match to snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
