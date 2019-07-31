import { shallow } from 'enzyme';
import React from 'react';
import FooScreen from '../index';

import { View, Text } from 'react-native';

describe('Test Foo Screen: ', () => {
  const wrapper = shallow(<FooScreen />);

  it('should match to snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render one View component', () => {
    expect(wrapper.find(View)).toHaveLength(1);
  });

  it('should render 6 Text components', () => {
    expect(wrapper.find(Text)).toHaveLength(6);
  });
});
