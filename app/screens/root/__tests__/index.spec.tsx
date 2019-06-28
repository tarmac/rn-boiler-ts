import { shallow } from 'enzyme';
import React from 'react';
import RootScreen from '../index';

// Kitten UI
import { View } from 'react-native';

describe('Test App Screen: ', () => {
  const wrapper = shallow(<RootScreen />);

  it('should render a <Button />', () => {
    expect(wrapper.find(View)).toHaveLength(1);
  });
});
