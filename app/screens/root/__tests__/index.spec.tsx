import { shallow } from 'enzyme';
import React from 'react';
import RootScreen from '../index';

describe('Test App Screen: ', () => {
  const wrapper = shallow(<RootScreen />);

  it('should render a <Text />', () => {
    expect(wrapper.find('Text')).toHaveLength(1);
  });
});
